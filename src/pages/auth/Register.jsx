// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

// ✅ Schema Validation
const registerSchema = z
  .object({
    email: z.string().email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
    password: z.string().min(8, { message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "รหัสผ่านไม่ตรงกัน",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [passwordScore, setPasswordScore] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // ✅ ตรวจสอบความแข็งแรงของรหัสผ่าน
  const validatePassword = () => {
    const password = watch("password") || "";
    return zxcvbn(password).score;
  };

  useEffect(() => {
    setPasswordScore(validatePassword());
  }, [watch("password")]);

  // ✅ ฟังก์ชันส่งข้อมูลสมัครสมาชิก
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://goldflowin-api.vercel.app/api/register", data);
      toast.success(res.data);
    } catch (err) {
      const errMsg = err.response?.data?.message || "เกิดข้อผิดพลาด กรุณาลองใหม่";
      toast.error(errMsg);
    }
  };

  // ✅ สีบาร์บอกความแข็งแรงของรหัสผ่าน
  const getPasswordColor = () => {
    if (passwordScore <= 1) return "bg-red-500";
    if (passwordScore === 2) return "bg-yellow-400";
    if (passwordScore === 3) return "bg-green-400";
    return "bg-green-600";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 px-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl shadow-2xl p-8 md:p-10 transition-all duration-300">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          สมัครสมาชิก
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-semibold">
              อีเมล
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="example@email.com"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all dark:bg-gray-800 dark:text-white ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-semibold">
              รหัสผ่าน
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="••••••••"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all dark:bg-gray-800 dark:text-white ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}

            {/* Password strength bar */}
            {watch("password")?.length > 0 && (
              <div className="flex mt-3 space-x-1">
                {Array.from(Array(5)).map((_, i) => (
                  <span key={i} className={`flex-1 h-2 rounded ${i <= passwordScore ? getPasswordColor() : "bg-gray-200"}`}></span>
                ))}
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-semibold">
              ยืนยันรหัสผ่าน
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="ยืนยันรหัสผ่านอีกครั้ง"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all dark:bg-gray-800 dark:text-white ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:from-purple-500 hover:to-blue-500 transition-transform transform hover:scale-[1.02]"
          >
            สมัครสมาชิก
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-gray-600 dark:text-gray-300 mt-6 text-sm">
          มีบัญชีอยู่แล้ว?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 font-medium hover:underline hover:text-blue-600 transition"
          >
            เข้าสู่ระบบ
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
