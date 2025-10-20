import React from "react";
import logo from "../assets/image/logo.png";

const About = () => {
  return (
    // <div className="container">
    //   <h3 className=" indent-20 mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
    //     Help Scout is designed with your customers in mind. Provide email and
    //     live chat with a personal touch, and deliver help content right where
    //     your customers need it, all in one place, all for one low price.
    //   </h3>
    // </div>
    <div className="flex px-6 md:px-20 items-center justify-center md:h-screen overflow-hidden">
      <div className="flex flex-col gap-6 md:flex-row items-cneter max-w-8x1">
        {/* <div className="w-full md:w-1/2 lg:pr-32">
          <div className="rounded-full shadow-md bg-slate-100 hover:bg-slate-300">
            <img src={logo} alt="" className="w-full md:w-32" />
          </div>
        </div> */}
        <div className="w-full lg:pr-32">

          {/* <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
            There’s a better way to talk with your customers.
          </h2> */}
          <h3 className=" indent-20 mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
           บริษัท 
          </h3>
          <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email
            and live chat with a personal touch, and deliver help content right
            where your customers need it, all in one place, all for one low
            price.
          </h3>
          {/* <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
              Get started
            </button>
            <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
              Watch a Demo
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
