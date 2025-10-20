import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Resize from "react-image-file-resizer";
import { removeFiles, uploadFiles } from "../../api/product";
import useEcomStore from "../../store/ecom-store";
import { Loader } from "lucide-react";

const viewproduct = ({ form, setForm }) => {
  // Javascript
  const token = useEcomStore((state) => state.token);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e) => {
    const files = e.target.files;
    if (files) {
      setIsLoading(true);
      let allFiles = form.images;
      for (let i = 0; i < files.length; i++) {
        // console.log(files[i]);
        // Validate
        const file = files[i];
        if (!file.type.startsWith("image/")) {
          toast.error(`file ${file.name} ไม่ใช่รูปภาพ`);
          continue;
        }
        //image Resize
        Resize.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (data) => {
            // endpoint Backend
            uploadFiles(token, data)
              .then((res) => {
                console.log(res);
                allFiles.push(res.data);
                setForm({
                  ...form,
                  images: allFiles,
                });
                setIsLoading(false);
                toast.success("Upload Image Success!!!");
              })
              .catch((err) => {
                console.log(err);
                setIsLoading(false);
              });
          },
          "base64"
        );
      }
    }
  };

  return (
    <div className="my-4">
      <div className="flex mx-4 gap-4 my-4">
        {
          isLoading && <Loader className="w-16 h-16 animate-spin" />
        }
        {/* Image */}
        {form.images.map((item, index) => (
          <div className="relative" key={index}>
            <img className="w-24 h-24 hover:scale-105" src={item.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default viewproduct;
