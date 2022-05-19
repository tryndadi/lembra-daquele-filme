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
  return <ButtonPage className='buttonToPage animate__animated animate__pulse animate__slow animate__delay-2s animate__infinite' login={login} onClick={handleClick}>{children}</ButtonPage>;
};

export default ButtonToPage;
