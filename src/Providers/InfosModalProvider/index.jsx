import React from "react";
import { createContext, useContext, useState } from "react";

const InfosModalContext = createContext();

const InfosModalProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [isOpen, setisOpen] = useState(false);

  const toogle = (data) => {
    setMedia(data);
    setisOpen((currentState) => !currentState);
  };

  return (
    <InfosModalContext.Provider value={{ isOpen, toogle, media }}>
      {children}
    </InfosModalContext.Provider>
  );
};

export default InfosModalProvider;
export const useInfosModal = () => useContext(InfosModalContext);
