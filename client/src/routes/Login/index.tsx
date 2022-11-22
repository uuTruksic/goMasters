import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, Header, LoginButton, RegisterButton, SearchInput } from "./styled";
import { useUserContext } from "../../context/user";
import { useState } from "react";
import ForgottenPass from "../../components/ForgottenPassword";

const Login = () => {
  const { user, setUser } = useUserContext();
  const [redirect, isRedirect] = useState(false);

  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };

  const { onChange, onSubmit, values } = useForm(loginUserCallback, initialState);

  async function loginUserCallback() {
    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status == 200) {
        const user = await res.json();
        localStorage.setItem("session", user.session);
        navigate("/");
        setUser({ name: user.name, email: user.email });
      }
    } catch (e) {
      console.log(e);
      return;
    }
  }

  return redirect ? (
    <ForgottenPass />
  ) : (
    <Container>
      <Header>Přihlásit se</Header>
      <form onSubmit={onSubmit}>
        <SearchInput name="email" onChange={onChange} type={"email"} placeholder="E-mail" required />
        <SearchInput name="password" onChange={onChange} type={"password"} placeholder="Heslo" required />
        <LoginButton type="submit">Potvrdit</LoginButton>
      </form>
      <RegisterButton onClick={() => navigate("/register")}>Registrovat se</RegisterButton>
      <RegisterButton onClick={() => isRedirect(true)}>Zapomněl jsem heslo 🤦🏿🤦🤦🏻‍♂️</RegisterButton>
    </Container>
  );
};

export default Login;
