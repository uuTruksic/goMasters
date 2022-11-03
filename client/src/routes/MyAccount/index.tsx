import type { User } from "../../interfaces";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../utils/useForm";
import { AvatarImg, ChangePassButton, Container, FormContainer, Header, HiddenImageInput, MainButton, SearchInput, SecondaryButton } from "./styled";

import avatar from "../../assets/icons/avatar.svg";
import { GetSession } from "../../utils/getSession";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user";

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

  const navigate = useNavigate();
  const { user, setUser } = useUserContext();
  const initialState = {
    email: user.email,
    name: user.name,
  };

  const { onChange, onSubmit, values } = useForm<User>(changeUserData, initialState);

  async function changeUserData() {
    try {
      const res = await fetch("http://localhost:3000/user/change-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `token ${GetSession()}`
        },
        body: JSON.stringify(values)
      });
      const user: User = await res.json();
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  }

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
            <SearchInput name="name" onChange={onChange} type={"text"} placeholder="Jméno a příjmení" value={values.name} />
            <SearchInput name="email" onChange={onChange} type={"email"} placeholder="E-mail" value={values.email} />
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
