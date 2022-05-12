import React from "react";
import ButtonToPage from "../../components/buttonToPage";
import landingPage_1 from "../../assets/img/landingPage_1.svg";

const LandingPage = () => {
  return (
    <div>
      <ButtonToPage route="/register">Faça seu cadastro</ButtonToPage>
      <ButtonToPage route="/login">Entrar</ButtonToPage>
      <img src={landingPage_1} alt="Ilustração" />
    </div>
  );
};

export default LandingPage;
