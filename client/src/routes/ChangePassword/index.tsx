import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, Header, LoginButton, SearchInput } from "./styled";
import { useUserContext } from "../../context/user";

const ChangePassword = () => {
  const { user, setUser } = useUserContext();
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
        setUser({ name: user.name });
      }
    } catch (e) {
      console.log(e);
      return;
    }
  }

  return (
    <Container>
      <Header>Změnit heslo</Header>
      <form onSubmit={onSubmit}>
        <SearchInput name="oldPassword" onChange={onChange} type={"password"} placeholder="Staré heslo" required />
        <SearchInput name="newPassword" onChange={onChange} type={"password"} placeholder="Nové heslo" required />
        <SearchInput name="confirmPassword" onChange={onChange} type={"password"} placeholder="Potvrďte nové heslo" required />
        <LoginButton type="submit">Potvrdit</LoginButton>
      </form>
    </Container>
  );
};

export default ChangePassword;
