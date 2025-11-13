// rafce
import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { createProduct, deleteProduct } from "../../api/product";
import { toast } from "react-toastify";
import Uploadfile from "./Uploadfile";
import { Link } from "react-router-dom";
import { CirclePlusIcon, Pencil, Trash } from "lucide-react";
import { numberFormat } from "../../utils/number";
import { dateFormat } from "../../utils/dateformat";

const initialState = {
  title: "",
  description: "",
  price: 0,
  quantity: 0,
  categoryId: "",
  images: [],
};
const FormProduct = () => {
  const token = useEcomStore((state) => state.token);
  const getCategory = useEcomStore((state) => state.getCategory);
  const categories = useEcomStore((state) => state.categories);
  const getProduct = useEcomStore((state) => state.getProduct);
  const products = useEcomStore((state) => state.products);
  // console.log(products)

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    quantity: 0,
    categoryId: "",
    images: [],
  });

  useEffect(() => {
    // code
    getCategory();
    getProduct(100);
  }, []);

  const handleOnChange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct(token, form);
      console.log(res);
      setForm(initialState);
      getProduct();
      toast.success(`เพิ่มข้อมูล ${res.data.title} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("จะลบจริงๆ หรอ")) {
      try {
        // code
        const res = await deleteProduct(token, id);
        console.log(res);
        toast.success("Deleted สินค้าเรียบร้อยแล้ว");
        getProduct();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-md">
      <div className="my-2 py-4">
        <h2 className="font-black text-blue-900 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-2">
          จัดการข้อมูลสินค้า
          <p className="text-gray-400 text-base my-1">Product Management</p>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <h1 className="sm:text-xl text-[12px] font-bold mb-6">เพิ่มข้อมูลสินค้า</h1> */}

        <div className="flex flex-wrap gap-4 p-2">
          <label className=" input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
              ชื่อสินค้า :
            </h2>
            <input
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              value={form.title}
              onChange={handleOnChange}
              placeholder="Title"
              name="title"
            />
          </label>
                  {/* <textarea name="" id=""></textarea> */}
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
              รายละเอียดสินค้า :
            </h2>
            <input
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-200"
              value={form.description}
              onChange={handleOnChange}
              placeholder="Description"
              name="description"
              rows={5}
            />
            {/* </textarea> */}
          </label>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl items-center leading-none uppercase max-w-2xl mx-auto mb-2">
              ราคาสินค้า :
            </h2>
            <input
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              value={form.price}
              onChange={handleOnChange}
              placeholder="price"
              name="price"
              type="number"
            />
          </label>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl items-center leading-none uppercase max-w-2xl mx-auto mb-2">
              จำนวนสินค้า :
            </h2>
            <input
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              value={form.quantity}
              onChange={handleOnChange}
              placeholder="quantity"
              name="quantity"
              type="number"
            />
          </label>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl items-center leading-none uppercase max-w-2xl mx-auto mb-2">
              หมวดหมู่สินค้า :
            </h2>
            <select
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              name="categoryId"
              onChange={handleOnChange}
              required
              value={form.categoryId}
            >
              <option value="" disabled>
                Please Select
              </option>
              {categories.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <hr />
        <Uploadfile
          className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
          form={form}
          setForm={setForm}
        />

        <button
          className="flex bg-blue-500 hover:bg-blue-700 p-2 rounded-md shadow-md  text-white
                hover:scale-105 hover:-translate-y-1 hover:duration-200
                "
        >
          <CirclePlusIcon /> เพิ่มสินค้า
        </button>
        <br />
        <hr />
        <br />
        <div className="flex flex-col">
          <div className=" overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        รูปภาพ
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        ชื่อสินค้า
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        รายละเอียด
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        ราคา
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        จำนวน
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        จำนวนที่ขายได้
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        วันที่อัปเดต
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-1xl font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                      >
                        จัดการ
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {products.map((item, index) => {
                      return (
                        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="p-4 text-xl font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {index + 1}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.images.length > 0 ? (
                              <img
                                className="w-24 h-24 rounded-lg shadow-md"
                                src={item.images[0].url}
                                alt=""
                              />
                            ) : (
                              <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center shadow-sm">
                                No Image
                              </div>
                            )}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.title}
                          </td>
                          <td className="max-w-44 p-4 overflow-hidden text-base font-normal tet-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                            {item.description}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {numberFormat(item.price)}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.quantity}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.sold}
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {dateFormat(item.updatedAt)}
                          </td>
                          <td className="flex gap-2 py-10">
                            <p
                              className="bg-yellow-500 rounded-md p-1 
                                            hover:scale-105 hover:-translate-y-1 hover:duration-200
                                            shadow-md"
                            >
                              <Link to={"/admin/product/" + item.id}>
                                <Pencil />
                              </Link>
                            </p>
                            <p
                              className="bg-red-500 rounded-md p-1 shadow-md
                                                                            hover:scale-105 hover:-translate-y-1 hover:duration-200
                                                                            "
                              onClick={() => handleDelete(item.id)}
                            >
                              <Trash />
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
          <thead>
            <tr className="bg-gray-200 border">
              <th scope="col">No.</th>
              <th scope="col">รูปภาพ</th>
              <th scope="col">ชื่อสินค้า</th>
              <th scope="col">รายละเอียด</th>
              <th scope="col">ราคา</th>
              <th scope="col">จำนวน</th>
              <th scope="col">จำนวนที่ขายได้</th>
              <th scope="col">วันที่อัปเดต</th>
              <th scope="col">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td>
                    {item.images.length > 0 ? (
                      <img
                        className="w-24 h-24 rounded-lg shadow-md"
                        src={item.images[0].url}
                      />
                    ) : (
                      <div
                        className="w-24 h-24 bg-gray-200 rounded-md 
                                                    flex items-center justify-center shadow-sm"
                      >
                        No Image
                      </div>
                    )}
                  </td>

                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{numberFormat(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.sold}</td>
                  <td>{dateFormat(item.updatedAt)}</td>
                  <td className="flex gap-2">
                    <p
                      className="bg-yellow-500 rounded-md p-1 
                                            hover:scale-105 hover:-translate-y-1 hover:duration-200
                                            shadow-md"
                    >
                      <Link to={"/admin/product/" + item.id}>
                        <Pencil />
                      </Link>
                    </p>

                    <p
                      className="bg-red-500 rounded-md p-1 shadow-md
                                                hover:scale-105 hover:-translate-y-1 hover:duration-200
                                                "
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </form>
    </div>
  );
};

export default FormProduct;
