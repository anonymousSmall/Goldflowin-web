import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/image/photoslide/2.png";

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
    </Carousel>
  );
};

export default HomeCarousel;




