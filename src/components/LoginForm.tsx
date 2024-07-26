import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";

import "../styles/components/LoginForm.scss";
import { login } from "../utilities/connections";

const LoginForm = () => {
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
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
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
        {touched.password && errors.password && <span>{errors.password}</span>}

        <Button type="submit" variant="contained" size="small" fullWidth>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
