import styled from "styled-components";
import { color, fontSize } from "../../styles/styleHelpers";

export const MenuContainer = styled.div<{ closeMenu: boolean }>`
  position: fixed;
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(20px);
  width: 300px;
  min-height: 80%;
  left: 2%;
  top: 130px;
  border-radius: 15px;
  z-index: 1;
  transition: 0.5s ease-in-out;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
    transition: 0.5s ease-in;
    width: 50px;
    `}
`;

export const MenuCloseImg = styled.img<{ closeMenu: boolean }>`
  position: absolute;
  right: 20px;
  top: 20px;
  transition: 0.5s;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
      transform: scale(0);
      transition: 0.5s;
    `}
  ${({ closeMenu }: any) =>
    !closeMenu &&
    `
    transition-delay: 0.5s;
    transform: scale(1);
    `}
`;

export const MenuOpenImg = styled.img<{ closeMenu: boolean }>`
  position: absolute;
  left: 50%;
  transform: scale(0);
  top: 20px;
  transition: 0.5s;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
    transition: 0.5s;
    transition-delay: 0.5s;
    transform: scale(1) translateX(-50%);
    `}
`;

export const HomeImg = styled.img<{ closeMenu: boolean }>`
  position: absolute;
  left: 50%;
  transform: scale(0);
  top: 80px;
  transition: 0.5s;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
    transition: 0.5s;
    transition-delay: 0.5s;
    transform: scale(1) translateX(-50%);
    `}
`;

export const AllSongsImg = styled.img<{ closeMenu: boolean }>`
  position: absolute;
  left: 50%;
  top: 120px;
  transition: 0.5s;
  transform: scale(0) translateX(-50%);

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
    transition: 0.5s;
    transition-delay: 0.5s;
    transform: scale(1) translateX(-50%);
    `}
`;

export const FavoritesSongsImg = styled.img<{ closeMenu: boolean }>`
  position: absolute;
  left: 50%;
  top: 160px;
  transition: 0.5s;
  transform: scale(0) translateX(-50%);

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
      transition: 0.5s;
      transition-delay: 0.5s;
      transform: scale(1) translateX(-50%);
    `}
`;

export const LinkContainer = styled.div<{ closeMenu: boolean }>`
  border-bottom: 1.5px solid ${color("secondaryBackground")};
  margin-bottom: 30px;
  transition: 0.5s;
  cursor: pointer;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
      transform: scale(0);
      transition: 0.5s;
    `}

  ${({ closeMenu }: any) =>
    !closeMenu &&
    `
    transition-delay: 0.5s;
    `}
`;

export const Link = styled.p`
  padding-bottom: 15px;
  font-size: ${fontSize("mainText")};
  font-weight: 600;
`;

export const MenuBackground = styled.div<{ closeMenu: boolean }>`
  position: absolute;
  width: 300px;
  height: 70px;
  left: 2%;
  top: calc(130px + 80% - 70px);
  z-index: 0;
  background-color: ${color("secondaryBackground")};
  border-radius: 15px;
  transition: 0.5s ease-in-out;

  ${({ closeMenu }: any) =>
    closeMenu &&
    `
    transition: 0.5s ease-in;
    width: 50px;
    `}
`;
