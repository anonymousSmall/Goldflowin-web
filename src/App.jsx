//rafce
import React, { useState, useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Footers from './components/Footers'
import MainFooter from "./components/MainFooter";
import Header from "./components/Header";

const App = () => {
  // Javascript
  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 700,
  //     easing: "ease-in",
  //     delay: 100,
  //   });
  // });
  const [count, setCount] = useState(0)
  return (
    <>
      {/* <ToastContainer /> */}
      {/* <div className="bg-red-400"> */}
      <AppRoutes />
      {/* <Header/> */}
      {/* </div> */}
      {/* <MainFooter /> */}
      <Footers />
    </>
  );
};

export default App;

