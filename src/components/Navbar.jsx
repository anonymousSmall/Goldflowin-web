import React, { useState } from 'react'
import Logo from '../assets/img/logo-black.png'
import { FaBars } from 'react-icons/fa'
import logo1 from "../assets/image/GF-1.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

    const [dropdown, setDropdown] = useState(false);
    const [dropdowns, setDropdowns] = useState(false);
    const [toggle, setToggle] = useState(false);
    const updateToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav className='backdrop-blur-md bg-[#003b6e]/70 border-b border-[#003b6e]/40 shadow-xl transition-all fixed top-0 w-full z-50'>
            <div className='container mx-auto max-w-[1320px] relative h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:h-[80px]'>
                <div>
                    <a href="">
                        <img src={logo1} className='h-20 drop-shadow-md transition-transform hover:scale-105' alt="" />
                    </a>
                </div>

                <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full'>
                        {/* <a href="#">หน้าแรก</a> */}
                        <Link
                            to="/"
                        >
                            หน้าแรก
                        </Link>
                    </li>
                    {/* <li className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full'><a href="#">Catalog</a></li> */}
                    <li
                        className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 
  md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent 
  md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full flex items-center gap-1 cursor-pointer'

                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                        onClick={() => setDropdown(!dropdown)}
                    >
                        สินค้าของเรา
                        <span className="text-xs">▼</span>

                        {dropdown && (
                            <div className="absolute top-full left-0 w-[250px] pt-2 bg-[#f3f3f3] border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-50">

                                <ul className="py-2 max-h-[420px] overflow-y-auto">
                                    <li className=" group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องวัดขนาดชิ้นงานผลิต <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-0 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>กล้องวัดขนาดชิ้นงาน 2.5D</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>PROFILE PROJECTOR</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>CCD CAMERA</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องวัดชิ้นงานแบบสัมผัส <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-15 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>CONTOUR</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>ROUNGNESS</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>SURFTEST</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>COORDINATE MEASURING MACHINE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>PROTABLE CMM ARM</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>ROUNDNESS</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องเทสชิ้นงาน <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-26 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>HARDNESS TESTER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>PUSH PULL TESTER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>CUTTING / POLISHING MACHINE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>TENSILE MACHINE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>SALT SPRAY</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>OVEN</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องมือวัดชิ้นงาน <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-37 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>VERNIER CALIPER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>MICROMETER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>DIAL INDICATOR / DIAL TEST</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>HEIGHT GAUGE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>THICKNESS GAUGE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>HOLE TEST / BORE GAUGE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>DIAL TEST</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องมือตรวจสอบต่างๆ <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-47 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>FEELLER GAUGE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>SCALE LUPE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>PIN GAUGE / GAUGE BLOCK</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>PLUG GAUGE / RING GAUGE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>TORQUE WRENCH</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>GRANIT / CAST IRON SURFACE</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องมือทดสอบห้องปฏิบัติการ <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-59 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>THERMOMETER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>CONDUCTIVITY</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>BRIX METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>TRUE METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>LIGHT METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>VOICE METER / SOUND METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>GAUSS METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>GLOSS METER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>MAGNETIC FIELD TESTER</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>DEMAGNETIZER</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/Home.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>เครื่องชั่งน้ำหนัก <span className="text-gray-400 text-sm">{">"}</span></a>
                                        {/* 🔥 SUBMENU */}
                                        <div className="absolute top-69 left-full ml-[1px] w-[260px] bg-[#f3f3f3] border-l border-gray-300 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                            <ul className="py-2 max-h-[320px] overflow-y-auto">
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>INDUSTRIAL BALANCE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>HOSPITAL BALANCE</p>
                                                </li>
                                                <li className="px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                                    <p className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>ANIMAL SCALE</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* <li className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full'><a href="#">สินค้า</a></li> */}
                    {/* MENU บริการ */}
                    <li
                        className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 
  md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent 
  md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full flex items-center gap-1 cursor-pointer'

                        onMouseEnter={() => setDropdowns(true)}
                        onMouseLeave={() => setDropdowns(false)}
                        onClick={() => setDropdowns(!dropdowns)}
                    >
                        บริการ
                        <span className="text-xs">▼</span>

                        {dropdowns && (
                            <div className="absolute top-full left-0 w-[250px] pt-2 bg-[#f3f3f3] border border-gray-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-50">

                                <ul className="py-2 max-h-[420px] overflow-y-auto">
                                    <li className=" group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/contact.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>สอบเทียบ ISO17025</a>
                                    </li>
                                    <li className=" group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/contact.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>ซ่อมเครื่องมือ</a>
                                    </li>
                                    <li className=" group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/contact.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>บำรุงรักษาเครื่องมือ เครื่องจักร</a>
                                    </li>
                                    <li className=" group px-5 py-2.5 text-[15px] text-gray-700 hover:bg-gray-200 flex justify-between items-center cursor-pointer border-b border-gray-200 last:border-none">
                                        <a href="../pages/contact.jsx" className='relative font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#003b6e]/10 md:px-0 
                                        md:py-0 md:mx-0 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 
                                        md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-[#003b6e] md:after:transition-all 
                                        md:after:duration-300 md:hover:after:w-full'>อบรมการใช้งาน</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* <li className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full'><a href="#">บริการ</a></li> */}
                    <li className='relative text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/10 md:px-0 md:py-0 md:mx-4 md:rounded-none md:hover:bg-transparent md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 md:hover:after:w-full'>
                        {/* <a href="#">ติดต่อเรา</a> */}
                        <Link
                        to="/contact"
                        >
                            ติดต่อเรา
                        </Link>
                    </li>
                </ul>


                <ul className={`${!toggle ? 'hidden' : 'flex'} flex flex-col my-5 md:flex md:flex-row`}>
                    <li className='my-2 md:mx-4'><a className='inline-flex justify-center py-2 px-4 text-white rounded-md' href="#">Login</a></li>
                    <li className='my-2 md:mx-4'><a className='inline-flex justify-center py-2 px-4 bg-[#4CAF4F] text-white rounded-md' href="#">Sign up</a></li>
                </ul>

                {/* Hamburger menu button */}
                <FaBars onClick={updateToggle} className='absolute right-5 cursor-pointer text-xl md:hidden' />
            </div>
        </nav>
    )
}

export default Navbar