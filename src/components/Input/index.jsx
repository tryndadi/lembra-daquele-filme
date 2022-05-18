import React, { useState } from "react";
import { InputContainer } from "./style";



const InputComponent = ({icon: Icon, error, register, name, ...rest}) => {


  return (
    <>
      <InputContainer  isErrored={!!error}>
        {
        !!error && 
        <span className="erro">{error}</span>
        }

        <div className="container-input">
          <input {...register(name)} {...rest} />

          <Icon/>
        </div>
      </InputContainer>
    </>
  )
}


export default InputComponent;