import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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

const Menu: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <>
      <MenuContainer closeMenu={closeMenu}>
        <MenuCloseImg
          closeMenu={closeMenu}
          src={CrossImg}
          onClick={() => setCloseMenu(!closeMenu)}
          alt="Obrázek pro zavření menu"
        />
        <MenuOpenImg
          closeMenu={closeMenu}
          src={OpenMenuImg}
          onClick={() => setCloseMenu(!closeMenu)}
          alt="Obrázek pro otevření menu"
        />
        <HomeImg
          closeMenu={closeMenu}
          src={HomeMenuImg}
          alt="Obrázek pro otevření menu"
        />
        <AllSongsImg
          closeMenu={closeMenu}
          src={AllSongsMenuImg}
          alt="Obrázek pro otevření menu"
        />
        <FavoritesSongsImg
          closeMenu={closeMenu}
          src={FavoritesSongsMenuImg}
          alt="Obrázek pro otevření menu"
        />
        {menuLinksData.map((prop) => (
          <LinkContainer
            closeMenu={closeMenu}
            onClick={() => navigate(`${prop.url}`)}
            key={prop.id}
          >
            <Link>{prop.text}</Link>
          </LinkContainer>
        ))}
      </MenuContainer>
    </>
  );
};

export default Menu;
