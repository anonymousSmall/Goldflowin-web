import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/image/photoslide/2.png";
import slide2 from "../../assets/image/photoslide/3.png";
import slide3 from "../../assets/image/photoslide/4.png";
import slide4 from "../../assets/image/photoslide/5.png";
import slide5 from "../../assets/image/photoslide/6.png";
import slide6 from "../../assets/image/photoslide/7.png";
import slide7 from "../../assets/image/photoslide/8.png";
import slide8 from "../../assets/image/photoslide/9.png";
import slide9 from "../../assets/image/photoslide/10.png";
import slide10 from "../../assets/image/photoslide/11.png";
import slide11 from "../../assets/image/photoslide/12.png";
import slide12 from "../../assets/image/photoslide/13.png";

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
        <img src={slide1} alt="" />
      </div>
      <div>
        <img src={slide2} alt="" />
      </div>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <img src={slide4} alt="" />
      </div>
      <div>
        <img src={slide5} alt="" />
      </div>
      <div>
        <img src={slide6} alt="" />
      </div>
      <div>
        <img src={slide7} alt="" />
      </div>
      <div>
        <img src={slide8} alt="" />
      </div>
      <div>
        <img src={slide9} alt="" />
      </div>
      <div>
        <img src={slide10} alt="" />
      </div>
      <div>
        <img src={slide11} alt="" />
      </div>
      <div>
        <img src={slide12} alt="" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;



