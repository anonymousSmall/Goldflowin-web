import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ClassicEditor, Essentials, Paragraph, Bold, Italic } from "ckeditor5";
import logo from "../../assets/image/card1.png";

const News1 = () => {
  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="py-8">
          <h2 className="items-center pb-2 border-b-4 border-blue-600 font-black text-blue-900 text-center text-2xl leading-none uppercase max-w-2xl mx-auto mb-2">
            เครื่องวัดความแข็ง วัดอะไรได้บ้าง?
          </h2>
          <p class="text-gray-500 text-sm">
            Published on <time datetime="2022-04-05">June 6, 2025</time>
          </p>
        </div>

        <img src={logo} alt="Featured image" class="w-full h-auto mb-8" />

        <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <span className=" p-16 mt-2 text-base font-semibold text-gray-200 dark:text-gray-400">
            Hardness tester หรือ เครื่องวัดความแข็ง คือคุณสมบัติหนึ่งของวัตถุ
            ในการวัดความต้านทานต่อแรงกด การขัดสี และการกลึงของวัสดุ ดังนั้น
            การทดสอบความแข็งจึงทำได้หลายวิธี แต่ในเชิงโลหะวิทยา
            การวัดความแข็งจะเป็นการทดสอบความสามารถของโลหะในการต้านทานต่อการแปรรูปถาวร
            เมื่อถูกแรงกดจากหัวกดกระทำลงบนชิ้นงานทดสอบ
            โดยมีวิธีในการทดสอบที่นิยมใช้ ดังนี้ Rockwell Handness Test, Brinell
            Handness Test, Vickers Handness Test
          </span>
          <br />
          <span className=" whitespace-break-spaces p-16 mt-2 text-base font-semibold text-gray-200 dark:text-gray-400">
            ● Rockwell Handness Tester
            เป็นวิธีวัดความแข็งของโลหะที่นิยมใช้มากที่สุด
            โดยจะวัดความแข็งจากความลึกระยะกดที่ถูกหัวกด กดด้วยแรงคงที่
          </span>
          <br />

          <span className="p-16 mt-2 text-base font-semibold text-gray-200 dark:text-gray-400">
            ● Brinell Handness Test
            เป็นการวัดความแข็งโดยอาศัยแรงกดคงที่กระทำกับลูกบอลเหล็กกล้าชุบแข็งลงบนผิวชิ้นงานทดสอบ
            ค่าความแข็งจะคำนวณจากแรงกดที่กระทำต่อหนึ่งหน่วยพื้นที่ผิว
            โดยพื้นที่ผิวมีลักษณะเป็นผิวโค้ง
          </span>
          <br />

          <span className="p-16 mt-2 text-base font-semibold text-gray-200 dark:text-gray-400">
            ● Rockwell Handness Tester
            เป็นวิธีวัดความแข็งของโลหะที่นิยมใช้มากที่สุด
            โดยจะวัดความแข็งจากความลึกระยะกดที่ถูกหัวกด กดด้วยแรงคงที่
          </span>
        </div>
      </div>
    </div>
  );
};

export default News1;
