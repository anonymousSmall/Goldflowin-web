import React from "react";
import { Eye, ShoppingCart, SquareChartGantt } from "lucide-react";
import useEcomStore from "../../store/ecom-store";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";
import { numberFormat } from "../../utils/number";
import { FaLine } from "react-icons/fa6";

const ProductCard = ({ item }) => {
  const actionAddtoCart = useEcomStore((state) => state.actionAddtoCart);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const getBrandProduct = useEcomStore((state) => state.getBrandProduct);
  const brands = useEcomStore((state) => state.brands);
  //   console.log(item);

  return (
    <>
      <section className="w-fix mx-auto grid justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        <div className="w-72 flex bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          {item.images && item.images.length > 0 ? (
            <a href="#">
              <img
                src={item.images[0].url}
                alt="Product"
                class="p-1 mx-auto h-60 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  ชื่อสินค้า :
                </span>
                {item.title}
                <div className="flex items-center">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Price :
                  </span>
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {numberFormat(item.price)} ฿
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2"></p>
                  </del>
                </div>
                <ul class="mt-2 flex items-center gap-4">
                  <li class="flex items-center gap-2">
                    <svg
                      class="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                      />
                    </svg>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Fast Delivery
                    </p>
                  </li>

                  <li class="flex items-center gap-2">
                    <svg
                      class="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Best Price
                    </p>
                  </li>
                </ul>
                <div class="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <Link to={"/productuser/" + item.id}>
                    <button
                      type="button"
                      class="inline-flex items-center rounded-lg bg-primary-700 px-2 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <Eye />
                      Read Me..
                    </button>
                  </Link>
                  {/* <Link> */}
                    <div className="">
                      <button className="w-full bg-green-200 dark:bg-green-700 text-green-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 dark:hover:bg-green-600">
                        <div className="flex items-center justify-center gap-4">
                          <FaLine size={24} />
                          <a href="https://line.me/ti/p/jfZGdWx11H" target="_black">
                            สอบถามเพิ่มเติม
                          </a>
                        </div>
                      </button>
                    </div>
                    {/* <button
                      type="button"
                      class="inline-flex items-center rounded-lg bg-primary-700 px-2 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <Eye />
                      สอบถามเพิ่มเติม
                    </button> */}
                  {/* </Link> */}
                </div>
              </div>
            </a>
          ) : (
            <div className="w-full h-32 bg-gray-200 rounded-md text-center flex items-center justify-center shadow">
              No Image
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCard;
