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

  return (
    <CommentsModalContext.Provider value={{ media, isOpen, setIsOpen, toogle }}>
      {children}
    </CommentsModalContext.Provider>
  );
};

export default CommentsModalProvider;
export const useCommentsModal = () => useContext(CommentsModalContext);
