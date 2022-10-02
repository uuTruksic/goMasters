import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container } from "./styled";

const Login = () => {
  const [error, setError] = useState(false);
  const initialState = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState);

  async function loginUserCallback() {
    // @ts-ignore
    if (values.password === values.confirmPassword && values.password.length > 8) {
      console.log(values);
      setError(false);
      //send values

      // @ts-ignore
    } else if (values.password.length < 8) {
      alert("Heslo musí obsahovat alespoň 8 znaků");
      setError(true);
    } else {
      alert("Heslo se neshoduje");
      setError(true);
    }
  }
  return (
    <Container>
      <h1>Registrace</h1>
      <form onSubmit={onSubmit}>
        <TextField
          name="email"
          onChange={onChange}
          margin="normal"
          type={"email"}
          variant="outlined"
          label="E-mail"
          required
          fullWidth
        ></TextField>
        <TextField
          name="name"
          onChange={onChange}
          margin="normal"
          type={"text"}
          variant="outlined"
          label="Jméno"
          required
          fullWidth
        ></TextField>
        <TextField
          error={error}
          name="password"
          onChange={onChange}
          onFocus={() => setError(false)}
          margin="normal"
          type={"password"}
          variant="outlined"
          label="Heslo"
          required
          fullWidth
        ></TextField>
        <TextField
          error={error}
          name="confirmPassword"
          onChange={onChange}
          onFocus={() => setError(false)}
          margin="normal"
          type={"password"}
          variant="outlined"
          label="Potvrďte heslo"
          required
          fullWidth
        ></TextField>
        <Button type="submit" variant="contained" style={{ marginTop: "15px" }} fullWidth>
          Odeslat
        </Button>
      </form>
    </Container>
  );
};

export default Login;
