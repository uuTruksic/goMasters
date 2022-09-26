import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const SongContainer = styled.div`
  width: 200px;
  height: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color("secondaryBackground")};
  border-radius: 15px;
`;

export const Image = styled.div<{ url?: string }>`
  width: 85%;
  height: 150px;
  border-radius: 15px;
  border: 1px solid #262626;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color("background")};
`;

export const Header = styled.h3`
  font-size: ${fontSize("mainText")};
  font-weight: 500;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: ${fontSize("classicText")};
`;
