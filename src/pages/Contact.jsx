import { useState } from "react";
import { motion } from "framer-motion";
import { FaLine, FaFacebook } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบค่าว่าง
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("⚠️ กรุณากรอกข้อมูลให้ครบถ้วน!", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
      return;
    }

    // ตรวจสอบอีเมล
    if (!validateEmail(formData.email)) {
      toast.error("📧 กรุณากรอกอีเมลให้ถูกต้อง!", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
      return;
    }

    // ถ้าผ่านทั้งหมด
    toast.success("✅ ส่งข้อความเรียบร้อยแล้ว! ขอบคุณที่ติดต่อเราครับ 🙏", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const Callto = ({ phone, children }) => <a href={`tel:${phone}`}>{children}</a>;

  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 to-white dark:from-gray-900/90 dark:to-gray-800/90 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Toastify Container */}
      <ToastContainer />

      {/* พื้นหลังโปร่งพร้อม texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* หัวข้อ */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-black text-blue-900 dark:text-white text-3xl md:text-4xl uppercase">
            GOAL FLOW INSTRUMENT CO., LTD.
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-base mt-2">
            บริษัท โกลโฟล อินตรูเมนท์ จำกัด
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* แผนที่ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123970.1963705854!2d100.47753046592196!3d13.834917030933486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283f9364bc15d%3A0x499cf3f20fd88569!2z4Lia4LiI4LiBLiDguYLguIHguKXguYLguJ_guKUg4Lit4Li04LiZ4Liq4LiV4Lij4Li54LmA4Lih4LiZ4LiX4LmM!5e0!3m2!1sth!2sth!4v1749024758237!5m2!1sth!2sth"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-[400px]"
            ></iframe>
          </motion.div>

          {/* ฟอร์ม */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md shadow-xl rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-3">
              ติดต่อเรา
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              1/35 ซอย รังสิต-นครนายก 63/1 ตำบล ประชาธิปัตย์ อำเภอธัญบุรี ปทุมธานี 12130
            </p>

            {/* ช่องทางติดต่อ */}
            <div className="space-y-3 mb-6">
              <p className="text-gray-600 dark:text-gray-200">
                Email:{" "}
                <Mailto
                  email="goalflow4@gmail.com"
                  subject="สนใจสินค้า"
                  body="อยากจะขอข้อมูลสินค้าเพิ่มเติม"
                >
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    goalflow4@gmail.com
                  </span>
                </Mailto>
              </p>

              <p className="text-gray-600 dark:text-gray-200">
                Phone:{" "}
                <Callto phone="+66841594643">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    +66 84 - 159-4643
                  </span>
                </Callto>
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://line.me/ti/p/jfZGdWx11H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-full shadow-md transition"
                >
                  <FaLine size={20} /> Line สอบถาม
                </a>

                <a
                  href="https://www.facebook.com/share/16zLLRnBio/?mibextid=wwXlfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-full shadow-md transition"
                >
                  <FaFacebook size={20} /> Facebook
                </a>
              </div>
            </div>

            {/* ฟอร์มติดต่อ */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="ชื่อของคุณ"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="อีเมลของคุณ"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
              />
              <motion.textarea
                name="message"
                placeholder="ข้อความของคุณ..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-white/90"
              ></motion.textarea>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300"
              >
                ส่งข้อความ
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
