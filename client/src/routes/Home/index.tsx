import { useNavigate } from "react-router-dom";
import { Container, StyledButton } from "./styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <StyledButton variant="contained" onClick={() => navigate("/register")}>
        Register
      </StyledButton>
      <StyledButton variant="contained" color="secondary" onClick={() => navigate("/login")}>
        Login
      </StyledButton>
    </Container>
  );
};

export default Home;
