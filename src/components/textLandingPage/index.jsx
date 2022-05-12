<<<<<<< HEAD
import React from "react";
=======

import react from "react"
>>>>>>> 0923023ed589fbb28175a073c0daf15540408524
import { Container } from "./styles"
import landingPage_2 from "../../assets/img/landingPage_2.svg"
import landingPage_3 from "../../assets/img/landingPage_3.svg"
import landingPage_4 from "../../assets/img/landingPage_4.svg"
import landingPage_5 from "../../assets/img/landingPage_5.svg"

const TextLandingPage = () => {
    return (
        <>
        <Container>
            <div>
                <h3>Acesse de qualquer dispositivo</h3>
                <p>Lorem ipsum hendrerit eros vel proin laoreet velit porta tincidunt vitae pulvinar,
                mollis odio fames lorem velit dolor blandit ante rutrum nunc, ultricesl li</p>
            </div>
            <img src={landingPage_2} alt="" />
        </Container>
        <Container>
            <div>
                <h3>Veja o que seus amigos estão assistindo</h3>
                <p>Lorem ipsum hendrerit eros vel proin laoreet velit porta tincidunt vitae pulvinar,
                mollis odio fames lorem velit dolor blandit ante rutrum nunc, ultricesl li</p>
            </div>
            <img src={landingPage_3} alt="" />
        </Container>
        <Container>
            <div>
                <h3>Avalie os filmes que você assistiu</h3>
                <p>Lorem ipsum hendrerit eros vel proin laoreet velit porta tincidunt vitae pulvinar,
                mollis odio fames lorem velit dolor blandit ante rutrum nunc, ultricesl li</p>
            </div>
            <img src={landingPage_4} alt="" />
        </Container>
        <Container>
            <div>
                <h3>Gerencie seus filmes</h3>
                <p>Lorem ipsum hendrerit eros vel proin laoreet velit porta tincidunt vitae pulvinar,
                mollis odio fames lorem velit dolor blandit ante rutrum nunc, ultricesl li</p>
            </div>
            <img src={landingPage_5} alt="" />
        </Container>
        </>
    )
}

export default TextLandingPage

