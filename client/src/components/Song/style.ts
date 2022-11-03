import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const SongContainer = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${color("secondaryBackground")};
  border-radius: 15px;
  padding-top: 10px;
`;

export const Image = styled.div<{ url?: string }>`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid #262626;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  color: ${color("textPrimary")};
`;

export const Header = styled.h3`
  font-size: ${fontSize("primaryText")};
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: ${fontSize("secondaryText")};
  color: ${color("textSecondary")};
`;
