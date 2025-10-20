import React, { useState, useEffect, use } from "react";
import useEcomStore from "../../store/ecom-store";
import {
  createCategory,
  listCategory,
  removeCategory,
} from "../../api/Category";
import { toast } from "react-toastify";

const FormCategory = () => {
  // Javascript

  const token = useEcomStore((state) => state.token);
  const [name, setName] = useState("");
  //   const [categories, setCategories] = useState([]);
  const categories = useEcomStore((state) => state.categories);
  const getCategory = useEcomStore((state) => state.getCategory);

  useEffect(() => {
    getCategory(token);
  }, []);

  //   const getCategory = async (token) => {
  //     try {
  //       const res = await listCategory(token);
  //       setCategories(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  const handleSubmit = async (e) => {
    // Code
    e.preventDefault();
    if (!name) {
      return toast.warning("Please fill data");
    }
    try {
      const res = await createCategory(token, { name });
      console.log(res.data.name);
      toast.success(`Add Category ${res.data.name} success!!!`);
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = async (id) => {
    console.log(id);
    try {
      const res = await removeCategory(token, id);
      console.log(res);
      toast.success(`Deleted ${res.data.name} success`);
      getCategory(token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      {/* <h1>Category Management</h1> */}
      <div className="my-2 py-4">
        <h2 className="font-black text-blue-900 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-2">
          จัดการหมวดหมู่สินค้า
          <p className="text-gray-400 text-base my-1">Category Management</p>
        </h2>
      </div>

      <form className="my-4" onSubmit={handleSubmit}>
        <div>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
              ชื่อหมวดหมู่ :
            </h2>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
            placeholder="Category"
          />
        </div>
        <button class="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg mt-3 p-2 text-white rounded-lg w-30 hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out">
          Add Category
        </button>
        {/* <input
          onChange={(e) => setName(e.target.value)}
          className="border"
          type="text"
        />
        <button className="bg-blue-500 rounded-md text-white">
          Add Category
        </button> */}
        {/* <hr /> */}
        <br />
      </form>
      <hr />
      <div className=" overflow-x-auto">
        <table className="table w-full border rounded-md shadow-xl">
          <thead>
            <tr className="bg-gray-200 border">
              <th className="py-3 px-6 text-left">No.</th>
              <th className="py-3 px-6 text-center">รายชื่อหมวดหมู่</th>
              <th className="py-3 px-6 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item, index) => {
              return (
                <tr key={index}>
                  <th className="py-3 px-6 text-left">{index + 1}</th>
                  <td className="py-3 px-6 text-center">{item.name}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="bg-red-500 text-white hover:bg-red-700 rounded-md px-2 py-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      REMOVE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <ul className="list-none">
        {categories.map((item, index) => (
          <li className="flex justify-between my-2" key={index}>
            <span>{item.name}</span>
            <button
              className="bg-red-500 rounded-md px-2 py-2"
              onClick={() => handleRemove(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default FormCategory;
