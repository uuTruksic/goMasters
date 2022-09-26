import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const MenuContainer = styled.div`
  position: fixed;
  background: linear-gradient(
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(20px);
  width: 300px;
  min-height: 80%;
  left: 2%;
  top: 130px;
  border-radius: 15px;
  z-index: 1;
`;

export const MenuBackground = styled.div`
  position: absolute;
  width: 300px;
  height: 70px;
  left: 2%;
  top: calc(130px + 80% - 70px);
  z-index: 0;
  background-color: ${color("secondaryBackground")};
  border-radius: 15px;
`;
