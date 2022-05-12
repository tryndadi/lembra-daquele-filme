import React from "react";
import ButtonToPage from "../../components/buttonToPage"
import landingPage_1 from "../../assets/img/landingPage_1.svg"

import TextLandingPage from "../../components/textLandingPage"
import FooterLandingPage from "../../components/footerLandingPage"

import { Header } from "./styles"

const LandingPage = () => {
 return (
    <>
    <Header>
        <ButtonToPage route='/login'>Entrar</ButtonToPage>
    </Header>    
    <div>
        <ButtonToPage route='/register'>Faça seu cadastro</ButtonToPage>
        <ButtonToPage route='/login'>Entrar</ButtonToPage>
        <img src={landingPage_1} alt="Ilustração" />
    </div>
        <TextLandingPage/>
        <FooterLandingPage/>
    </>
    
 )
}

export default LandingPage
