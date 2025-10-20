import React from "react";
import photo1 from "../assets/catalogproduct/mitutoyo.png"

function CatalogProduct() {
  return (
    <div className="container mx-auto max-w-[1320px] text-center">
      <h2 className="text-[2.25rem] font-semibold text-blue-900">
        แคตตาล็อกสินค้า
      </h2>
      <div className="grid grid-col-1 md:grid-cols-3 gap-[100px] m-10 md:m-0">
        <div className="shadow-lg p-10 rounded-lg">
          <p className="text-[#717171] text-[1.4rem] mb-5 inline-block border-b-2 border-[#3936fa]">
            MITUTOYO Catalog No.MAP 17-ST
          </p>
          <a
            href="https://online.anyflip.com/yctny/nsao/mobile/index.html"
            target="_blank"
          >
            <img
              className="mx-auto rounded-lg shadow-lg"
              src={photo1}
              alt=""
            />
          </a>
        </div>
        {/* <div className="shadow-lg p-10 rounded-lg">
          <a
            href="https://online.anyflip.com/ajihg/phvw/index.html"
            target="_blank"
          >
            <img
              className="mx-auto rounded-lg shadow-lg"
              src="https://online.anyflip.com/ajihg/phvw/files/shot.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="shadow-lg p-10 rounded-lg">
          <a
            href="https://online.anyflip.com/ajihg/phvw/index.html"
            target="_blank"
          >
            <img
              className="mx-auto rounded-lg shadow-lg"
              src="https://online.anyflip.com/ajihg/phvw/files/shot.jpg"
              alt=""
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default CatalogProduct;
