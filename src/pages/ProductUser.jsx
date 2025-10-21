import React, { useState, useEffect } from "react";
import {
  createProduct,
  readProduct,
  listProduct,
  updateProduct,
  detailProducts,
} from "../api/product";
import useEcomStore from "../store/ecom-store";
import { useNavigate, useParams } from "react-router-dom";
import Uploadfileview from "../components/admin/Uploadfileview";
import { Image, ShoppingCart } from "lucide-react";
import { FaLine } from "react-icons/fa6";
import { numberFormat } from "../utils/number";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};

const detaillProduct = ({ item }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const actionAddtoCart = useEcomStore((state) => state.actionAddtoCart);
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    getCategory();
    fetchProduct(id, form);
  }, []);

  const fetchProduct = async (id, form) => {
    try {
      // Code
      const res = await detailProducts(id, form);
      console.log("res from bankend", res);
      setForm(res.data);
      console.log(res.data.images[0].url);
    } catch (err) {
      console.log("Err fetch data", err);
    }
  };

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Start Product Return */}

          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-black dark:bg-gray-200 mb-4">
              <div className="w-full h-full bg-white rounded-md flex items-center justify-center shadow-sm">
                <Uploadfileview form={form} setForm={setForm} />
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-black mb-2">
              ชื่อสินค้า : <input value={form.title} placeholder="Title" name="title" />
            </h2>
            <div className="text-black dark:text-black text-sm">
              <label className="font-semibold text-lg">
                รายละเอียดข้อมูลสินค้า :
              </label>
              <textarea
                name="input"
                id="input"
                rows="15"
                cols="50"
                required=""
                placeholder=""
                value={form.description}
                onChange={(e) => setForm(e.target.value)}
                className="rounded-lg p-4 bg-black/2 font-mono font-medium text-sm"
              ></textarea>
            </div>
            <div class="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6 text-yellow-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clip-rule="evenodd"
                />
              </svg>
              {/* <span class="ml-2 text-gray-600">4.5</span> */}
              {/* <span class="ml-2 text-gray-600">4.5 (120 reviews)</span> */}
            </div>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-black dark:text-black">
                  ราคา:
                </span>
                <span className="text-gray-600 dark:text-black">
                  <input
                    className="px-2"
                    type="text"
                    id="name"
                    name="name"
                    required
                    size="3"
                    value={numberFormat(form.price)}
                    onChange={(e) => setForm(e.target.value)}
                  />
                </span>
              </div>
              <div>
                <span className="font-bold text-black dark:text-black">
                  Availability: 
                </span>
                <span className="text-gray-600 dark:text-black">In Stock</span>
              </div>
            </div>
            
            {/* Start Add Cart & Add Contact */}
            <div className="flex -mx-2 mb-4 my-4">
              <div className="w-1/2 px-2">
                <button
                  // onClick={() => actionAddtoCart(item)}
                  className=" shadow-transparent w-full bg-blue-400 dark:bg-blue-400 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <p className="flex items-center justify-center gap-4">
                    <ShoppingCart />
                    สนใจสั่งซื้อ
                  </p>
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-green-200 dark:bg-green-700 text-green-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 dark:hover:bg-green-600">
                  <div className="flex items-center justify-center gap-4">
                    <FaLine />
                    สอบถามเพิ่มเติม
                  </div>
                </button>
              </div>
            </div>
            {/* End Add Cart & Add Contact */}
          </div>
          {/* End Product Return */}
        </div>
      </div>
    </div>
  );
};

export default detaillProduct;
