import React from "react";

// import รูปจาก assets
import accretech from "../assets/images/logo/accretech.png";
import accud from "../assets/images/logo/accud.png";
import aikoh from "../assets/images/logo/aikoh.png";
import carmar from "../assets/images/logo/carmar.png";
import carton from "../assets/images/logo/carton.png";
import chuer from "../assets/images/logo/chuer.png";
import digicon from "../assets/images/logo/digicon.png";
import eisen from "../assets/images/logo/eisen.png";
import fluk from "../assets/images/logo/fluk.png";
import gin from "../assets/images/logo/gin.png";
import hexagon from "../assets/images/logo/hexgon.png";
import imada from "../assets/images/logo/imada.png";
import insize from "../assets/images/logo/insize.png";
import jadever from "../assets/images/logo/jadever.png";
import mahr from "../assets/images/logo/mahr.png";
import mitutoyo from "../assets/images/logo/mitutoyo.png";
import ojiyas from "../assets/images/logo/ojiyas.png";
import peacock from "../assets/images/logo/peacock.png";
import shahe from "../assets/images/logo/shahe.png";
import shimadzu from "../assets/images/logo/shimadzu.png";
import zepper from "../assets/images/logo/zepper.png";
import tboss from "../assets/images/logo/t-boss.png";
import tanita from "../assets/images/logo/tanita.png";
import vertex from "../assets/images/logo/vertex.png";

const brands = [
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
  insize,
  jadever,
  mahr,
  mitutoyo,
  ojiyas,
  peacock,
  shahe,
  shimada,
  zepper,
  tboss,
  tanita,
  vertex
];

export default function BrandSlider(){
  return (
    <div className="overflow-hidden py-8 bg-white">
      <div className="relative flex w-max animate-scroll">
        {[...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-8 min-w-[120px]"
          >
            <img
              src={logo}
              alt={`Brand ${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
