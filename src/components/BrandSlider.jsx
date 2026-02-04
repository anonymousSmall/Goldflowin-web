import React from "react";

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
];

export default function BrandSlider() {
  return (
    <div className="overflow-x-hidden py-8 bg-white w-full">
      <div className="relative flex animate-scroll gap-8 px-8 max-w-full">
        {[...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[100px] sm:min-w-[120px]"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
