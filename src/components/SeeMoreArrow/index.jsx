import React from "react";

import { ContainerArrow } from "./style";
import { FaChevronDown } from 'react-icons/fa';


const SeeMoreArrow = () => {

  return (
    <>
      <ContainerArrow onClick={() => window.scroll({top: 500, left: 0, behavior: 'smooth' })}>
        <FaChevronDown className="animate__animated animate__fadeOutDown animate__slower animate__delay-2s animate__infinite"/>
      </ContainerArrow>
    </>
  )
}


export default SeeMoreArrow;