import { AvatarContainer, AvatarLine, AvatarName, Container, SearchContainer, StyledInput } from "./styled";

import Logo from "../../assets/icons/logo.svg";
import Avatar from "../../assets/icons/avatar.svg";
import FindImg from "../../assets/icons/find.svg";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
      <SearchContainer>
        <StyledInput variant="standard" placeholder="Najdi svoji oblíbenou songu"></StyledInput>
        <img src={FindImg} alt="Tlačítko pro vyhledávání" />
      </SearchContainer>
      <AvatarContainer>
        <AvatarName onClick={() => navigate("/prihlaseni")}>Přihlásit se</AvatarName>
        <AvatarLine />
        <img src={Avatar} alt="Avatar" onClick={() => navigate("/nastaveni-uctu")} />
      </AvatarContainer>
    </Container>
  );
};

export default Nav;
