import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import brand1 from "../../assets/image/img-logo.png";
import brand2 from "../../assets/image/img-logo1.png";
import brand3 from "../../assets/image/img-logo2.png";
import brand4 from "../../assets/image/img-logo3.png";


const HomeCarouselBrand = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      interval={2000}
      infiniteLoop={true}
    >
      <div>
        <img src={brand1} style={{ padding: 20, height: 150 }} alt="" />
      </div>
      <div>
        <img src={brand2} style={{ padding: 20, height: 150 }} alt="" />
      </div>
      <div>
        <img src={brand3} style={{ padding: 20, height: 150 }} alt="" />
      </div>
      <div>
        <img src={brand4} style={{ padding: 20, height: 150 }} alt="" />
      </div>
    </Carousel>
  );
};

export default HomeCarouselBrand;
