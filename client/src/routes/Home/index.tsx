import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return <div onClick={() => navigate("/testFolder")}>Okay</div>;
};

export default Home;
