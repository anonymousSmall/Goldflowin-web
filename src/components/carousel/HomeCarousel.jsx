import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../assets/image/photoslide/3.png";
import slide2 from "../../assets/image/photoslide/4.png";
import slide3 from "../../assets/image/photoslide/5.png";
import slide4 from "../../assets/image/photoslide/6.png";
import slide5 from "../../assets/image/photoslide/7.png";
import slide6 from "../../assets/image/photoslide/8.png";
import slide7 from "../../assets/image/photoslide/9.png";
import slide8 from "../../assets/image/photoslide/10.png";
import slide9 from "../../assets/image/photoslide/11.png";
import slide10 from "../../assets/image/photoslide/12.png";
import slide11 from "../../assets/image/photoslide/13.png";

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
        <div key={index} className="w-full">
          <img
            src={img}
            alt={`slide-${index}`}
            className="
              w-full
              h-auto sm:h-[300px] md:h-[400px] lg:h-[500px]
              object-cover
            "
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;


















