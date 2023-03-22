import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import BounceLoader from "react-spinners/BounceLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      name: Yup.string()
        .max(20, "Username too long!")
        .required("Full Name is required"),
    }),

    onSubmit: (values) => {
      setLoading(true);
      localStorage.setItem("name", values.name);
      setTimeout(() => {
        setLoading(false);
        navigate("/");
        toast.success("Sign up successful");
      }, 2000);
    },
  });

  return (
    <div className="max-w-screen-xl h-screen flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center mb-2 text-red-600 font-semibold">
        Welcome to News Room
      </h1>
      <p className="text-center text-gray-700 font-semibold mb-10">
        Bringing you news with or without the internet.
      </p>

      <form className="w-2/5 flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            placeholder="Name"
            className="outline-none w-full p-2 rounded"
          />
          <p className="text-red-500 text-xs mt-1">
            {formik.touched.name && formik.errors.name && formik.errors.name}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="" className="block mb-1">
            Email
          </label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="outline-none w-full p-2 rounded"
          />
          <p className="text-red-500 text-xs mt-1">
            {formik.touched.email && formik.errors.email && formik.errors.email}
          </p>
        </div>

        <div className="mb-8">
          <label htmlFor="" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full outline-none p-2 rounded "
          />
          <p className="text-red-500 text-xs mt-1">
            {formik.touched.password &&
              formik.errors.password &&
              formik.errors.password}
          </p>
        </div>

        <button
          type="submit"
          className="bg-teal-500 py-2 px-6 text-white hover:bg-teal-600 transition-all duration-200 active:bg-teal-700 rounded self-center"
        >
          {loading ? (
            <div className="px-[15px]">
              <BounceLoader color="#ffffff" size={23} />
            </div>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
