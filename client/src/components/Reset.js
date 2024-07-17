import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidate } from "../helper/validate";

import styles from "../styles/Username.module.css";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      password: "",
      conf_password: "",
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center mx-0 items-center h-screen">
        <div className={styles.glass}>
          <div className="title  flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset Password</h4>
            <p className="py-4 pt-8 text-l w-3/3 text-center text-gray-500">
              Enter new password.
            </p>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="New password"
              />
              <input
                {...formik.getFieldProps("conf_password")}
                className={styles.textbox}
                type="password"
                placeholder="Repeat Password"
              />
              <button className={styles.btn} type="submit">
                Reset
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
