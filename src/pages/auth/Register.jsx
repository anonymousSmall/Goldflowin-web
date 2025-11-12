// rafce
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email format!" }),
    password: z.string().min(8, { message: "Password ต้องมากกว่า 8 ตัวอักษร" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password ไม่ตรงกัน",
    path: ["confirmPassword"],
  });

const Register = () => {
  const [passwordScore, setPasswordScore] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    const password = watch("password");
    setPasswordScore(zxcvbn(password || "").score);
  }, [watch("password")]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://goldflowin-api.vercel.app/api/register",
        data
      );
      toast.success("✅ สมัครสมาชิกสำเร็จ!");
      reset();
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const errMsg = err.response?.data?.message || "เกิดข้อผิดพลาดในการสมัคร!";
      toast.error(errMsg);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 transition-all">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700">
              Email :
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 focus:scale-[1.02] transition-all`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-700">
              Password :
            </label>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className={`w-full p-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-purple-400 focus:scale-[1.02] transition-all`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Password Strength Bar */}
            {watch("password")?.length > 0 && (
              <div className="flex mt-2 gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-full rounded ${
                      i <= passwordScore
                        ? passwordScore <= 2
                          ? "bg-red-500"
                          : passwordScore < 4
                          ? "bg-yellow-400"
                          : "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  ></div>
                ))}
              </div>
            )}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-gray-700">
              Confirm Password :
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm password"
              className={`w-full p-3 rounded-lg border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-400 focus:scale-[1.02] transition-all`}
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
            disabled={loading}
            className={`w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:scale-[1.03] transition-all duration-300 ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        {/* Login link */}
        <div className="text-center mt-6 text-gray-600">
          <span>Already have an account?</span>{" "}
          <NavLink
            to="/login"
            className="text-blue-500 hover:text-blue-700 font-medium transition-all"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;


