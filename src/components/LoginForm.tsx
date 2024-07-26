import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { setUser } from "../store/slices/userSlice";

import { login } from "../utilities/connections";

import "../styles/components/LoginForm.scss";

import { Bounce, toast, ToastContainer } from "react-toastify";

const LoginForm = () => {
  const [loginStatus, setLoginStatus] = useState("");

  const dispatch = useDispatch();

  const { errors, getFieldProps, handleSubmit, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email format incorrect")
        .required("Required field"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: async (values) => {
      setLoginStatus("unresolved");
      const result = await login(values);
      console.log(result);

      if (result.status == "success") {
        // [IMPORTANT]: timeout just to visualize button behavior
        setTimeout(() => setLoginStatus(result.status), 1000);
        dispatch(setUser(result));
        toast.success("Welcome back!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        setLoginStatus("error");
        toast.error("Something gone wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  });

  return (
    <div>
      <ToastContainer />
      <form noValidate onSubmit={handleSubmit}>
        <div className="login-container">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            size="small"
            type="email"
            error={errors.email ? true : false}
            {...getFieldProps("email")}
          />
          {touched.email && errors.email && <span>{errors.email}</span>}

          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            size="small"
            error={errors.password ? true : false}
            {...getFieldProps("password")}
          />
          {touched.password && errors.password && (
            <span>{errors.password}</span>
          )}

          <LoadingButton
            loading={loginStatus == "unresolved" ? true : false}
            type="submit"
            variant="contained"
            size="small"
            fullWidth
          >
            <span>Submit</span>
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
