import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, Header, RegisterButton, SearchInput } from "./styled";

const Register = () => {
  const navigate = useNavigate();
  const [errorStyle, setErrorStyle] = useState({});

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
      setErrorStyle({});
      try {
        const res = await fetch("http://localhost:3000/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (res.status == 200) {
          alert("Registrace proběhla úspěšně");
          navigate("/login");
        }
      } catch (e) {
        console.log(e);
        return;
      }

      //send values
      // @ts-ignore
    } else if (values.password.length < 8) {
      setErrorStyle({ border: "1px solid red" });
      alert("Heslo musí obsahovat alespoň 8 znaků");
    } else {
      setErrorStyle({ border: "1px solid red" });
      alert("Heslo se neshoduje");
    }
  }
  return (
    <Container>
      <Header>Registrace</Header>
      <form onSubmit={onSubmit}>
        <SearchInput name="name" onChange={onChange} type={"name"} placeholder="Jméno a příjmení" required />
        <SearchInput name="email" onChange={onChange} type={"email"} placeholder="E-mail" required />
        <SearchInput name="password" onChange={onChange} type={"password"} placeholder="Heslo" style={errorStyle} required />
        <SearchInput name="confirmPassword" onChange={onChange} type={"password"} placeholder="Potvrďte heslo" style={errorStyle} required></SearchInput>
        <RegisterButton type="submit">Potvrdit</RegisterButton>
      </form>
    </Container>
  );
};

export default Register;
