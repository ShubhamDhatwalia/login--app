import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordVerify, usernameValidate } from "../helper/validate";

import styles from "../styles/Username.module.css";

export default function Paasword() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = usernameValidate(values);
      if (Object.keys(errors).length === 0) {
        // Only validate password if no errors in username
        Object.assign(errors, passwordVerify(values));
      }
      return errors;
    },
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
            <span className="py-0 text-2xl w-2/3 text-center text-gray-500">
              Happy to join you !
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile">
                <img src={avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input type="file" id="profile" name="profile" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="username"
                placeholder="username"
              />

              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="email"
                placeholder="example@gmail.com"
              />

              <input
                {...formik.getFieldProps("password")}
                className={styles.textbox}
                type="password"
                placeholder="password"
              />
              <button className={styles.btn} type="submit">
                Sign Up
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                already registered{" "}
                <Link className="text-red-500" to="/">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
