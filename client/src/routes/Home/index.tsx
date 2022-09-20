import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "./styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate("/login")}>
        Login
      </Button>
    </Container>
  );
};

export default Home;
