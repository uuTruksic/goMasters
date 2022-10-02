import React, { createContext, ReactNode, useState } from "react";
import Menu from "../components/Menu";

interface MenuProp {
  isMenuOpened: boolean;
}

type MenuContextType = {
  closeMenu: boolean | null;
  setCloseMenu: React.Dispatch<React.SetStateAction<boolean | null>>;
};

type MenuContextProviderProps = {
  children: React.ReactNode;
};

export const MenuContext = createContext<MenuContextType | null>(null);

export const MenuProvider = ({ children }: MenuContextProviderProps) => {
  const [closeMenu, setCloseMenu] = useState<boolean | null>(null);
  return (
    <MenuContext.Provider value={{ closeMenu, setCloseMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
