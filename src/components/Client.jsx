import React from "react";
import clientImgLogo01 from "../assets/image/logo/accretech.png";
import clientImgLogo02 from "../assets/image/logo/accud.png";
import clientImgLogo03 from "../assets/image/logo/aikoh.png";
import clientImgLogo04 from "../assets/image/logo/carmar.png";
import clientImgLogo05 from "../assets/image/logo/carton.png";
import clientImgLogo06 from "../assets/image/logo/chuer.png";
import clientImgLogo07 from "../assets/image/logo/digicon.png";
import clientImgLogo08 from "../assets/image/logo/eisen.png";
import clientImgLogo09 from "../assets/image/logo/fluk.png";
import clientImgLogo10 from "../assets/image/logo/gin.png";
import clientImgLogo11 from "../assets/image/img-logo.png";
import clientImgLogo12 from "../assets/image/img-logo1.png";
import clientImgLogo13 from "../assets/image/img-logo2.png";
import clientImgLogo14 from "../assets/image/img-logo3.png";
import HomeCarouselBrand from "./carousel/HomeCarouselBrand";
import BrandSlider from "./BrandSlider";

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
];

function Client() {
  return (
   <div className='container mx-auto max-w-[1320px] py-10 text-center'>
      <h2 className='text-[2.25rem] font-semibold text-[#1E3A8A]'>แบรนด์ที่จัดจำหน่าย</h2>
      <ul className='flex flex-col items-center my-10 md:flex-row md:justify-between'>
        {clientsImgLogo.map((client, index) => (
           <li key={index}>
               <img 
                 src={client} 
                 alt=""
                 className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
           </li>
        ))}
      </ul>
   </div>
  );
}

export default Client;


