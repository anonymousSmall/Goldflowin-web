import React, { useState, useEffect } from "react";
import useEcomStore from "../../store/ecom-store";
import { createBrand, listBrand, removeBrand } from "../../api/brand";
import { toast } from "react-toastify";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
};

const FormBrand = () => {
  // Javascript

  const token = useEcomStore((state) => state.token);
  const [name, setName] = useState("");
  const brands = useEcomStore((state) => state.brands);
  const getBrandProduct = useEcomStore((state) => state.getBrandProduct);
  const [form, setForm] = useState({
    name: "",
  });

  useEffect(() => {
    getBrandProduct(token);
  }, []);

  const handleSubmit = async (e) => {
    // Code
    e.preventDefault();
    if (!name) {
      return toast.warning("Please fill data");
    }
    try {
      const res = await createBrand(token, { name });
      console.log(res.data.name);
      setForm(initialState);
      getBrandProduct(token);
      toast.success(`Add Brand ${res.data.name} success!!!`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleRemove = async (id) => {
    console.log(id);
    try {
      const res = await removeBrand(token, id);
      console.log(res);
      toast.success(`Deleted ${res.data.name} success`);
      getBrandProduct(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white shadow-xl">
      <div className="my-2 py-4">
        <h2 className="font-black text-blue-900 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-2">
          เพิ่มข้อมูลแบรนด์สินค้า
          <p className="text-gray-400 text-base my-1">Brand Management</p>
        </h2>
      </div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
              ชื่อแบรนด์สินค้า :
            </h2>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
            placeholder="Brand"
          />
        </div>
        <button className="bg-gradient-to-r dark:text-white from-blue-500 to-purple-500 shadow-lg mt-3 p-2 text-white rounded-lg w-30 hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out">
          Add Brand
        </button>
        <br />
      </form>
      <hr />
      <div className="overflow-x-auto">
        <table className="table w-full border rounded-md shadow-xl">
          <thead>
            <tr className="bg-gray-200 border">
              <th className="py-3 px-6 text-left">No.</th>
              <th className="py-3 px-6 text-center">รายชื่อแบรนด์สินค้า</th>
              <th className="py-3 px-6 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((item, index) => {
              return (
                <tr key={index}>
                  <th className="py-3 px-6 text-left">{index + 1}</th>
                  <td className="py-3 px-6 text-center">{item.name}</td>
                  <td className="flex gap-2 my-2 justify-center">
                    {/* <p
                      className="bg-yellow-500 rounded-md p-1 
                                            hover:scale-105 hover:-translate-y-1 hover:duration-200
                                            shadow-md"
                    >
                      <Link to={"/admin/brand/" + item.id}>
                        <Pencil />
                      </Link>
                    </p> */}

                    <p
                      className="bg-red-500 rounded-md p-1 shadow-md
                                                hover:scale-105 hover:-translate-y-1 hover:duration-200
                                                "
                      onClick={() => handleRemove(item.id)}
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
  );
};

export default FormBrand;
