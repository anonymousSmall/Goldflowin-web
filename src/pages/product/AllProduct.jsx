import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ProductCards from "../../components/card/ProductCards";
import SearchCardAllProduct from "../../components/card/SearchCardAllProduct";
import SearchCardName from "../../components/card/SearchCardName";
import useEcomStore from "../../store/ecom-store";

const AllProduct = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);

  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [categorySelected, setCategorySelected] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([getProduct(), getCategory()]);
      setLoading(false);
    };
    fetchData();
  }, []);
const handleCheck = (e) => {
    // console.log(e.target.value)
    const inCheck = e.target.value; // ค่าที่เรา ติ๊ก
    const inState = [...categorySelected]; // [1,2,3] arr ว่าง
    const findCheck = inState.indexOf(inCheck); // ถ้าไม่เจอ จะ return -1

    if (findCheck === -1) {
      inState.push(inCheck);
    } else {
      inState.splice(findCheck, 1);
    }
    setCategorySelected(inState);

    if (inState.length > 0) {
      actionSearchFilters({ category: inState });
    } else {
      getProduct();
    }
  };

  const filteredProducts =
    selectedCategory === "ทั้งหมด"
      ? products
      : products.filter((p) => p.categoryName === selectedCategory);

  // 🌀 Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        {/* <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div> */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin !important"></div>

        <p className="text-gray-600 text-lg">กำลังโหลดข้อมูลสินค้า...</p>
      </div>
    );
  }

  // ✨ Animation variant (แยก parent / child)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-10 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">
            🛒 สินค้าทั้งหมด
          </h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 rounded-full"></div>
          <p className="mt-3 text-gray-600 text-base md:text-lg">
            ค้นหาสินค้าคุณภาพจากแบรนด์ชั้นนำที่เราคัดสรรมาเพื่อคุณ
          </p>
        </motion.div>

        {/* Filter + Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Dropdown Category */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex items-center gap-x-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100 ring-1 ring-gray-300 transition-all duration-200">
                {/* <SearchCardAllProduct /> */}
                {/* <ChevronDownIcon className="w-5 h-5 text-gray-500" /> */}
              </MenuButton>
            </div>

            <MenuItems className="absolute z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="py-2">
                <MenuItem>

                  {({ active }) => (
                    <button
                      onClick={() => setCategorySelected("ทั้งหมด")}
                      className={`${
                        active ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      } block w-full text-left px-4 py-2 text-sm`}
                    >
                      ทั้งหมด
                    </button>
                  )}
                </MenuItem>
                {categories && categories.length > 0 ? (
                  categories.map((cat) => (
                    <MenuItem key={cat.id || cat._id}>
                      {({ active }) => (
                        <button
                          onClick={() => setCategorySelected(cat.name)}
                          className={`${
                            active
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          } block w-full text-left px-4 py-2 text-sm`}
                        >
                          {cat.name}
                        </button>
                      )}
                    </MenuItem>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-400 text-sm">
                    ไม่มีหมวดหมู่
                  </div>
                )}
                
              </div>
            </MenuItems>
          </Menu>

          {/* Search */}
          <div className="w-full sm:w-auto flex-1 max-w-lg">
            <SearchCardName />
          </div>
        </motion.div>

        {/* Product List */}
        {filteredProducts.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((itemData, index) => (
              <motion.div
                key={index}
                variants={item}
                className="w-full rounded-2xl transition-all duration-300 p-4"
              >
                <ProductCards item={itemData} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="No products"
              className="w-32 h-32 mb-6 opacity-70"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              ไม่พบสินค้าที่ตรงกับหมวดหมู่ "{selectedCategory}"
            </h3>
            <p className="text-gray-500">โปรดลองเลือกหมวดหมู่อื่นหรือลองค้นหาใหม่</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllProduct;













