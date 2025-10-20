import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/image/slide-1.png";
import slide2 from "../../assets/image/slide-2-new.png";
import slide3 from "../../assets/image/slide-3.png";
import slide4 from "../../assets/image/slide-4.png";

const HomeCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      interval={2000}
      infiniteLoop={true}
    >
      <div>
        <img src={slide2} alt="" />
      </div>
      <div>
        <img src={slide1} alt="" />
      </div>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <img src={slide4} alt="" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
