import React from "react";
import ContentCarousel from "../components/home/ContentCarousel";
import HoverCard from "../components/card/HoverCard";
import MainFooter from "../components/MainFooter";
import home from "../assets/image/home.png";
import AboutCard from "../components/card/AboutCard";
import ServicesCard from "../components/card/ServicesCard";
import review from "../assets/image/Review.png";
import HomeCarousel from "../components/carousel/HomeCarousel";
import DataFooter from "../components/card/DataFooter";
import HomeCarouselBrand from "../components/carousel/HomeCarouselBrand";
import MsgNewsCard from "../components/card/MsgNewsCard";
import card1 from "../assets/image/card1.png";
import Header from "../components/Header";
import Client from "../components/Client";
import Community from "../components/Community";
import photo1 from "../assets/image/photo1.jpg"
import Article from "../components/Article";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <HomeCarousel className="max-w-7xl mx-auto" />
      {/* <Client/> */}
      {/* <div className="shadow-2xl rounded-md mt-1">
        <img src={review} alt=""/>
      </div> */}
      <Header/>
      <Community/>
      {/* <Article/> */}
      <Client/>
      {/* <Services/> */}
    </div>
  );
};

export default Home;












