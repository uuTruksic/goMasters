import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../utils/useForm";
import { Container, AvatarContainer } from "./styled";

import Avatar from "../../assets/icons/avatar_big.svg";

async function LogOut() {
  try {
    const token = localStorage.getItem("session");
    const req = await fetch("http://localhost:3000/logout", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    localStorage.removeItem("session");
    location.replace("/prihlaseni");
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
  return (
    <Container>
      <AvatarContainer imgUrl={Avatar ? Avatar : Avatar} />
      <form onSubmit={onSubmit}>
        <TextField name="email" onChange={onChange} margin="normal" type={"email"} variant="outlined" label="E-mail" fullWidth></TextField>
        <TextField name="name" onChange={onChange} margin="normal" type={"text"} variant="outlined" label="Jméno" fullWidth></TextField>
        <TextField error={error} name="password" onChange={onChange} onFocus={() => setError(false)} margin="normal" type={"password"} variant="outlined" label="Heslo" fullWidth></TextField>
        <Button type="submit" variant="contained" style={{ marginTop: "15px" }} fullWidth>
          potvrdit
        </Button>
        <Button onClick={LogOut} style={{ marginTop: "15px" }} fullWidth>
          odhlasit se
        </Button>
      </form>
    </Container>
  );
};

export default MyAccount;
