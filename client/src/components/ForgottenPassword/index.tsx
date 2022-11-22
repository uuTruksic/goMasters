import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, Header, LoginButton, SearchInput } from "./styled";
import { useUserContext } from "../../context/user";

const ForgottenPass = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const initialState = {
    email: "",
  };

  const { onChange, onSubmit, values } = useForm(forgottenPassCallback, initialState);

  async function forgottenPassCallback() {
    console.log("asda");
    try {
      const res = await fetch("http://localhost:3000/auth/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.status == 200) {
        alert("hotovo");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      return;
    }
  }

  return (
    <Container>
      <Header>Zapomenuté heslo</Header>
      <form onSubmit={onSubmit}>
        <SearchInput name="email" onChange={onChange} type={"email"} placeholder="E-mail" required />
        <LoginButton type="submit">Potvrdit</LoginButton>
      </form>
    </Container>
  );
};

export default ForgottenPass;
