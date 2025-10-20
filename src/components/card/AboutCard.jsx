import React from "react";
import { services } from "../../data/exampleCard";
import card1 from "../../assets/image/card1.png";

const AboutCard = () => {
  return (
    <>
      <div className="text-center text-2xl capitalize py-6 font-medium tracking-wider dark:text-white">
        {/* <h2>we sell quality women handbags</h2> */}
      </div>
      <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
        {/* <!-- card item --> */}
        <div className="w-64 shadow-md rounded-lg bg-gray-200 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4 ">
            <img
              className="rounded-lg h-32 w-full"
              src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxiYWd8ZW58MHwwfHx8MTcxODM4NDYwNHww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div className="p-4 capitalize text-center text-2xl font-semibold dark:text-blue-900">
            <h2>เครื่องมือวัด</h2>
          </div>
          <div className="flex justify-between dark:text-black p-4 capitalize text-xl font-medium">
            <div>
              <h3 className="text-xl font-light italic text-gray-700">
                บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
                เป็นตัวแทนจำหน่ายเครื่องมือวัดละเอียดทางด้านอุตสาหกรรม เช่น
                Video Measuring Machine(VMM), Profile Projector, CMM, ARM,
                Contour, Roundness, Surftest, Stereo Microscope, และ Handness
                Tester
              </h3>
            </div>
          </div>
          {/* <div class="p-2">
            <button class="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">
              อ่านเพิ่มเติม
            </button>
          </div> */}
        </div>
        {/* <!-- card item -->
<!-- card item --> */}
        <div className="w-64 shadow-md rounded-lg bg-gray-200 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4 ">
            <img
              className="rounded-lg h-32 w-full"
              src="https://images.unsplash.com/photo-1566150902887-9679ecc155ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YmFnfGVufDB8MHx8fDE3MTgzODQ2MDR8MA&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div className="p-4 capitalize  text-2xl font-semibold dark:text-blue-900">
            <h2>เครื่องชั่งน้ำหนัก</h2>
          </div>
          <div className="flex justify-between dark:text-black p-4 capitalize text-xl font-medium">
            <div>
              <h3 className="text-xl font-light italic text-gray-700">
                บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
                เป็นตัวแทนจำหน่ายเครื่องชั่งน้ำหนักทุกประเภท ทุกรุ่น ทุกยี่ห้อ
                รวมถึงบริการหลังการขาย เช่น งานซ่อม งานสอบเทียบ
                นอกจากนี้ทางบริษัทจะมีการรับประกันสินค้า 1 ปี
              </h3>
            </div>
          </div>
          {/* <div class="p-2">
            <button class="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">
              อ่านเพิ่มเติม
            </button>
          </div> */}
        </div>
        {/* <!-- card item --> */}
        {/* <!-- card item --> */}
        <div className="w-64 shadow-md rounded-lg bg-gray-200 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4 ">
            <img
              className="rounded-lg h-32 w-full"
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxiYWd8ZW58MHwwfHx8MTcxODM4NDYwNHww&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div className="p-4 capitalize  text-2xl font-semibold dark:text-blue-900">
            <h2>บริการสอบเทียบ</h2>
          </div>
          <div className="flex justify-between dark:text-black p-4 capitalize text-xl font-medium">
            <div>
              <h3 className="text-xl font-light italic text-gray-700">
                บริษัท โกลโฟล อินสตรูเมนท์ จำกัด จำกัด
                มีการบริการสอบเทียบเครื่องมือวัดทางด้านอุตสาหกรรม และ
                เครื่องชั่งทั้งในและนอกสถานที่ด้วยมาตรฐานการรับรองห้องปฏิบัติการสอบเทียบ
                มอก. 17025-2548 ตามขอบข่าย
              </h3>
            </div>
          </div>
          {/* <div class="p-2">
            <button class="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">
              อ่านเพิ่มเติม
            </button>
          </div> */}
        </div>
        {/* <!-- card item --> */}
        {/* <!-- card item --> */}
        <div className="w-64 shadow-md rounded-lg bg-gray-200 hover:scale-105 duration-300 hover:shadow-xl">
          <div className="p-4 ">
            <img
              className="rounded-lg h-32 w-full"
              src="https://images.unsplash.com/photo-1559563458-527698bf5295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoYW5kYmFnfGVufDB8MHx8fDE3MTgzODk0OTF8MA&ixlib=rb-4.0.3&q=80&w=1080"
            />
          </div>
          <div className="p-4 capitalize  text-2xl font-semibold dark:text-blue-900">
            <h2>หลักสูตรอบรม</h2>
          </div>
          <div className="flex justify-between dark:text-black p-4 capitalize text-xl font-medium">
            <div>
              <h3 className="text-xl font-light italic text-gray-700">
                หลักสูตรอบรม การใช้งานเครื่องมือวัด เครื่องชั่งน้ำหนัก
                เต็มรูปแบบโดยผู้เชี่ยวชาญมากประสบการณ์ทางด้านเครื่องมือวัด
                ยาวนานมากกว่า 10 ปี
                หลังจบหลักสูตรสามารถนำไปปฏิบัติงานใช้งานได้จริง
                พร้อมทั้งออกใบรับรองการอบรม
              </h3>
            </div>
          </div>
          {/* <div class="p-2">
            <button class="uppercase text-white text-xl font-bold text-center rounded-lg bg-blue-500 p-2 w-full">
              อ่านเพิ่มเติม
            </button>
          </div> */}
        </div>
        {/* <!-- card item --> */}
      </div>
    </>
  );
};

export default AboutCard;
