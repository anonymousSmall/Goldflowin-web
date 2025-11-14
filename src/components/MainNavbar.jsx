import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-white/40 backdrop-blur-lg shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
          PremiumShop
        </div>

        {/* Hamburger (แสดงบน iPad + Mobile) */}
        <FaBars
          onClick={() => setToggle(!toggle)}
          className="text-2xl text-indigo-500 cursor-pointer lg:hidden hover:scale-110 transition"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium text-indigo-600">
          <li className="hover:text-indigo-800 transition cursor-pointer">
            หน้าแรก
          </li>
          <li className="hover:text-indigo-800 transition cursor-pointer">
            สินค้า
          </li>
          <li className="hover:text-indigo-800 transition cursor-pointer">
            เกี่ยวกับเรา
          </li>
          <li className="hover:text-indigo-800 transition cursor-pointer">
            ติดต่อ
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-white/70 backdrop-blur-xl shadow-lg rounded-b-2xl"
          >
            <ul className="flex flex-col gap-4 py-5 px-6 text-indigo-700 font-medium">
              <li className="py-2 px-3 rounded-xl hover:bg-indigo-100/60 hover:shadow-md transition cursor-pointer">
                หน้าแรก
              </li>
              <li className="py-2 px-3 rounded-xl hover:bg-indigo-100/60 hover:shadow-md transition cursor-pointer">
                สินค้า
              </li>
              <li className="py-2 px-3 rounded-xl hover:bg-indigo-100/60 hover:shadow-md transition cursor-pointer">
                เกี่ยวกับเรา
              </li>
              <li className="py-2 px-3 rounded-xl hover:bg-indigo-100/60 hover:shadow-md transition cursor-pointer">
                ติดต่อ
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
