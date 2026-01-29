import React from "react";
import photo1 from '../assets/image/photo1.jpg'
import photo2 from '../assets/image/photo2.jpg'
import photo3 from '../assets/image/photo3.jpg'
import photo4 from '../assets/image/photo4.jpg'

function Community() {
  return (
    <div className="container mx-auto max-w-[1320px] text-center">
      <h2 className="text-[2.25rem] font-semibold text-blue-900 ">
        จุดเด่นบริการของเรา
      </h2>
      <p className="text-[#717171] text-[1.4rem] mb-5 inline-block border-b-2 border-[#3936fa]">
        Our Service
      </p>
      <div className="grid gird-col-1 md:grid-cols-3 gap-[100px] m-10 md:m-0">
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo1}
          />
          <h3 className="text-[1.75rem] font-bold text-[#4D4D4D] my-3">
            เครื่องมือวัด
          </h3>
          <p>
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
            เป็นตัวแทนจำหน่ายเครื่องมือวัดละเอียดทางด้านอุตสาหกรรม เช่น Video
            Measuring Machine(VMM), Profile Projector, CMM, ARM,, Contour,
            Roundness, Surftestm Stereo Microscope, และ Handness
          </p>
        </div>
        {/* <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src="https://images.unsplash.com/photo-1566150902887-9679ecc155ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8YmFnfGVufDB8MHx8fDE3MTgzODQ2MDR8MA&ixlib=rb-4.0.3&q=80&w=1080"
          />
          <h3 className="text-[1.75rem] font-bold text-[#4D4D4D] my-3">
            เครื่องชั่งน้ำหนัก
          </h3>
          <p>
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
            เป็นตัวแทนจำหน่ายเครื่องชั่งน้ำหนักทุกประเภท ทุกรุ่น ทุกยี่ห้อ
            รวมถึงบริการหลังการขาย เช่น งานซ่อม งานสอบเทียบ
            นอกจากนี้ทางบริษัทจะมีการรับประกันสินค้า 1 ปี
          </p>
        </div> */}
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo2}
          />
          <h3 className="text-[1.75rem] font-bold text-[#4D4D4D] my-3">บริการสอบเทียบ</h3>
          <p>
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด จำกัด
            มีการบริการสอบเทียบเครื่องมือวัดทางด้านอุตสาหกรรม และ
            เครื่องชั่งทั้งในและนอกสถานที่ด้วยมาตรฐานการรับรองห้องปฏิบัติการสอบเทียบ
            มอก. 17025-2548 ตามขอบข่าย
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo4}
          />
          <h3 className="text-[1.5rem] font-bold text-[#4D4D4D] my-3">
            บริการซ่อมเครื่องมือวัด/อุปกรณ์ต่างๆ
          </h3>
          <p>
            ให้บริการซ่อมเครื่องมือวัดต่างๆ
            -PROFILE PROJECTOR
            -VIDEO MEASURING
            -เครื่องชั่งน้ำหนัก 
            -Vernier Caliper,Micrometer และอื่นๆ
          </p>
        </div>
      </div>



      {/* สำรอง1 */}
      <div className="container mx-auto max-w-[1320px] text-center">
      <h2 className="text-[2.25rem] font-semibold text-blue-900 ">
        จุดเด่นบริการของเรา
      </h2>
      <p className="text-[#717171] text-[1.4rem] mb-5 inline-block border-b-2 border-[#3936fa]">
        Our Service
      </p>
      <div className="grid gird-col-1 md:grid-cols-3 gap-[100px] m-10 md:m-0">
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo1}
          />
          <h3 className="text-[1.75rem] font-bold text-[#4D4D4D] my-3">
            เครื่องมือวัด
          </h3>
          <p>
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด
            เป็นตัวแทนจำหน่ายเครื่องมือวัดละเอียดทางด้านอุตสาหกรรม เช่น Video
            Measuring Machine(VMM), Profile Projector, CMM, ARM,, Contour,
            Roundness, Surftestm Stereo Microscope, และ Handness
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo2}
          />
          <h3 className="text-[1.75rem] font-bold text-[#4D4D4D] my-3">บริการสอบเทียบ</h3>
          <p>
            บริษัท โกลโฟล อินสตรูเมนท์ จำกัด จำกัด
            มีการบริการสอบเทียบเครื่องมือวัดทางด้านอุตสาหกรรม และ
            เครื่องชั่งทั้งในและนอกสถานที่ด้วยมาตรฐานการรับรองห้องปฏิบัติการสอบเทียบ
            มอก. 17025-2548 ตามขอบข่าย
          </p>
        </div>
        <div className="shadow-lg p-10 rounded-lg">
          <img
            className="mx-auto rounded-lg bg-gray-800 shadow-lg shadow-gray-800/50"
            src={photo4}
          />
          <h3 className="text-[1.5rem] font-bold text-[#4D4D4D] my-3">
            บริการซ่อมเครื่องมือวัด/อุปกรณ์ต่างๆ
          </h3>
          <p>
            ให้บริการซ่อมเครื่องมือวัดต่างๆ
            -PROFILE PROJECTOR
            -VIDEO MEASURING
            -เครื่องชั่งน้ำหนัก 
            -Vernier Caliper,Micrometer และอื่นๆ
          </p>
        </div>
      </div>
    </div>
      {/* สำรอง1 */}




      
    </div>
  );
}

export default Community;




