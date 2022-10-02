import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: absolute;
  top: 90px;
  left: calc(50%);
  transform: translateX(-50%);
  width: 500px;
  min-height: 80%;
  padding: 50px;
  text-align: center;
`;

export const AvatarContainer = styled.div<{
  imgUrl: string | null | undefined;
}>`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background: ${(props) => `url(${props.imgUrl}) no-repeat top center`};
  margin: 0 auto 20px auto;
`;
