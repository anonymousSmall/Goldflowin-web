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

const clientsTmgLogo = [
  //   clientImgLogo01,
  //   clientImgLogo02,
  //   clientImgLogo03,
  //   clientImgLogo04,
  //   clientImgLogo05,
  //   clientImgLogo06,
  //   clientImgLogo07,
  //   clientImgLogo08,
  //   clientImgLogo09,
  //   clientImgLogo10,
  clientImgLogo11,
  //   clientImgLogo12,
  //   clientImgLogo13,
  //   clientImgLogo14,
];

function Client() {
  return (
    <div className="container mx-auto max-w-[1320px] py-10 text-center">
      <h2 className="text-[2.25rem] font-semibold text-blue-900">
        แบรนด์ที่จัดจำหน่าย123
      </h2>
      <p className="text-[#717171] text-[1.4rem] mb-5 inline-block border-b-2 border-[#3936fa]">
        Our Service
      </p>
      <ul className="flex flex-col items-center my-10 md:flex-row md:justify-between">
        {clientsTmgLogo.map((client,index)=>(
            <li key={index}>
                <img src={client} alt="" />
            </li>
        ))}
        {/* <HomeCarouselBrand /> */}
      </ul>
    </div>
  );
}

export default Client;




