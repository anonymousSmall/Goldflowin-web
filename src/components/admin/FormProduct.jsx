// rafce
import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { createProduct, deleteProduct } from "../../api/product";
import { toast } from "react-toastify";
import Uploadfile from "./Uploadfile";
import { Link } from "react-router-dom";
import { CirclePlusIcon, Pencil, Trash } from "lucide-react";
import { numberFormat } from "../../utils/number";
import { dateFormat } from "../../utils/dateformat";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const FormProduct = () => {
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);

  const [form, setForm] = useState(initialState);

  useEffect(() => {
    getCategory();
    getProduct(100);
  }, []);

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      setForm(initialState);
      getProduct();
      toast.success(`เพิ่มข้อมูล ${res.data.title} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("จะลบจริงๆ หรอ")) {
      try {
        const res = await deleteProduct(token, id);
        toast.success("Deleted สินค้าเรียบร้อยแล้ว");
        getProduct();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900 uppercase">
          จัดการข้อมูลสินค้า
        </h2>
        <p className="text-gray-500 mt-1">Product Management</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* ชื่อสินค้า */}
          <label className="flex flex-col">
            <span className="text-blue-900 font-semibold mb-1">ชื่อสินค้า:</span>
            <input
              className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={form.title}
              onChange={handleOnChange}
              placeholder="Title"
              name="title"
            />
          </label>

          {/* รายละเอียดสินค้า */}
          <label className="flex flex-col">
            <span className="text-blue-900 font-semibold mb-1">
              รายละเอียดสินค้า:
            </span>
            <textarea
              className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none resize-none h-24"
              value={form.description}
              onChange={handleOnChange}
              placeholder="Description"
              name="description"
            />
          </label>

          {/* ราคาสินค้า */}
          <label className="flex flex-col">
            <span className="text-blue-900 font-semibold mb-1">ราคาสินค้า:</span>
            <input
              className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={form.price}
              onChange={handleOnChange}
              placeholder="Price"
              name="price"
              type="number"
            />
          </label>

          {/* จำนวนสินค้า */}
          <label className="flex flex-col">
            <span className="text-blue-900 font-semibold mb-1">จำนวนสินค้า:</span>
            <input
              className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={form.quantity}
              onChange={handleOnChange}
              placeholder="Quantity"
              name="quantity"
              type="number"
            />
          </label>

          {/* หมวดหมู่สินค้า */}
          <label className="flex flex-col">
            <span className="text-blue-900 font-semibold mb-1">
              หมวดหมู่สินค้า:
            </span>
            <select
              className="p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              name="categoryId"
              onChange={handleOnChange}
              required
              value={form.categoryId}
            >
              <option value="" disabled>
                Please Select
              </option>
              {categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <Uploadfile form={form} setForm={setForm} />

        <button
          type="submit"
          className="mt-4 flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          <CirclePlusIcon /> เพิ่มสินค้า
        </button>

        {/* ตารางสินค้า */}
        <div className="mt-8 overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-gray-800">
            <thead className="bg-gradient-to-r from-blue-200 to-purple-200">
              <tr>
                {[
                  "No.",
                  "รูปภาพ",
                  "ชื่อสินค้า",
                  "รายละเอียด",
                  "ราคา",
                  "จำนวน",
                  "จำนวนที่ขายได้",
                  "วันที่อัปเดต",
                  "จัดการ",
                ].map((th, i) => (
                  <th
                    key={i}
                    className="p-3 text-left text-gray-700 font-semibold uppercase text-sm"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((item, index) => (
                <tr
                  key={item.id}
                  className="hover:bg-blue-50 transition-colors duration-200"
                >
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">
                    {item.images.length > 0 ? (
                      <img
                        src={item.images[0].url}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2 truncate max-w-xs">{item.description}</td>
                  <td className="p-2">{numberFormat(item.price)}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">{item.sold}</td>
                  <td className="p-2">{dateFormat(item.updatedAt)}</td>
                  <td className="p-2 flex gap-2">
                    <Link
                      to={`/admin/product/${item.id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 p-1 rounded-md shadow-sm transition-transform transform hover:scale-105"
                    >
                      <Pencil />
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-400 hover:bg-red-500 p-1 rounded-md shadow-sm transition-transform transform hover:scale-105"
                    >
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default FormProduct;
