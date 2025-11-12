// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

// ✅ Zod Validation Schema
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

const Register = () => {
  const [passwordScore, setPasswordScore] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
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

  // ✅ Submit Form
  const onSubmit = async (data) => {
    const passwordScore = zxcvbn(data.password).score;
    if (passwordScore < 3) {
      toast.warning("รหัสผ่านไม่แข็งแรงพอ! 🚨");
      return;
    }

    try {
      const res = await axios.post(
        "https://goldflowin-api.vercel.app/api/register",
        data
      );
      toast.success("สมัครสมาชิกสำเร็จ ✅");
      reset();
    } catch (err) {
      const errMsg = err.response?.data?.message || "เกิดข้อผิดพลาด!";
      toast.error(errMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={2500} />

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        <div className="p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            Register
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-gray-700 dark:text-gray-200 font-medium"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="example@email.com"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-gray-700 dark:text-gray-200 font-medium"
              >
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="••••••••"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-purple-400 transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}

              {/* Password Strength Bar */}
              {watch().password?.length > 0 && (
                <div className="flex mt-2 space-x-1">
                  {Array.from(Array(5).keys()).map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-1/5 rounded ${
                        i <= passwordScore
                          ? passwordScore <= 2
                            ? "bg-red-500"
                            : passwordScore < 4
                            ? "bg-yellow-400"
                            : "bg-green-500"
                          : "bg-gray-200 dark:bg-gray-600"
                      }`}
                    ></div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 text-gray-700 dark:text-gray-200 font-medium"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="ยืนยันรหัสผ่านอีกครั้ง"
                className={`w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-[1.02] transition duration-300 shadow-md"
            >
              สมัครสมาชิก
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
            มีบัญชีอยู่แล้ว?{" "}
            <NavLink
              to="/login"
              className="text-blue-500 hover:text-purple-600 transition duration-300"
            >
              เข้าสู่ระบบ
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

