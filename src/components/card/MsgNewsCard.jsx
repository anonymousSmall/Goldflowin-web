import { Eye } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/card1.png";

const newsData = [
  {
    title: "เครื่องวัดความแข็ง วัดอะไรได้บ้าง?",
    img: logo,
    description:
      "Hardness tester หรือ เครื่องวัดความแข็ง คือคุณสมบัติหนึ่งของวัตถุ ในการวัดความต้านทานต่อแรงกด...",
    date: "06 มิถุนายน 2568",
    link: "/Article1",
    type: "internal",
  },
  {
    title: "Lorem rem facere",
    img: "https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur labore...",
    date: "21 SEP 2015",
    link: "https://line.me/ti/p/jfZGdWx11H",
    type: "external",
  },
  {
    title: "Metrology News",
    img: "https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg",
    description:
      "ข่าวล่าสุดเกี่ยวกับเครื่องมือวัดและมาตรวิทยา อัปเดตเทคโนโลยีใหม่ ๆ...",
    date: "12 AUG 2025",
    link: "https://line.me/ti/p/jfZGdWx11H",
    type: "external",
  },
  {
    title: "Metrology News",
    img: "https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg",
    description:
      "ข่าวล่าสุดเกี่ยวกับเครื่องมือวัดและมาตรวิทยา อัปเดตเทคโนโลยีใหม่ ๆ...",
    date: "12 AUG 2025",
    link: "https://line.me/ti/p/jfZGdWx11H",
    type: "external",
  },
  {
    title: "Metrology News",
    img: "https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg",
    description:
      "ข่าวล่าสุดเกี่ยวกับเครื่องมือวัดและมาตรวิทยา อัปเดตเทคโนโลยีใหม่ ๆ...",
    date: "12 AUG 2025",
    link: "https://line.me/ti/p/jfZGdWx11H",
    type: "external",
  },
  {
    title: "Metrology News",
    img: "https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg",
    description:
      "ข่าวล่าสุดเกี่ยวกับเครื่องมือวัดและมาตรวิทยา อัปเดตเทคโนโลยีใหม่ ๆ...",
    date: "12 AUG 2025",
    link: "https://line.me/ti/p/jfZGdWx11H",
    type: "external",
  },
];

const NewsCard = ({ title, img, description, date, link, type }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("opacity-100", "translate-y-0");
          element.classList.remove("opacity-0", "translate-y-5");
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col 
                 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-500 
                 opacity-0 translate-y-5"
    >
      {/* ภาพแบบ 16:9 */}
      <div className="overflow-hidden w-full aspect-[16/9]">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={img}
          alt={title}
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
          <span>{date}</span>
          {type === "internal" ? (
            <Link to={link}>
              <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
                <Eye size={16} /> Read More
              </button>
            </Link>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-green-700 transition"
            >
              <Eye size={16} /> ดูเพิ่มเติม
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const MsgNewsCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((news, idx) => (
          <NewsCard key={idx} {...news} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-900 text-white rounded-full px-6 py-2 font-semibold hover:bg-blue-800 transition">
          ดูเพิ่มเติม
        </button>
      </div>
    </div>
  );
};

export default MsgNewsCard;
