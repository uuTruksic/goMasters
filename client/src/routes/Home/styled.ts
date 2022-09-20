import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const StyledButton = styled(Button)`
  width: 100px !important;
`;
