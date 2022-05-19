import React from "react";

import { ContainerArrow } from "./style";
import { FaChevronDown } from 'react-icons/fa';



const SeeMoreArrow = () => {

  return (
    <>
      <ContainerArrow onClick={() => window.scrollTo(0, 500)}>
        <FaChevronDown className="animate__animated animate__fadeOutDown animate__slower animate__delay-2s animate__infinite"/>
      </ContainerArrow>
    </>
  )
}


export default SeeMoreArrow;