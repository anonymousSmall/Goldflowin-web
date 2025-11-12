// rafce
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import useEcomStore from "../../store/ecom-store";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "lucide-react";

const Login = () => {
  // Javascript
  const navigate = useNavigate();
  const actionLogin = useEcomStore((state) => state.actionLogin);
  const user = useEcomStore((state) => state.user);
  console.log("user form zustand", user);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(form);
      const role = res.data.payload.role;
      roleRedirect(role);
      toast.success("Welcome Back");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message;
      toast.error(errMsg);
    }
  };

  
  const roleRedirect = (role) => {
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-white bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-black text-center cursor-default">
              Log in
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label for="email" className="mb-2 dark:text-black text-lg">
                  Email :
                </label>
                <input
                  placeholder="Email"
                  className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  onChange={handleOnChange}
                  name="email"
                  type="email"
                />
              </div>
              <div>
                <label for="email" className="mb-2 dark:text-black text-lg">
                  Password :
                </label>
                <input
                  placeholder="Email"
                  className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  onChange={handleOnChange}
                  name="password"
                  type="password"
                />
              </div>
              <a
                href="#"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 tb-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"></span>
              </a>
              <button class="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out">
                Login
              </button>
            </form>
            <div className="flex flex-col items-center justify-center text-sm">
              <h3 className="dark:text-gray-300">
                <span className="cursor-default dark:text-gray-300">
                  Don't have an account?
                  <a
                    href="#"
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                  >
                    <span class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "px-3 py-2 rounded-md text-sm font-medium"
                            : "px-3 py-2 rounded-md text-sm font-medium"
                        }
                        to={"/register"}
                      >
                        Sign Up
                      </NavLink>
                    </span>
                  </a>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

