import React from "react";
import { createContext, useContext, useState } from "react";

export const CommentsModalContext = createContext();

const CommentsModalProvider = ({ children }) => {
  const [media, setMedia] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toogle = (data) => {
    setMedia(data);
    setIsOpen((currentState) => !currentState);
  };

  <CommentsModalContext.Provider value={{ media, isOpen, toogle }}>
    {children}
  </CommentsModalContext.Provider>;
};

export default CommentsModalProvider;
