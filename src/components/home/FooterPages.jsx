import { FaFacebook, FaLine, FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-4">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-black">GoldFlowin</h3>
          <p className="mt-2 text-sm">
            Precision-driven solutions for industrial calibration and measurement. Based in Thailand with over 20 years of experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#features" className="hover:text-blue-600">Services</a></li>
            <li><a  className="hover:text-blue-600">About Us</a></li>
            <li><a href="/Contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="/register" className="hover:text-blue-600">Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-semibold mb-2">Contact</h4>
          <p className="text-sm">
            📍 123 Industrial Rd., Bangkok, Thailand  
            <br />
            📞 +66 2 123 4567  
            <br />
            ✉️ info@thaimetrology.com
          </p>
        </div>

        {/* Newsletter or Language */}
        {/* <div>
          <h4 className="text-sm font-semibold mb-2">Stay Updated</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div> */}
        <div className="flex items-center gap-4">
              <FaFacebook className="facebook-icon w-10 h-10" />
              <FaLine className="line-icon h-10 w-10" />
              <FaSquareYoutube className="youtube-icon h-10 w-10" />
            </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-8 border-t pt-4">
        © {new Date().getFullYear()} Thai Metrology Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
}
