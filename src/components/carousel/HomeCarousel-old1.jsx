import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../assets/image/photoslide/3.svg";
import slide2 from "../../assets/image/photoslide/4.svg";
import slide3 from "../../assets/image/photoslide/5.svg";
import slide4 from "../../assets/image/photoslide/6.svg";
import slide5 from "../../assets/image/photoslide/7.svg";
import slide6 from "../../assets/image/photoslide/8.svg";
import slide7 from "../../assets/image/photoslide/9.svg";
import slide8 from "../../assets/image/photoslide/10.svg";
import slide9 from "../../assets/image/photoslide/11.svg";
import slide10 from "../../assets/image/photoslide/12.svg";
import slide11 from "../../assets/image/photoslide/13.svg";

const images = [
  slide1, slide2, slide3, slide4, slide5,
  slide6, slide7, slide8, slide9, slide10, slide11,
];

const HomeCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      swipeable
      emulateTouch
    >
      {images.map((img, index) => (
        <div key={index} className="container mx-auto w-auto h-auto p-10 flex flex-col md:flex-row md:justify-between md:items-center md:p-0">
          <img
            src={img}
            alt={`slide-${index}`}
            className="h-auto object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;




























