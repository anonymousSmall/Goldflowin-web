import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Slide } from "react-slideshow-image";
import SwiperShowProduct from "../../utils/SwiperShowProduct";
import img1 from "../../assets/brandproduct/images/Mitutoyo-logo.png";
import img2 from "../../assets/brandproduct/images/t-boss.jpg";
// import '../../assets/brandproduct/Slide.css'
import Slider from "react-slick";

const BrandProduct = () => {
  const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    // infinite: true,
    // indicators: true,
    // arrows: true
    speed: 1000,
  };
  return (
    <div>
      <Slide>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="each-slide">
            <div className="w-24 h-24">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default BrandProduct;
