import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { profileValidation } from "../helper/validate";
import convertToBase64 from "../helper/convert";
import styles from "../styles/Username.module.css";

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  //   Formik does not support file upload so we neeed to handle this

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="flex justify-center mx-0 items-center h-screen">
        <div className={styles.glass}>
          <div className="title  flex flex-col items-center">
            <span className="py-0 text-2xl w-[100%] text-center text-gray-500">
              You can update your profile
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4 ">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className={styles.profile_img}
                  alt="avatar"
                />
              </label>
              <input
                type="file"
                id="profile"
                name="profile"
                onChange={onUpload}
              />
            </div>

            <div className="textbox flex flex-col items-center gap-2">
              <div className="name flex w-[100%] gap-3">
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  className={styles.textbox}
                  placeholder="First Name"
                />

                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  className={styles.textbox}
                  placeholder="Last Name"
                />
              </div>


              <div className="name flex w-[100%] gap-3">


                <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Mobile no."
              />

              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="email"
                placeholder="example@gmail.com"
                />
                
               </div>

              

              <input
                {...formik.getFieldProps("address")}
                className={styles.textbox}
                type="text"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Update
              </button>
            </div>

            <div className="text-center py-4">
              <span className="text-gray-500">
                come back later? {" "}
                <Link className="text-red-500" to="/">
                  Log out
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
