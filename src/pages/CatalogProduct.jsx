import React, { useState, useEffect } from "react";
import photo1 from "../assets/catalogproduct/mitutoyo.png";

function CatalogProduct() {
  const catalogs = [
    {
      title: "MITUTOYO Catalog No.MAP 17-ST",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
    {
      title: "เครื่องมือวัดละเอียด",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
    {
      title: "123123",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "1232134S",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "456546546S",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "C7868678OLS",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "CAasdsadasdOLS",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "CAfgdfgdfgdfgTOOLS",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "CATALOG INDUSTRIAL TOOLS",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "CATALOG INDUSTRIAL TOOLS",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "22222222222222222222222",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
     {
      title: "C111111111111111",
      img: photo1,
      link: "https://online.anyflip.com/yctny/nsao/mobile/index.html",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCatalogs, setFilteredCatalogs] = useState(catalogs);

  useEffect(() => {
    const filtered = catalogs.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCatalogs(filtered);
  }, [searchTerm]);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto max-w-[1320px] px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">
          แคตตาล็อกสินค้า
        </h2>

        {/* Search Bar */}
        <div className="mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="🔍 ค้นหาแคตตาล็อก..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          />
        </div>

        {/* Catalog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCatalogs.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden border border-gray-100 opacity-0 translate-y-6 animate-fadeSlide"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    คลิกเพื่อเปิดดูแคตตาล็อกแบบออนไลน์
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* If no result */}
        {filteredCatalogs.length === 0 && (
          <p className="text-gray-500 mt-10">
            😅 ไม่พบแคตตาล็อกที่คุณค้นหา
          </p>
        )}
      </div>
    </section>
  );
}

export default CatalogProduct;



