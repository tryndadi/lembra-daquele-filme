import ButtonToPage from "../../components/buttonToPage"
import landingPage_1 from "../../assets/img/landingPage_1.svg"
import TextLandingPage from "../../components/textLandingPage"
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
    </>
    
 )
}

export default LandingPage