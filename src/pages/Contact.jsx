import { Children, useState } from "react";
import { FaLine } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API endpoint
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <section class="bg-gray-100">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
          <h2 className="font-black text-blue-900 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-2">
            GOAL FLOW INSTRUMENT CO.,LTD.
            <p className="text-gray-400 text-base my-1">
              บริษัท โกลโฟล อินตรูเมนท์ จำกัด
            </p>
          </h2>
          {/* <p class="mt-4 text-lg text-gray-500">Visit Our Location</p> */}
        </div>
        <div class="mt-16 lg:mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123970.1963705854!2d100.47753046592196!3d13.834917030933486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e283f9364bc15d%3A0x499cf3f20fd88569!2z4Lia4LiI4LiBLiDguYLguIHguKXguYLguJ_guKUg4Lit4Li04LiZ4Liq4LiV4Lij4Li54LmA4Lih4LiZ4LiX4LmM!5e0!3m2!1sth!2sth!4v1749024758237!5m2!1sth!2sth"
                width="100%"
                height="480"
                // style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                <div class="px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                  <p class="mt-1 text-gray-600">
                    1 35 ซอย รังสิต-นครนายก 63/1 ตำบล ประชาธิปัตย์ อำเภอธัญบุรี
                    ปทุมธานี 12130
                  </p>
                </div>
                {/* <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                  <p class="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p class="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  <p class="mt-1 text-gray-600">Sunday: Closed</p>
                </div> */}
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                  <p class="mt-1 text-gray-600">
                    Email:
                    <Mailto
                      email="goalflow4@gmail.com"
                      subject="สนใจสินค้า"
                      body="อยากจะขอข้อมูลสินค้าเพิ่มเติม"
                    >
                      ✉️ goalflow4@gmail.com
                    </Mailto>
                  </p>
                  <p class="mt-1 text-gray-600">
                    Phone:
                    <Callto phone="+66841594643">📞 +66 84 - 159-4643</Callto>
                  </p>
                  <p class="mt-1 text-gray-600">
                    <button className=" bg-green-200 dark:bg-green-700 text-green-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-green-300 dark:hover:bg-green-600">
                      <div className="flex items-center justify-center gap-4">
                        <FaLine size={24} />
                        <a
                          href="https://line.me/ti/p/jfZGdWx11H"
                          target="_black"
                        >
                          สอบถามเพิ่มเติม
                        </a>
                      </div>
                    </button>
                  </p>
                  <p class="mt-1 text-gray-600">
                    <button className=" bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-blue-300 dark:hover:bg-blue-600">
                      <div className="flex items-center justify-center gap-4">
                        <FaFacebook size={24} />
                        <a
                          href="https://www.facebook.com/share/16zLLRnBio/?mibextid=wwXlfr"
                          target="_black"
                        >
                          m.me/goalflow Instrument 
                        </a>
                      </div>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
