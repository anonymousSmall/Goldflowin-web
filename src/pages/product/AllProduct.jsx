import React, { useEffect } from "react";
import ProductCards from "../../components/card/ProductCards";
import SearchCardAllProduct from "../../components/card/SearchCardAllProduct";
import SearchCardName from "../../components/card/SearchCardName";
import useEcomStore from "../../store/ecom-store";
import { Menu, MenuItem, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AllProduct = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <section className="bg-gray-50 py-6">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* หัวข้อ */}
        <div className="md:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-700 border-b-4 border-blue-600 pb-2">
            สินค้าทั้งหมด
          </h2>


        </div>
          {/* เมนูตัวกรอง */}
          {/* <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-100 ring-1 ring-gray-300">
              เครื่องมือวัดละเอียด
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
              <div className="py-1">
                <MenuItem>
                  <SearchCardAllProduct />
                </MenuItem>
              </div>
            </MenuItems>
          </Menu> */}
        {/* ช่องค้นหา */}
        <div className="mt-5 mb-6">
          <SearchCardName />
        </div>

        {/* แสดงสินค้า */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <ProductCards key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
