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
          </div>
          </div>

          {/* Right: Product Info */}
          <div className="md:flex-1 space-y-5">
            <div>
              <label className="block text-lg font-semibold text-gray-800 dark:text-black mb-1">
                ชื่อสินค้า :
              </label>
              <input
                name="title"
                placeholder="กรอกชื่อสินค้า"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-lg text-gray-800 dark:text-black mb-2">
                รายละเอียดสินค้า :
              </label>
              <textarea
                name="description"
                rows="6"
                placeholder="กรอกรายละเอียดสินค้า..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 
                    2.424 0l2.082 5.006 5.404.434c1.164.093 
                    1.636 1.545.749 2.305l-4.117 3.527 
                    1.257 5.273c.271 1.136-.964 2.033-1.96 
                    1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273
                    -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                    2.082-5.005Z"
                  />
                </svg>
              ))}
            </div>

            {/* Price & Stock */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <span className="font-semibold text-black">ราคา:</span>
                <input
                  type="text"
                  name="price"
                  value={numberFormat(form.price)}
                  onChange={(e) =>
                    setForm({ ...form, price: e.target.value })
                  }
                  className="ml-2 border border-gray-300 rounded-md px-3 py-1 w-24 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <span className="font-semibold text-black">สถานะ:</span>
                <span className="ml-2 text-green-600 font-medium">
                  พร้อมจำหน่าย
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full font-bold transition-all shadow-sm hover:shadow-md">
                <ShoppingCart />
                สนใจสั่งซื้อ
              </button>

              <button className="flex items-center justify-center gap-2 bg-green-200 hover:bg-green-300 text-green-800 font-bold py-2 rounded-full transition-all shadow-sm hover:shadow-md">
                <FaLine />
                สอบถามเพิ่มเติม
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------ */}
        {/* Related Products Carousel */}
        {/* ------------------------------ */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            🔥 สินค้าแนะนำ
          </h3>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-2"
          >
            {[...relatedProducts, ...relatedProducts].map((product, index) => (
              <div
                key={index}
                className="min-w-[180px] sm:min-w-[200px] bg-white dark:bg-gray-200 rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all group cursor-pointer flex-shrink-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex flex-col gap-1">
                  <h4 className="font-semibold text-gray-800 text-sm truncate">
                    {product.title}
                  </h4>
                  <p className="text-blue-500 font-bold text-sm">
                    ฿{numberFormat(product.price)}
                  </p>
                  <button className="mt-2 w-full bg-blue-100 hover:bg-blue-200 text-blue-700 text-xs font-semibold py-1 rounded-md transition-all">
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default detaillProduct;


