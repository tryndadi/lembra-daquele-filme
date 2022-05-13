import React from "react"
import { ContainerDiv } from "./styles"
import landingPage_2 from "../../assets/img/landingPage_2.svg"
import landingPage_3 from "../../assets/img/landingPage_3.svg"
import landingPage_4 from "../../assets/img/landingPage_4.svg"
import landingPage_5 from "../../assets/img/landingPage_5.svg"

const TextLandingPage = () => {
    return (
        <ContainerDiv>
        <div className="container_text">
            <div>
                <h3>Acesse de qualquer dispositivo</h3>
                <p>Nossa aplicação foi pensada para facilitar sua visualização, 
                sendo assim o site é totalmente responsivo e pode ser acessado 
                de qualquer dispositivo.</p>

            </div>
            <img src={landingPage_2} alt="" />
        </div>
        <div className="container_text">
            <div>
                <h3>Veja o que todos estão assistindo</h3>
                <p>Nada como saber o que todos estão assistindo, aqui você tem acesso 
                aos tops do momento.</p>
            </div>
            <img src={landingPage_3} alt="" />
        </div>
        <div className="container_text">
            <div>
                <h3>Avalie os filmes que você assistiu</h3>
                <p>Com tantos lançamentos de séries e filmes 
                fica difícil se organizar e lembrar de tudo. Mas no nosso site você pode
                salvar o que você já assistiu e o que quer assistir.</p>
            </div>
            <img src={landingPage_4} alt="" />
        </div>
        <div className="container_text">
            <div>
                <h3>Gerencie seus filmes</h3>
                <p>Lorem ipsum hendrerit eros vel proin laoreet velit porta tincidunt vitae pulvinar,
                mollis odio fames lorem velit dolor blandit ante rutrum nunc, ultricesl li</p>
            </div>
            <img src={landingPage_5} alt="" />
        </div>
        </ContainerDiv>
    )
}

export default TextLandingPage

