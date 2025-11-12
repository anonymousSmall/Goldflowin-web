// rafce
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Mail, Loader2 } from "lucide-react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.warn("⚠️ Please enter your email!", { position: "top-center" });

    setLoading(true);
    try {
      // 🔧 ตัวอย่าง API call (สามารถเปลี่ยนเป็น endpoint จริงของคุณ)
      await axios.post(`${import.meta.env.VITE_API_URL}/forgot-password`, { email });

      toast.success("✅ Password reset link sent to your email!", { position: "top-center" });
      navigate("/login");
    } catch (err) {
      console.log(err);
      const errMsg = err.response?.data?.message || "Something went wrong!";
      toast.error(errMsg, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:scale-[1.02] transition-transform duration-200"
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
                Sending Link...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        {/* Back to login */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Remember your password?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:text-blue-700 font-medium transition-all"
            >
              Back to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
