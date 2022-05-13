import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonPage } from "./styles";

const ButtonToPage = ({ route, children, login = false }) => {
  const history = useHistory();

  if (route === '/login'){
    login = true
  }

  const handleClick = () => {
    history.push(route);
  };
  return <ButtonPage className='buttonToPage' login={login} onClick={handleClick}>{children}</ButtonPage>;
};

export default ButtonToPage;
