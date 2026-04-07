import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaDribbble, FaTwitter, FaYoutube } from 'react-icons/fa6'
import logoWhite from '../assets/img/logo-white.png'
import Logo from '../assets/image/new/01logo.png'
import { Link, NavLink } from "react-router-dom";


function MainFooter() {
  return (
    <div className="bg-[#263238] py-16">
      <div className="container mx-auto max-w-[1320px] px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[520px] w-full mx-auto md:mx-0">
            <img
              src={Logo}
              alt="logo"
              className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] object-contain mb-6"
            />

            <p className="text-gray-300 text-sm leading-relaxed">
              Copyright © 2025 GoldFlow ltd. <br />
              All rights reserved
            </p>

            <ul className="flex gap-4 mt-6 justify-center md:justify-start">
              <li><a className="text-white text-xl hover:text-blue-400 transition"><FaInstagram /></a></li>
              <li><a className="text-white text-xl hover:text-pink-400 transition"><FaDribbble /></a></li>
              <li><a className="text-white text-xl hover:text-sky-400 transition"><FaTwitter /></a></li>
              <li><a className="text-white text-xl hover:text-red-500 transition"><FaYoutube /></a></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-[520px] w-full mx-auto md:mx-0">

            {/* MENU */}
            <div>
              <h3 className="text-white font-semibold mb-4">เมนู</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white text-md transition">หน้าแรก</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white text-md transition">Catalog</a>
                </li>
                <li>
                  <a href="/Catalog" className="text-gray-300 hover:text-white text-md transition">ดาวน์โหลดแคตตาล็อก</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white text-md transition">ติดต่อเรา</a>
                </li>
              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div>
              <h3 className="text-white font-semibold mb-4">สมัครรับข่าวสาร</h3>

              <form className="flex items-center bg-white/10 rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent text-white px-4 py-2 w-full text-sm focus:outline-none"
                />
                <button className="px-4 text-white hover:text-blue-400 transition">
                  <FaRegPaperPlane />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
    // <div className='bg-[#263238] py-20'>
    //   <div className='container mx-auto max-w-[1320px]'>
    //     <div className='grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'>
    //       <div className="flex flex-col items-start md:items-start text-center md:text-left">
    //         <img src={Logo} alt="logo"
    //           className='w-full max-w-[220px] md:max-w-[260px] lg:max-w-[300px]' />
    //         <p className='my-6 text-white text-sm sm:text-base'>
    //           Copyright © 2025 GoldFlow ltd. <br />
    //           All rights reserved
    //         </p>
    //         <ul className='flex gap-4'>
    //           <li><a className='text-white text-xl hover:text-blue-400 transition'><FaInstagram /></a></li>
    //           <li><a className='text-white text-xl hover:text-pink-400 transition'><FaDribbble /></a></li>
    //           <li><a className='text-white text-xl hover:text-sky-400 transition'><FaTwitter /></a></li>
    //           <li><a className='text-white text-xl hover:text-red-500 transition'><FaYoutube /></a></li>
    //         </ul>
    //       </div>

    //       <div className='grid grid-cols-1 md:grid-cols-3'>
    //         <div>
    //           <ul className='flex flex-col mb-5'>
    //             <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">หน้าแรก</a></li>
    //             <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">Catalog</a></li>
    //             <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">ดาวน์โหลดแคตตาล็อกบริษัท</a></li>
    //             <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">ติดต่อเรา</a></li>
    //           </ul>
    //         </div>
    //         <div>
    //           <form action="" className='flex mt-5'>
    //             <div className='relative'>
    //               <input type="text" className='bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md' placeholder='Your email address' />
    //               <button className='absolute top-[10px] right-[10px] cursor-pointer' type="submit"><FaRegPaperPlane className='text-white' /></button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default MainFooter
