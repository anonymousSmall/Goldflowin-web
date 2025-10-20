import React from "react";
import card1 from "../assets/image/card1.png";
import photo1 from "../assets/image/photo11.jpg"

function Header() {
  return (
    <div className="bg-[#F5F7FA] h-auto md:h-[37.5rem] flex items-center">
      <div className="container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between md:p-0">
        <div>
          <h1 className="text-4xl text-blue-900 font-semibold">
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
          </h1>
          <p className="text-[#717171] mt-5 font-semibold text-[1.25rem]  border-b-2 inline-block border-[#3936fa] ">
            Goal Flow Instrument Co.,Ltd.
          </p>
          <p className="mt-5 text-[1.5em]">
            เรามีความรู้และความเชี่ยวชาญในเครื่องมือต่างๆทางอุตสาหกรรม <br />
          </p>
          <p className="flex flex-col font-semibold py-3 px-3">
            <span className="font-bold">
              - จำหน่ายเครื่องมือวัด/เครื่องชั่ง <br />
              - จำหน่าย/จัดหาอุปกรณ์ตามความต้องการ
              <br />
              - ให้บริการสอบเทียบเครื่องมือต่างๆ
              <br />
              - บริการซ่อมเครื่องมือ/ปรับปรุงแก้ไขอุปกรณ์ต่างๆ
              <br />- งานสั่งทำเครื่องมือตามความต้องการตามลักษณะงาน
            </span>
          </p>
        </div>
        <div>
          <img className="bg-gray-800 shadow-lg shadow-gray-800/50" src={photo1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
