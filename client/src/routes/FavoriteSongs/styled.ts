import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: relative;
  margin: 130px 0 0 300px;
  margin-top: 130px;
`;

export const Section = styled.div`
  min-height: 300px;
  margin-left: 100px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Header = styled.h1`
  font-size: ${fontSize("h1")};
  margin-bottom: 20px;
`;

export const SongsContainer = styled.div`
  width: 100%;
  display: flex;
`;
