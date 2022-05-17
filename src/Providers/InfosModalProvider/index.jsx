import React from "react";
import { createContext, useContext, useState } from "react";

const InfosModalContext = createContext();

const InfosModalProvider = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const toogle = () => {
    return setisOpen((currentState) => !currentState);
  };

  return (
    <InfosModalContext.Provider value={{ isOpen, toogle }}>
      {children}
    </InfosModalContext.Provider>
  );
};

export default InfosModalProvider;
export const useInfosModal = () => useContext(InfosModalContext);
