import React from "react";
import ButtonToPage from "../../components/buttonToPage";
import landingPage_1 from "../../assets/img/landingPage_1.svg";
import logo from "../../assets/img/logo.svg";
import TextLandingPage from "../../components/textLandingPage";
import FooterLandingPage from "../../components/footerLandingPage";
import { Container, Header, LogoContainer, TopPageContainer } from "./styles";

const LandingPage = () => {
  return (
    <Container>
      <Header>
        <ButtonToPage route="/login">Entrar</ButtonToPage>
      </Header>
      <TopPageContainer>
        <div>
          <LogoContainer>
            <img src={logo} alt="" />
            <div>
              <h2>Lembra</h2>
              <h1>Daquele</h1>
              <h2>Filme?</h2>
            </div>
          </LogoContainer>

          <ButtonToPage route="/register">Faça seu cadastro</ButtonToPage>
          <ButtonToPage route="/login">Entrar</ButtonToPage>
        </div>
        <img src={landingPage_1} alt="Ilustração" />
      </TopPageContainer>
      <TextLandingPage />
      <FooterLandingPage />
    </Container>
  );
};

export default LandingPage;
