import React from "react";
import { InputContainer } from "./style";



const InputComponent = ({icon: Icon, register, name, ...rest}) => {

  console.log();

  return (
    <>
      <InputContainer>
        <input {...register(name)} {...rest} />

        <Icon/>
      </InputContainer>
    </>
  )
}


export default InputComponent;