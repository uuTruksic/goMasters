import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FormContainer = styled.div`
  position: relative;
  align-items: center;
  padding: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  text-align: center;
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 5rem;

  :hover {
    cursor: pointer;
  }
`;

export const Header = styled.h3`
  font-size: 38px;
  color: #262626;
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 30px !important;
`;
