import { AvatarContainer, AvatarName, Container, LogAndRegContainer, LoginButton, RegisterButton, SearchButton, SearchContainer, SearchInput } from "./styled";

import Logo from "../../assets/icons/logo.svg";
import FindImg from "../../assets/icons/find.svg";
import Avatar from "../../assets/icons/avatar.svg";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user";

const Nav = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
      <SearchContainer>
        <SearchButton>
          <img src={FindImg} alt="Logo" onClick={() => navigate("/")} />
        </SearchButton>
        <SearchInput placeholder="Vyhledat"></SearchInput>
      </SearchContainer>
      {localStorage.getItem("session") ? (
        <AvatarContainer onClick={() => navigate("/my-account")}>
          <img src={Avatar} alt="Avatar" onClick={() => navigate("/nastaveni-uctu")} />
          <AvatarName onClick={() => navigate("/prihlaseni")}>Michal Truksa</AvatarName>
        </AvatarContainer>
      ) : (
        <LogAndRegContainer>
          <RegisterButton onClick={() => navigate("/register")}>Registrovat se</RegisterButton>
          <LoginButton onClick={() => navigate("/login")}>Přihlásit se</LoginButton>
        </LogAndRegContainer>
      )}
    </Container>
  );
};

export default Nav;
