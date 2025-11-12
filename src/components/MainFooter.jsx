import React from "react";
import {
  FaRegPaperPlane,
  FaInstagram,
  FaDribbble,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa6";
import logo2 from "../assets/image/logo2.jpg";
import logo3 from "../assets/image/Logo3.png";

function MainFooter() {
  return (
    <div className="bg-[#253238] py-20">
      <div className="container mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 m-10 md:m-0 md:grid-cols-2">
          <div>
            <img
              src={logo3}
              className="h-16 rounded-2xl shadow-slate-100"
              alt=""
            />
            <p className="my-10 text-white">
              Copyright © 2025 GoldFlow ltd. <br />
              All rights reserved
            </p>
            <ul className="flex mb-5 md:flex-row">
              <li className="mr-[1rem]">
                <a className="text-white text-[1.5rem]" href="#">
                  <FaRegPaperPlane />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a className="text-white text-[1.5rem]" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a className="text-white text-[1.5rem]" href="#">
                  <FaDribbble />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a className="text-white text-[1.5rem]" href="#">
                  <FaTwitch />
                </a>
              </li>
              <li className="mr-[1rem]">
                <a className="text-white text-[1.5rem]" href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <div>
              <h4 className="text-[1.25rem] text-white font-semibold">
                Company
              </h4>
              <ul className="flex flex-col mb-5">
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    หน้าแรก
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    CatalogProduct
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    รายละเอียดสินค้า
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    ติดต่อเรา
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-[1.25rem] text-white font-semibold">
                Support
              </h4>
              <ul className="flex flex-col mb-5">
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    Help center
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    Terms of service
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    Legal
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    Privacy policy
                  </a>
                </li>
                <li className="mt-2">
                  <a className="text-white text-[0.875rem]" href="">
                    Status
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-[1.25rem] text-white font-semibold">Stay up to date</h4>
              <form action="" className="flex mt-5">
                <div className="relative">
                  <input type="text" className="bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md" placeholder="Your email address" />
                  <button className="absolute top-[10px] right-[10px] cursor-pointer" type="submit">
                    <FaRegPaperPlane className="text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFooter;





