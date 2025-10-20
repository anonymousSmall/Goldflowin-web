import React, { useState, useEffect } from "react";
import useEcomStore from "../store/ecom-store";
import { numberFormat } from "../utils/number";
import { dateFormat } from "../utils/dateformat";
import { Eye, Pencil, SquareChartGantt } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const token = useEcomStore((state) => state.token);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);

  useEffect(() => {
    // code
    getProduct(100);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Product List</h1>
      {/* Product Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-4 px-4 text-left">No.</th>
              <th className="py-4 px-10 text-left">รูปภาพ</th>
              <th className="py-4 px-10 text-left">ชื่อสินค้า</th>
              <th className="py-4 px-10 text-left">รายละเอียด</th>
              <th className="py-4 px-4 text-left">ราคา</th>
              <th className="py-4 px-4 text-left">จำนวน</th>
              <th className="py-4 px-10 text-left">จำนวนที่ขายได้</th>
              <th className="py-4 px-10 text-left">วันที่อัปเดต</th>
              <th className="py-4 px-10 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td className="py-3 px-6 text-left">
                    {item.images.length > 0 ? (
                      <img
                        className="w-24 h-24 rounded-lg shadow-md"
                        src={item.images[0].url}
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center shadow-sm">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-6 text-left">{item.title}</td>
                  <td className="py-3 px-6 text-left">{item.description}</td>
                  <td className="py-3 px-6 text-left">
                    {numberFormat(item.price)}
                  </td>
                  <td className="py-3 px-6 text-left">{item.quatity}</td>
                  <td className="py-3 px-6 text-left">{item.sold}</td>
                  <td className="py-3 px-6 text-left">
                    {dateFormat(item.updateAt)}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center justify-center">
                      <p
                        className="bg-yellow-500 rounded-md p-1 
                                                                hover:scale-105 hover:-translate-y-1 hover:duration-200
                                                                shadow-md"
                      >
                        <Link to={"/productuser/" + item.id}>
                          <SquareChartGantt />
                        </Link>
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
