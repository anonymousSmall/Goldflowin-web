import React, { useEffect, useState } from "react";
import useEcomStore from "../../store/ecom-store";
import { toast } from "react-toastify";
import UploadfileArticle from "./UploadfileActicle";
import { CirclePlusIcon, Pencil, Trash } from "lucide-react";
import { createArticle, removearticle } from "../../api/article";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
  Images: [],
};

const FormArticle = () => {
  const token = useEcomStore((state) => state.token);
  const getArticle = useEcomStore((state) => state.getArticle);
  const articles = useEcomStore((state) => state.articles);

  const [form, setForm] = useState({
    name: "",
    description: "",
    Images: [],
  });

  useEffect(() => {
    // Code
    getArticle();
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
      const res = await createArticle(token, form);
      console.log(res);
      setForm(initialState);
      getArticle();
      toast.success(`เพิ่มข้อมูล ${res.data.title} สำเร็จ`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("จะลบจริงๆใช่ไหม!")) {
      try {
        // Code
        const res = await removearticle(token, id);
        console.log(res);
        toast.success("Deleted บทความเรียบร้อยแล้ว");
        getArticle();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-200">
      <div className="my-2 py-4">
        <h2 className="font-black text-blue-900 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-2">
          จัดการข้อมูลข่าวสาร
          <p className="text-gray-400 text-base my-1">Article Management</p>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="gap-4 p-2">
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
              ชื่อหัวข้อ :
            </h2>
            <input
              className="border dark:bg-transparent dark:text-black dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
              value={form.name}
              onChange={handleOnChange}
              placeholder="ชื่อหัวข้อ"
              name="name"
            />
          </label>
          <label className="input input-bordered gap-2">
            <h2 className="font-black text-blue-900 py-2 text-left text-xl leading-none uppercase max-w-2xl mx-auto mb-2">
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
        </div>
        <hr />
        <UploadfileArticle
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
      </form>
      <br />
      {/* Article Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {articles.map((item, index) => {
              return (
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{index + 1}</td>
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">{item.description}</td>
                  <td className="flex item-center justify-center gap-2 py-10">
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
  );
};

export default FormArticle;
