// context/NavBarContext.js
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavBarContextType {
  isNavBarVisible: boolean;
  showNavBar: () => void;
  hideNavBar: () => void;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context)
    throw new Error("useNavBar must be used within a NavBarProvider");

  return context;
};

export const NavBarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);

  const showNavBar = () => setIsNavBarVisible(true);
  const hideNavBar = () => setIsNavBarVisible(false);

  return (
    <NavBarContext.Provider value={{ isNavBarVisible, showNavBar, hideNavBar }}>
      {children}
    </NavBarContext.Provider>
  );
};
