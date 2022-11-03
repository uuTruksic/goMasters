import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../utils/useForm";
import { AvatarImg, ChangePassButton, Container, FormContainer, Header, HiddenImageInput, MainButton, SearchInput, SecondaryButton } from "./styled";

import avatar from "../../assets/icons/avatar.svg";
import { GetSession } from "../../utils/getSession";
import { useNavigate } from "react-router-dom";

async function LogOut() {
  try {
    const req = await fetch("http://localhost:3000/logout", {
      headers: {
        Authorization: `token ${GetSession()}`,
      },
    });
    localStorage.removeItem("session");
    location.replace("/login");
  } catch (e) {
    console.log(e);
  }
}

const MyAccount = () => {
  const [error, setError] = useState(false);
  const initialState = {
    email: "",
    name: "",
    password: "",
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

  const navigate = useNavigate();

  return (
    <Container>
      <FormContainer>
        <label htmlFor="image-input">
          <AvatarImg src={avatar} />
        </label>
        <HiddenImageInput id="image-input" type="file" />
        <div>
          <Header>Můj účet</Header>
          <form onSubmit={onSubmit}>
            <SearchInput name="name" onChange={onChange} type={"text"} placeholder="Jméno a příjmení" />
            <SearchInput name="email" onChange={onChange} type={"email"} placeholder="E-mail" />
            <ChangePassButton onClick={() => navigate("/change-password")}>Změnit heslo</ChangePassButton>
          </form>
        </div>
      </FormContainer>
      <MainButton onClick={onSubmit}>Potvrdit</MainButton>
      <SecondaryButton>Vymazat účet</SecondaryButton>
      <SecondaryButton onClick={LogOut}>Odhlásit se</SecondaryButton>
    </Container>
  );
};

export default MyAccount;
