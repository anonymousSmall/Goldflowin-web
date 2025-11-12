// rafce
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, Loader2, Lock } from "lucide-react";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // รับ token จาก URL
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword)
      return toast.warn("⚠️ Please fill in all fields.", { position: "top-center" });

    if (password !== confirmPassword)
      return toast.error("❌ Passwords do not match!", { position: "top-center" });

    setLoading(true);
    try {
      // 🔧 ตัวอย่าง API call (สามารถเปลี่ยน endpoint ได้ตามจริง)
      await axios.post(`${import.meta.env.VITE_API_URL}/reset-password/${token}`, {
        password,
      });

      toast.success("✅ Password has been reset successfully!", {
        position: "top-center",
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message || "Reset failed!";
      toast.error(errMsg, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
          Reset Password
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Please enter your new password below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter new password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-[1.02] transition-transform duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-[1.02] transition-transform duration-200"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.03] hover:shadow-lg transition-all duration-300 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        {/* Back to login */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Return to{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:text-blue-700 font-medium transition-all"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
