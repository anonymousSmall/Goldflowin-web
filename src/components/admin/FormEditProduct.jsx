import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEcomStore from "../../store/ecom-store";
import { readProduct, updateProduct } from "../../api/product";
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
  const descriptionRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState(80); // initial height

  useEffect(() => {
    getCategory();
    fetchProduct(token, id);
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  useEffect(() => {
    // Auto-expand with smooth height
    if (descriptionRef.current) {
      descriptionRef.current.style.height = "auto";
      setTextareaHeight(descriptionRef.current.scrollHeight);
    }
  }, [form.description]);

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

  const fields = [
    { name: "title", placeholder: "ชื่อสินค้า", type: "text", value: form.title },
    { name: "price", placeholder: "ราคา", type: "number", value: form.price },
    { name: "quantity", placeholder: "จำนวน", type: "number", value: form.quantity },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg space-y-4 transform transition-all duration-700 ease-in-out"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -20 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-purple-700 text-center mb-4"
        >
          แก้ไขสินค้า
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <motion.input
              key={index}
              type={field.type}
              name={field.name}
              value={field.value}
              placeholder={field.placeholder}
              onChange={handleOnChange}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -10 }}
              transition={{ delay: index * 0.15 }}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full transform transition hover:scale-105"
            />
          ))}

          {/* Description textarea with framer-motion smooth height */}
          <motion.textarea
            ref={descriptionRef}
            name="description"
            value={form.description}
            placeholder="คำอธิบายสินค้า"
            onChange={handleOnChange}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full col-span-1 md:col-span-2 resize-none transform transition hover:scale-105 overflow-hidden"
            style={{ minHeight: 80 }}
            animate={{ height: textareaHeight }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />

          {/* Category select */}
          <motion.select
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-300 w-full col-span-1 md:col-span-2 transform transition hover:scale-105"
            name="categoryId"
            onChange={handleOnChange}
            required
            value={form.categoryId}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -10 }}
            transition={{ delay: (fields.length + 1) * 0.15 }}
          >
            <option value="" disabled>
              กรุณาเลือกหมวดหมู่
            </option>
            {categories.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </motion.select>
        </div>

        {/* Upload file */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -10 }}
          transition={{ delay: (fields.length + 2) * 0.15 }}
        >
          <Uploadfile form={form} setForm={setForm} />
        </motion.div>

        {/* Submit button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: fadeIn ? 1 : 0, y: fadeIn ? 0 : -10 }}
          transition={{ delay: (fields.length + 3) * 0.15 }}
        >
          แก้ไขสินค้า
        </motion.button>
      </form>
    </div>
  );
};

export default FormEditProduct;
