import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, RegisterButton, RegisterContainer } from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState);

  async function loginUserCallback() {
    console.log(JSON.stringify(values));
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <Container>
      <h1>Přihlášení</h1>
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
          name="password"
          onChange={onChange}
          margin="normal"
          type={"password"}
          variant="outlined"
          label="Password"
          required
          fullWidth
        ></TextField>
        <Button type="submit" variant="contained" style={{ marginTop: "15px" }} fullWidth>
          Odeslat
        </Button>
      </form>
      <RegisterContainer>
        <RegisterButton onClick={() => navigate("/registrace")}>
          <p>Zaregistruj se</p>
        </RegisterButton>
      </RegisterContainer>
    </Container>
  );
};

export default Login;
