import React, { useState, useEffect } from "react";
import useEcomStore from "../../store/ecom-store";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { numberFormat } from "../../utils/number";

const SearchCardAllProduct = () => {
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  const actionSearchFilters = useEcomStore(
    (state) => state.actionSearchFilters
  );

  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);

  const [text, setText] = useState("");
  const [categorySelected, setCategorySelected] = useState([]);

  const [price, setPrice] = useState([1000, 30000]);
  const [ok, setOk] = useState(false);

  // console.log(categories)
  useEffect(() => {
    getCategory();
  }, []);

  // Step 1 Search Text
  // console.log(text)
  useEffect(() => {
    const delay = setTimeout(() => {
      if (text) {
        actionSearchFilters({ query: text });
      } else {
        getProduct();
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [text]);
  // Step 2 Search by Category
  const handleCheck = (e) => {
    // console.log(e.target.value)
    const inCheck = e.target.value; // ค่าที่เรา ติ๊ก
    const inState = [...categorySelected]; // [1,2,3] arr ว่าง
    const findCheck = inState.indexOf(inCheck); // ถ้าไม่เจอ จะ return -1

    if (findCheck === -1) {
      inState.push(inCheck);
    } else {
      inState.splice(findCheck, 1);
    }
    setCategorySelected(inState);

    if (inState.length > 0) {
      actionSearchFilters({ category: inState });
    } else {
      getProduct();
    }
  };

  return (
    <div>
     <h1 className="text-xl text-center font-bold mb-4">ค้นหาสินค้า</h1>
      <div>
        {/* Search by Category */}
        <div>
          {/* <h1>หมวดหมู่สินค้า</h1> */}
          <div>
            {categories.map((item, index) => (
              <div key={index} className="flex p-2 gap-2">
                <input onChange={handleCheck} value={item.id} type="checkbox" />
                {/* <button onChange={handleCheck} value={item.id} type="checkbox">123</button> */}
                <label>{item.name}</label>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default SearchCardAllProduct;
