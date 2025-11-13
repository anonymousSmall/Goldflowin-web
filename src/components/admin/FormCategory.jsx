import React, { useState, useEffect } from "react";
import useEcomStore from "../../store/ecom-store";
import { createCategory, removeCategory } from "../../api/Category";
import { toast } from "react-toastify";

const FormCategory = () => {
  const token = useEcomStore((state) => state.token);
  const [name, setName] = useState("");
  const categories = useEcomStore((state) => state.categories);
  const getCategory = useEcomStore((state) => state.getCategory);

  useEffect(() => {
    getCategory(token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return toast.warning("Please fill data");
    try {
      const res = await createCategory(token, { name });
      toast.success(`Added Category "${res.data.name}" successfully!`);
      setName("");
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (id) => {
    try {
      const res = await removeCategory(token, id);
      toast.success(`Deleted "${res.data.name}" successfully!`);
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
          จัดการหมวดหมู่สินค้า
        </h2>
        <p className="text-gray-400 mt-1">Category Management</p>
      </div>

      {/* Form */}
      <form
        className="flex flex-col md:flex-row items-center gap-4 mb-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category"
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-50 dark:text-gray-900 shadow-sm transition-all duration-300"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:from-purple-400 hover:to-blue-400 transition-all duration-300
          animate-glow"
        >
          Add Category
        </button>
      </form>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                No.
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                รายชื่อหมวดหมู่
              </th>
              <th className="py-3 px-6 text-center text-sm font-semibold text-gray-700">
                จัดการ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categories.map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-blue-50 transition-colors duration-200 opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <td className="py-3 px-6 text-left text-gray-800">{index + 1}</td>
                <td className="py-3 px-6 text-center text-gray-700">{item.name}</td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-sm hover:shadow-red-400/50 animate-glow"
                  >
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={3} className="py-4 text-center text-gray-400">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease forwards;
          }

          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(139, 92, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.7), 0 0 30px rgba(139, 92, 246, 0.7);
            }
          }
          .animate-glow {
            animation: glow 2s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default FormCategory;
