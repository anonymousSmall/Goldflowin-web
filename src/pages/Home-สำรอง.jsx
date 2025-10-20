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

const Home = () => {
  return (
    <div>
      <div className="py-1">
        {/* <ContentCarousel /> */}
        <HomeCarousel />
      </div>
      {/* <div className="about-head">
        <div className="sectionSubText">Brand</div>
      </div> */}
      {/* <HoverCard /> */}
      <div className="shadow-2xl rounded-md">
        <img src={review} alt="" />
      </div>
      <hr />
      <div className="container px-4 mx-auto items-center">
        <div className="mx-4 flex flex-wrap justify-center">
          <div className="text-center py-4 px-4 my-4 w-full xl-x-1/5">
            <h2 className="font-black text-blue-900 text-center text-4xl leading-none uppercase max-w-2xl mx-auto mb-2">
              บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
            </h2>
            <h2 className="inline-block text-2xl pb-2 mb-4 border-b-4 border-blue-600">
              <p className="text-gray-600 text-xl">
                Goal Flow Instrument Co.,Ltd.
              </p>
            </h2>
            <div>
              <p className="inline-block text-left text-xl">
                เรามุ่งมั่นมอบบริการที่ดีและครบวงจรที่สุดให้กับลูกค้าของเราทุกคน
                ด้วยประสบการณ์ด้านเครื่องมือวัดละเอียดมากกว่า25ปี
              </p>
              <br />
              <br />
              <p className="inline-block text-left text-xl">
                โดยริเริ่มก่อตั้ง ตั้งแต่ พ.ศ. 2543
                ดำเนินกิจการจำหน่ายเครื่องมือวัดละเอียด ในโรงงานอุตสาหกรรม
                พร้อมจำหน่ายเครื่องชั่งน้ำหนักทุกชนิด
                และมีห้องปฏิบัติการสอบเทียบ
              </p>
              <br />
              <br />
              <p className="inline-block text-3xl">
                " สามารถได้รับรองมาตราฐาน ISO17025 ด้านมิติ มวล และ กลศาสตร์"
              </p>
            </div>
            <br />
            <hr />
            <div className="text-center py-4 mx-auto">
              <h2 className="font-black text-blue-900 text-center text-4xl leading-none uppercase max-w-2xl mx-auto mb-2">
                จุดเด่นบริการของเรา
              </h2>
              <h2 className="inline-block text-2xl pb-2 border-b-4 border-blue-600">
                <p className="text-gray-600 text-xl">Our Services</p>
              </h2>
            </div>
          </div>
          <AboutCard />
          {/* <ServicesCard/> */}
        </div>
      </div>
      {/* <div className="">
        <img src={logobrand} alt="" />
      </div> */}
      <br />
      <hr />
      {/* เริ่มต้นข่าวสาร */}
      {/* <div className="text-center py-4 mx-auto">
        <h2 className="font-black text-blue-900 text-center text-4xl leading-none uppercase max-w-2xl mx-auto mb-2">
          ข่าวสารของ บริษัท โกลโฟล อินสตรูเมนท์
        </h2>
        <h2 className="inline-block text-2xl pb-2 mb-4 border-b-4 border-blue-600">
          <p className="text-gray-600 text-xl">Goal Flow Instrument NEWS</p>
        </h2>
      </div>
      <MsgNewsCard/> */}
      {/* สินสุดข่าวสาร */}
      <br />
      {/* <hr /> */}
      <div className="text-center py-4 mx-auto">
        <h2 className="font-black text-blue-900 text-center text-4xl leading-none uppercase max-w-2xl mx-auto mb-2">
          แบรนด์ที่จัดจำหน่าย
        </h2>
        <h2 className="inline-block text-2xl pb-2 border-b-4 border-blue-600">
          <p className="text-gray-600 text-xl">Our Brands</p>
        </h2>
      </div>
      <HomeCarouselBrand />
      {/* <DataFooter /> */}
    </div>
  );
};

export default Home;
