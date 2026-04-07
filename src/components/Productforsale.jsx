import React from 'react'
import { Ruler, Microscope, Scale } from "lucide-react";
import company from "../assets/image/company.png";
import company1 from "../assets/image/new/2.01.png";
import logogf1 from "../assets/image/new/2.02.png";
import product1 from "../assets/image/new/2.03.png";
import product2 from "../assets/image/new/2.04.png";
import product3 from "../assets/image/new/2.05.png";


const Productforsale = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE */}
                <div className="relative flex justify-center">

                    {/* Circle Image */}
                    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                        <img
                            src={company1}
                            alt="company"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Company Label */}
                    <img
                        className="absolute bottom-2 left-5 w-[140px] sm:w-[180px] md:w-[320px]"
                        src={logogf1}
                        alt="GF Instrument"
                    />
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d3f66] mb-6 md:mb-10 text-center md:text-left leading-tight tracking-wide ">
                        สินค้าที่จำหน่าย
                    </h1>

                    <div className="space-y-4 md:space-y-0">

                        {/* ITEM 1 */}
                        <div className="flex justify-start transition duration-300 hover:scale-110 hover:drop-shadow-xl">
                            <img
                                src={product1}
                                alt="Product 1"
                                className="w-[90%] sm:w-[80%] md:w-[70%] object-contain"
                            />
                        </div>

                        {/* ITEM 2 */}
                        <div className="flex justify-end transition duration-300 hover:scale-110 hover:drop-shadow-xl">
                            <img
                                src={product2}
                                alt="Product 2"
                                className="w-[90%] sm:w-[80%] md:w-[70%] object-contain"
                            />
                        </div>

                        {/* ITEM 3 */}
                        <div className="flex justify-start transition duration-300 hover:scale-110 hover:drop-shadow-xl">
                            <img
                                src={product3}
                                alt="Product 3"
                                className="w-[90%] sm:w-[80%] md:w-[70%] object-contain"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        // <section className='py-16 bg-white-100'>
        //     <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center'>
        //         {/* LEFT SIDE */}
        //         <div className='relative flex justify-center'>
        //             {/* Start Cricle Image */}
        //             <div className="w-[420px] h-[420px] rounded-full overflow-hidden shadow-xl border-8 border-white">
        //                 <img src={company1} alt="company"/>
        //             </div>
        //             {/* End Cricle Image */}
        //             {/* Start Company Label */}
        //             <img className='absolute bottom-0 left-[-15px] text-white px-18 py-4 rounded-r-xl' src={logogf1} alt="GF Instrument" />
        //             {/* End Company Label */}
        //         </div>
        //         {/* End LEFT SIDE */}

        //         {/* RIGHT SIDE */}
        //         <div>
        //             <h1 className='text-4xl font-blod text-[#0d3f66] mb-10'>
        //                 สินค้าที่จำหน่าย
        //             </h1>
        //             <div className='space-y-[-30px]'>
        //                 {/* ITEM 1 */}
        //                 <div className='flex  items-center text-white transition hover:-translate-y-[1px]'>
        //                     <img src={product1} alt="Product 1" />
        //                 </div>
        //                 {/* ITEM 2 */}
        //                 <div className='flex ml-[30%] mr-[-20%] items-center text-white transition hover:-translate-y-[1px]'>
        //                     <img src={product2} alt="Product 1" />
        //                 </div>
        //                 {/* ITEM 3 */}
        //                 <div className='flex items-center text-white transition hover:-translate-y-[1px]'>
        //                     <img src={product3} alt="Product 1" />
        //                 </div>
        //             </div>
        //         </div>
        //         {/* End RIGHT SIDE */}
        //     </div>
        // </section>
    )
}

export default Productforsale