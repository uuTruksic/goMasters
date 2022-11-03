import styled from "styled-components";
import { fontSize } from "../../styles/styleHelpers";

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin-top: 120px;
  padding: 0 100px;
`;

export const Section = styled.div`
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Header = styled.h1`
  font-size: ${fontSize("h1")};
  font-weight: 400;
`;

export const SongsContainer = styled.div`
  width: 100%;
  display: flex;
`;
