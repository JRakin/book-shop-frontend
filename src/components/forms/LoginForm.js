import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function LoginForm() {
  return (
    <div
      className="bg-blue-200 rounded-md shadow-lg flex justify-center py-10 px-15"
      style={{ width: "400px", height: "400px" }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Email is required"),
          password: Yup.string()
            .required("Please Enter your password")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            ),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form>
            <div className="text-center mb-3">
              <h4 className="uppercase font-bold">Login Form</h4>
            </div>
            <div>
              <input
                className="border-2 border-gray-200 rounded-md py-2 px-1 focus:border-red-300 my-2"
                type="email"
                name="email"
                placeholder="Email *"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />{" "}
              <br />
              <span className="text-red-700">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div>
              <input
                className="border-2 border-gray-200 rounded-md py-2 px-1 focus:border-red-300 my-2"
                type="password"
                name="password"
                placeholder="Password *"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />{" "}
              <br />
              <span className="text-red-700">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <div className="flex justify-center mt-3">
              <button
                className="bg-indigo-800 rounded font-bold py-2 px-4 text-white"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
            <div className="text-center mt-2 text-red-600">
              <a href="">Forgot password?</a>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
