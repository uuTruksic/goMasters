import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, LoginButton, LoginContainer } from "./styled";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
      setError(false);
      try {
        const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.status == 200) {
          navigate("/prihlaseni");
        }
      } catch (e) {
        console.log(e);
        return;
      }
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
      <LoginContainer>
        <LoginButton onClick={() => navigate("/prihlaseni")}>
          <p>PŘIHLAŠ SE</p>
        </LoginButton>
      </LoginContainer>
    </Container>
  );
};

export default Register;
