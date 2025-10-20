import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import home from '../../assets/image/home.png';
import { services } from "../../data/exampleCard";

const ContentCarousel = () => {
  // Javascript
  const [data, setData] = useState([]);
  useEffect(() => {
    // hdlGetImage();
  }, []);
  const hdlGetImage = () => {
    // Code
    axios
      .get("https://picsum.photos/v2/list?page=1&limit=15")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper h-80 object-cover rounded-2xl mb-4"
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        slidesPerView={5}
        spaceBetween={10}
        pagination={true}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper object-cover rounded-md"
      >
        {data?.map((item, index) => (
          <SwiperSlide>
            <img className="rounded-md" src={item.download_url} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default ContentCarousel;
