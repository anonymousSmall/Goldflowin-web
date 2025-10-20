import React, { useEffect, useState } from "react";
import ProductCards from "../../components/card/ProductCards";

import SearchCard from "../../components/card/SearchCard";
import useEcomStore from "../../store/ecom-store";
import { Menu, MenuItem, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SearchCardAllProduct from "../../components/card/SearchCardAllProduct";
import SearchCardName from "../../components/card/SearchCardName";

const AllProduct = ({ item }) => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const [text, setText] = useState("");

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section class=" bg-gray-50 antialiased dark:bg-gray-100 md:py-4 rounded-md shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mb-4 items-end justify-center space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="inline-block text-2xl pb-2 mb-4 border-b-4 border-blue-600">
              <p className="text-gray-600 text-4xl">สินค้าทั้งหมด</p>
            </h2>
          </div>
        </div>
        <SearchCardName />
        <div className="flex justify-between p-4">
          <div></div>
          {/* <div> */}

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                เครื่องมือวัดละเอียด
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </div>
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <SearchCardAllProduct />
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          {/* </div> */}
        </div>
        {/* <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4"> */}
        {/* <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"> */}
        <div className="flex flex-wrap gap-4">
          {products.map((item, index) => (
            <ProductCards key={index} item={item} />
          ))}
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </section>
    // <section class="flex bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
    //   <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    //     <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
    //       <div>
    //         <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
    //           Electronics
    //         </h2>
    //       </div>
    //     </div>
    //     <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
    //       <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
    //         <div class=" flex h-56 w-full">
    //           {products.map((item,index)=>(
    //             <ProductCards key={index} item={item}/>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </section>
  );
};

export default AllProduct;
