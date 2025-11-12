// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email!!!" }),
    password: z.string().min(8, { message: "Password ต้องมากกว่า 8 ตัวอักษร" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password ไม่ตรงกัน",
    path: ["confirmPassword"],
  });
const [formData, setFormData] = useState({
    email: "",
    Password: "",
    confirmPassword: "",
  });

const Register = () => {
  // Javascript
  const [passwordScore, setPasswordScore] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const validatePassword = () => {
    let password = watch().password;
    return zxcvbn(password ? password : "").score;
  };
  useEffect(() => {
    setPasswordScore(validatePassword());
  }, [watch().password]);

  const onSubmit = async (data) => {
    // const passwordScore = zxcvbn(data.password).score;
    // console.log(passwordScore);
    // if (passwordScore < 3) {
    //   toast.warning("Password บ่ Strong!!!!!");
    //   return;
    // }
    // console.log("ok ลูกพี่");
    // Send to Back
    try {
      const res = await axios.post("https://goldflowin-api.vercel.app/api/register", data);

      console.log(res.data);
      toast.success(res.data);
      setFormData({ email: "", Password: "", confirmPassword: "" });
    } catch (err) {
      const errMsg = err.response?.data?.message;
      toast.error(errMsg);
      console.log(err);
    }
  };

  // const tam = Array.from(Array(5))
  // console.log(tam)
  console.log(passwordScore);
  return (
    <div className="h-screen w-screen flex justify-center items-center drak:bg-gray-900">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-white bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-black text-center cursor-default">
              Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label for="email" className="mb-2 dark:text-black text-lg">
                  Email :
                </label>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className={`border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300
            ${errors.email && "border-red-500"}
            `}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label for="password" className="mb-2 dark:text-black text-lg">
                  Password :
                </label>
                <input
                  {...register("password")}
                  placeholder="Password"
                  className={`border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300
            ${errors.password && "border-red-500"}
            `}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
                {watch().password?.length > 0 && (
                  <div className="flex mt-2">
                    {Array.from(Array(5).keys()).map((item, index) => (
                      <span className="w-1/5 px-1" key={index}>
                        <div
                          className={`rounded h-2 ${
                            passwordScore <= 2
                              ? "bg-red-500"
                              : passwordScore < 4
                              ? "bg-yellow-500"
                              : "bg-green-500"
                          }
              `}
                        ></div>
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label for="password" className="mb-2 dark:text-black text-lg">
                  Confirm Password :
                </label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm Password"
                  className={`border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300
                ${errors.confirmPassword && "border-red-500"}
                `}
                />

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                Register
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="cursor-default dark:text-gray-300">
                  Have an account?
                </span>
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="#"
                >
                  <span className="bg-left-bottom ml-1 bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    <NavLink
                      classNameName={({ isActive }) =>
                        isActive
                          ? "px-3 py-2 rounded-md text-sm font-medium"
                          : "px-3 py-2 rounded-md text-sm font-medium"
                      }
                      to={"/login"}
                    >
                      Log In
                    </NavLink>
                  </span>
                </a>
              </h3>
            </div>

            {/* <!-- Third Party Authentication Options --> */}
            {/* <div
              id="third-party-auth"
              className="flex items-center justify-center mt-5 flex-wrap"
            >
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google"
                />
              </button>
              <button
                href="#"
                className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
              >
                <img
                  className="max-w-[25px]"
                  src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook"
                />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

