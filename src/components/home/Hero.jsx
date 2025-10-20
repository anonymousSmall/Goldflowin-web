import React from "react";
import Slider from "react-slick";
import Image1 from "../img/logo1.png";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "TestProduct1",
    title: "TitleTest",
    title2: "Title2Test",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam laborum cupiditate incidunt eos? Magnam non, nulla quod exercitationem labore voluptas maxime est provident cumque accusantium error, voluptates consequatur tempora laudantium",
  },
];
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="py-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
