import { useNavigate } from "react-router-dom";
import { useForm } from "../../utils/useForm";
import { Container, Header, LoginButton, SearchInput } from "./styled";
import { useUserContext } from "../../context/user";
import { GetSession } from "../../utils/getSession";

const ChangePassword = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const initialState = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const { onChange, onSubmit, values } = useForm(changePassword, initialState);

  async function changePassword() {
    if (values.oldPassword === values.newPassword) {
      alert("Nové heslo se shoduje se starým heslem");
    } else if (values.newPassword !== values.confirmNewPassword) {
      alert("Nové heslo se neshoduje");
      console.log(values);
    }

    try {
      const res = await fetch("http://localhost:3000/user/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "token " + GetSession() },
        body: JSON.stringify(values),
      });

      if (res.status == 200) {
        alert("Heslo bylo úspěšně změněno");
      }
      navigate("/");
    } catch (e) {
      console.log(e);
      alert("Něco se pokazilo");
      return;
    }
  }

  return (
    <Container>
      <Header>Změnit heslo</Header>
      <form onSubmit={onSubmit}>
        <SearchInput name="oldPassword" onChange={onChange} type={"password"} placeholder="Současné heslo" required />
        <SearchInput name="newPassword" onChange={onChange} type={"password"} placeholder="Nové heslo" required />
        <SearchInput name="confirmNewPassword" onChange={onChange} type={"password"} placeholder="Potvrďte nové heslo" required />
        <LoginButton type="submit">Potvrdit</LoginButton>
      </form>
    </Container>
  );
};

export default ChangePassword;
