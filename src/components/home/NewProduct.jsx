import React, { useEffect, useState } from "react";
import { listProductBy } from "../../api/product";
import ProductCard from "../card/ProductCard";
import { SwiperSlide } from "swiper/react";
import SwiperShowProduct from "../../utils/SwiperShowProduct";

const NewProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    //Code
    loadData();
  }, []);
  const loadData = () => {
    listProductBy("updatedAt", "desc", 6)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SwiperShowProduct>
      {data?.map((item, index) => (
        <SwiperSlide>
          <ProductCard item={item} key={index} />
        </SwiperSlide>
      ))}
    </SwiperShowProduct>
  );
};

export default NewProduct;
