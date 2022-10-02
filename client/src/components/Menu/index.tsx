import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import {
  Link,
  LinkContainer,
  MenuCloseImg,
  MenuOpenImg,
  MenuContainer,
  HomeImg,
  AllSongsImg,
  FavoritesSongsImg,
} from "./styled";

import CrossImg from "../../assets/icons/cross.svg";
import OpenMenuImg from "../../assets/icons/openMenu.svg";
import HomeMenuImg from "../../assets/icons/home.svg";
import AllSongsMenuImg from "../../assets/icons/allSongs.svg";
import FavoritesSongsMenuImg from "../../assets/icons/favorites.svg";
import { MenuContext } from "../../providers/MenuProvider";

const menuLinksData = [
  {
    text: "Domovská stránka",
    url: "/",
    id: 0,
  },
  {
    text: "Přehled všech písniček",
    url: "/vsechny-pisnicky",
    id: 1,
  },
  {
    text: "Tvé oblíbené písničky",
    url: "/oblibene-pisnicky",
    id: 2,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const menuStatus = useContext(MenuContext);

  return (
    <MenuContainer closeMenu={menuStatus?.closeMenu}>
      <MenuCloseImg
        closeMenu={menuStatus?.closeMenu}
        src={CrossImg}
        onClick={() => {
          menuStatus?.setCloseMenu(!menuStatus.closeMenu);
        }}
        alt="Obrázek pro zavření menu"
      />
      <MenuOpenImg
        closeMenu={menuStatus?.closeMenu}
        src={OpenMenuImg}
        onClick={() => {
          menuStatus?.setCloseMenu(!menuStatus.closeMenu);
        }}
        alt="Obrázek pro otevření menu"
      />
      <HomeImg
        closeMenu={menuStatus?.closeMenu}
        src={HomeMenuImg}
        alt="Obrázek pro otevření menu"
      />
      <AllSongsImg
        closeMenu={menuStatus?.closeMenu}
        src={AllSongsMenuImg}
        alt="Obrázek pro otevření menu"
      />
      <FavoritesSongsImg
        closeMenu={menuStatus?.closeMenu}
        src={FavoritesSongsMenuImg}
        alt="Obrázek pro otevření menu"
      />
      {menuLinksData.map((prop) => (
        <LinkContainer
          closeMenu={menuStatus?.closeMenu}
          onClick={() => navigate(`${prop.url}`)}
          key={prop.id}
        >
          <Link>{prop.text}</Link>
        </LinkContainer>
      ))}
    </MenuContainer>
  );
};

export default Menu;
