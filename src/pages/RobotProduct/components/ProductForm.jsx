// ProductForm.js
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../../components/Form/FormikControl";

const ProductSchema = Yup.object().shape({
  productName: Yup.string().required("نام محصول ضروری است"),
  price: Yup.number().required("قیمت ضروری است").positive("قیمت باید مثبت باشد"),
});

const ProductForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ productName: "", price: "" }}
    validationSchema={ProductSchema}
    onSubmit={(values, { resetForm, setSubmitting }) => {
      onSubmit(values, resetForm, setSubmitting);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <FormikControl control="input" name="first_name" type="text" placeholder="نام" />
        <FormikControl control="input" name="last_name" type="text" placeholder="نام خانوادگی" />
        <FormikControl control="input" name="username" type="text" placeholder="نام کاربری" />
        <FormikControl control="input" name="email" type="email" placeholder="ایمیل" />

        <div className="flex justify-end space-x-3 mt-4">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "در حال ثبت..." : "ثبت محصول"}
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

export default ProductForm;
