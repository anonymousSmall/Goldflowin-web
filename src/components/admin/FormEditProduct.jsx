import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import {
  readProduct,
  updateProduct,
} from "../../api/product";
import { toast } from "react-toastify";
import Uploadfile from "./Uploadfile";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const FormEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);

  const [form, setForm] = useState(initialState);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    getCategory();
    fetchProduct(token, id);

    // Trigger fade-in animation
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const fetchProduct = async (token, id) => {
    try {
      const res = await readProduct(token, id);
      setForm(res.data);
    } catch (err) {
      console.log("Err fetch data", err);
    }
  };

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProduct(token, id, form);
      toast.success(`แก้ไขข้อมูล ${res.data.title} สำเร็จ`);
      navigate("/admin/product");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex items-center justify-center p-4 transition-opacity duration-700 ease-in-out">
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg space-y-4 transform transition-all duration-700 ease-in-out ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-4">
          แก้ไขสินค้า
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "title", placeholder: "ชื่อสินค้า", type: "text", value: form.title },
            { name: "description", placeholder: "คำอธิบายสินค้า", type: "text", value: form.description },
            { name: "price", placeholder: "ราคา", type: "number", value: form.price },
            { name: "quantity", placeholder: "จำนวน", type: "number", value: form.quantity },
          ].map((field, index) => (
            <input
              key={index}
              type={field.type}
              name={field.name}
              value={field.value}
              placeholder={field.placeholder}
              onChange={handleOnChange}
              className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full transform transition duration-500 ease-in-out hover:scale-105`}
            />
          ))}

          <select
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full col-span-1 md:col-span-2 transform transition duration-500 ease-in-out hover:scale-105"
            name="categoryId"
            onChange={handleOnChange}
            required
            value={form.categoryId}
          >
            <option value="" disabled>
              กรุณาเลือกหมวดหมู่
            </option>
            {categories.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Upload file */}
        <Uploadfile form={form} setForm={setForm} />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          แก้ไขสินค้า
        </button>
      </form>
    </div>
  );
};

export default FormEditProduct;
