import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Formik, Form } from "formik";
import "../../../components/Modal/Modal.css";
import Swal from "sweetalert2";
import { createProductService } from "../../../services/Axios/Request/products";
import FormikControl from "../../../components/Form/FormikControl";
import { handleImageRemove, handleImageUpload } from "../../../components/Modal/Utility";

const AddProductModalContent = ({ showModal, handleClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSelectedImage(null);
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [showModal, handleClose]);

  const handleBackdropClick = (event) => {
    if (event.target.dataset.dialogBackdrop) {
      handleClose();
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        quantity: "",
        width: "",
        height: "",
        dkp: "",
        dkpc: "",
        sellerId: "",
        categoryId: "",
        colorId: "",
        image: null,
      }}
      onSubmit={async (values) => {
        try {
          createProductService(values)
            .then((res) => {
              if (res.status === 201) {
                Swal.fire("موفق", "محصول با موفقیت ثبت شد!", "success");
                handleClose();
              }
            })
            .catch((err) => {});
        } catch (error) {
          console.error("Error submitting the form:", error);
        }
      }}
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
          <div className="lg:col-span-1 sm:col-span-2 flex flex-col items-center">
            <img
              src={selectedImage || "https://via.placeholder.com/150"}
              alt="Uploaded Preview"
              className="max-h-40 rounded-md border mb-4"
            />
            <div className="flex space-x-2 space-x-reverse">
              {!selectedImage ? (
                <label className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none cursor-pointer">
                  آپلود عکس
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={(event) => handleImageUpload(event, setSelectedImage, setFieldValue)}
                    className="hidden"
                  />
                </label>
              ) : (
                <button
                  type="button"
                  onClick={() => handleImageRemove(setSelectedImage, setFieldValue)}
                  className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none"
                >
                  حذف عکس
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <FormikControl
                control="input"
                name="name"
                type="text"
                placeholder="نام محصول"
                className="w-full py-2 text-lg"
              />
            </div>

            <FormikControl
              control="input"
              name="price"
              type="text"
              placeholder="قیمت"
              className="w-full py-2 text-lg"
            />
            <FormikControl
              control="input"
              name="quantity"
              type="text"
              placeholder="موجودی"
              className="w-full py-2 text-lg"
            />
            <FormikControl control="input" name="width" type="text" placeholder="عرض" className="w-full py-2 text-lg" />
            <FormikControl
              control="input"
              name="height"
              type="text"
              placeholder="طول"
              className="w-full py-2 text-lg"
            />
            <FormikControl
              control="input"
              name="dkp"
              type="text"
              placeholder="کد محصول"
              className="w-full py-2 text-lg"
            />
            <FormikControl
              control="input"
              name="dkpc"
              type="text"
              placeholder="کد تنوع"
              className="w-full py-2 text-lg"
            />
          </div>

          <FormikControl
            control="select"
            name="sellerId"
            options={[
              { id: 1, value: "ماتریسیو" },
              { id: 5, value: "برچسبکده" },
            ]}
            firstItem="انتخاب فروشنده"
            className="w-full py-2 text-lg"
          />

          <FormikControl
            control="select"
            name="categoryId"
            options={[
              { id: 1, value: "برچسب بدنه خودرو" },
              { id: 2, value: "برچسب بدنه موتور" },
              { id: 3, value: "برچسب لنز ناخن" },
            ]}
            firstItem="انتخاب دسته‌بندی"
            className="w-full py-2 text-lg"
          />

          <FormikControl
            control="select"
            name="colorId"
            options={[
              { id: 1, value: "سفید" },
              { id: 3, value: "قرمز" },
              { id: 4, value: "طلایی" },
              { id: 5, value: "مشکی" },
              { id: 6, value: "زرد" },
              { id: 7, value: "چند رنگ" },
            ]}
            firstItem="انتخاب رنگ"
            className="w-full py-2 text-lg"
          />

          <div className="sm:col-span-2 lg:col-span-3 flex justify-start items-center space-x-2 mt-4">
            <button
              type="submit"
              className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "در حال ثبت..." : "ثبت محصول"}
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              انصراف
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductModalContent;
