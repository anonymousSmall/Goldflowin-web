import React from 'react'
import clientImgLogo01 from '../assets/img/clients/client-01.png'
import clientImgLogo02 from '../assets/img/clients/client-02.png'
import clientImgLogo03 from '../assets/img/clients/client-03.png'
import clientImgLogo04 from '../assets/img/clients/client-04.png'
import clientImgLogo05 from '../assets/img/clients/client-05.png'
import clientImgLogo06 from '../assets/img/clients/client-06.png'
import clientImgLogo07 from '../assets/img/clients/client-07.png'

// import รูปจาก assets
import accretech from "../assets/image/logo/accretech.png";
import accud from "../assets/image/logo/accud.png";
import aikoh from "../assets/image/logo/aikoh.png";
import carmar from "../assets/image/logo/carmar.png";
import carton from "../assets/image/logo/carton.png";
import chuer from "../assets/image/logo/chuer.png";
import digicon from "../assets/image/logo/digicon.png";
import eisen from "../assets/image/logo/eisen.png";
import fluk from "../assets/image/logo/fluk.png";
import gin from "../assets/image/logo/gin.png";
import hexagon from "../assets/image/logo/hexagon.png";
import imada from "../assets/image/logo/imada.png";
import insize from "../assets/image/logo/insize.png";
import jadever from "../assets/image/logo/jadever.png";
import mahr from "../assets/image/logo/mahr.png";
import mitutoyo from "../assets/image/logo/mitutoyo.png";
import ojiyas from "../assets/image/logo/ojiyas.png";
import peacock from "../assets/image/logo/peacock.png";
import shahe from "../assets/image/logo/shahe.png";
import shimadzu from "../assets/image/logo/shimadzu.png";
import zepper from "../assets/image/logo/zepper.png";
import tboss from "../assets/image/logo/t-boss.png";
import tanita from "../assets/image/logo/tanita.png";
import vertex from "../assets/image/logo/vertex.png";
import morewright from "../assets/image/logo/more&wright.png";
import mikrosize from "../assets/image/logo/mokrosize.png";

const clientsImgLogo = [
    // clientImgLogo01,
    // clientImgLogo02,
    // clientImgLogo03,
    // clientImgLogo04,
    // clientImgLogo05,
    // clientImgLogo06,
    // clientImgLogo07,
    accretech,
    accud,
    aikoh,
    carmar,
    carton,
    chuer,
    digicon,
    eisen,
    fluk,
    gin,
    hexagon,
    imada,
    mikrosize,
    insize,
    jadever,
    mahr,
    mitutoyo,
    ojiyas,
    peacock,
    shahe,
    shimadzu,
    zepper,
    tboss,
    tanita,
    vertex,
    morewright,
]


function Clients() {
    return (
        <div className="container mx-auto max-w-[1320px] py-10 text-center px-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d3f66] 
            mb-6 md:mb-10 text-center md:text-center leading-tight tracking-wide">
                แบรนด์ที่จัดจำหน่าย
            <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></span>
            </h2>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 my-10 items-center">
                {clientsImgLogo.map((client, index) => (
                    <li key={index} className="flex justify-center hover:scale-110 transition-transform duration-300">
                        <img
                            src={client}
                            alt="brand"
                            className="max-h-[60px] sm:max-h-[70px] md:max-h-[80px] object-contain grayscale hover:grayscale-0 transition duration-300"
                        />
                    </li>
                ))}
            </ul>
        </div>
        // <div className='container mx-auto max-w-[1320px] py-10 text-center'>
        //     <h2 className='text-[2.25rem] font-semibold text-[#1E3A8A]'>แบรนด์ที่จัดจำหน่าย</h2>

        //     <ul className='flex flex-col items-center my-10 md:flex-row md:justify-between'>
        //         {clientsImgLogo.map((client, index) => (
        //             <li key={index}>
        //                 <img src={client} alt="" />
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    )
}

export default Clients