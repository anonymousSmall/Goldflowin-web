import React from 'react'
import services from '../assets/image/service-gf.png'

function Community() {
    return (
        <section className="relative w-full bg-white py-14 md:py-20">
            <div className="relative max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-xl group">

                {/* Background */}
                <div className="h-[320px] sm:h-[380px] md:h-[460px]">
                    <img
                        src={services}
                        alt="Service Background"
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
                    />
                </div>

                {/* 🔥 Overlay Layer */}
                <div className="absolute inset-0 flex items-center">

                    {/* Diagonal Modern Panel */}
                    <div
                        className="
          relative w-full md:w-[60%] h-full 
          flex items-center
          backdrop-blur-[2px]
        "
                        style={{
                            clipPath: "polygon(0 0, 88% 0, 68% 100%, 0% 100%)"
                        }}
                    >

                        {/* Gradient Base */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3c66]/95 via-[#0b3c66]/85 to-[#0b3c66]/60" />

                        {/* Glow Layer */}
                        <div className="absolute inset-0 bg-[#0b3c66]/20 blur-2xl opacity-70" />

                        {/* Tech Highlight Line */}
                        <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />

                        {/* Content */}
                        <div className="relative px-6 sm:px-10 md:px-14 text-white space-y-4">

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
                                บริการ
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90">
                                ซ่อม / สอบเทียบ
                                <br />
                                และอบรมการใช้งาน
                                <br />
                                ด้วยทีมงานผู้เชี่ยวชาญในเครื่องมือต่างๆ
                                <br />
                                ทางอุตสาหกรรม
                            </p>

                        </div>
                    </div>
                </div>

                {/* 🔵 Decorative Tech Elements */}
                {/* <div className="hidden sm:flex absolute bottom-6 right-6 md:bottom-10 md:right-12 gap-4 opacity-80">
      <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0b5fc6] rounded-xl shadow-[0_0_20px_rgba(11,95,198,0.5)]" />
      <div className="w-10 h-16 md:w-14 md:h-20 bg-[#0b5fc6] rounded-xl shadow-[0_0_20px_rgba(11,95,198,0.5)]" />
    </div>

    <div className="hidden sm:flex absolute bottom-6 right-24 md:bottom-10 md:right-32 gap-4 opacity-60">
      <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0b5fc6] rounded-xl" />
      <div className="w-10 h-16 md:w-14 md:h-20 bg-[#0b5fc6] rounded-xl" />
    </div> */}

            </div>
        </section>
        // <section className='relative w-full bg-white py-16'>
        //     <div className='relative max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg'>
        //         {/* Background Image */}
        //         <div className='h-[420px] bg-cover bg-center'>
        //             <img src={services} alt="Service Background" className=" object-cover" />
        //         </div>
        //         {/* End Background Image */}

        //         {/* Blue Overlay */}
        //         <div className='absolute inset-0 flex'>
        //             <div className='w-[55%] bg-[#0b3c66]/95 clip-left flex items-center '>
        //                 <div className="px-12 text-white space-y-4">
        //                     <h1 className="text-4xl font-bold">บริการ</h1>

        //                     <p className="text-xl leading-relaxed">
        //                         ซ่อม / สอบเทียบ
        //                         <br />
        //                         และอบรมการใช้งาน
        //                         <br />
        //                         ด้วยทีมงานผู้เชี่ยวชาญในเครื่องมือต่างๆ
        //                         <br />
        //                         ทางอุตสาหกรรม
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* End Blue Overlay */}

        //         {/* Decorative Shaps */}
        //         <div className="absolute bottom-8 right-10 flex gap-4">
        //             <div className="w-14 h-14 bg-[#0b5fc6] rounded-xl" />
        //             <div className="w-14 h-20 bg-[#0b5fc6] rounded-xl" />
        //         </div>

        //         <div className="absolute bottom-8 right-28 flex gap-4">
        //             <div className="w-14 h-14 bg-[#0b5fc6] rounded-xl" />
        //             <div className="w-14 h-20 bg-[#0b5fc6] rounded-xl" />
        //         </div>
        //         {/* End Decorative Shaps */}
        //     </div>
        // </section>
    )
}

export default Community