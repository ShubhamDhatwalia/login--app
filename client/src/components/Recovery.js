import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordVerify } from "../helper/validate";

import styles from "../styles/Username.module.css";

export default function Recovery() {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validate: passwordVerify,
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
            <h4 className="text-xl pb-7 font-medium text-gray-500">
              Enter OTP to reset password
            </h4>
            
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("otp")}
                className={styles.textbox}
                type="text"
                placeholder="OTP"
              />
              <button className={styles.btn} type="submit">
                Submit
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                Not recived?{" "}
                <Link className="text-red-500" to="/recovery">
                  Resend Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
