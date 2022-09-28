import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Container } from "./styled";

interface FormikValues {
  email: string;
  password: string;
}

const Login: React.FC<FormikValues> = (FormikValues) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values, actions) {
      alert(values.email + "\n" + values.password);
      actions.resetForm({
        errors: { password: "Wrong email or password" },
        values: { email: values.email, password: "" },
      });
    },
  });

  return (
    <Container>
      <form
        onSubmit={formik.handleSubmit}
        style={{ width: "100%", position: "relative" }}
      >
        <TextField
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          margin="normal"
          type={"email"}
          variant="outlined"
          label="E-mail"
          required
          fullWidth
        ></TextField>
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          margin="normal"
          type={"password"}
          variant="outlined"
          label="Password"
          required
          fullWidth
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          style={{ marginTop: "15px" }}
          fullWidth
        >
          Odeslat
        </Button>
      </form>
    </Container>
  );
};

export default Login;
