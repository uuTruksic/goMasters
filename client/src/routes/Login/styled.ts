import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: absolute;
  top: 130px;
  left: calc(50%);
  transform: translateX(-50%);
  width: 400px;
  min-height: 80%;
  border-radius: 15px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  padding: 50px;
`;
