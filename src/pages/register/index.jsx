import InputComponent from "../../components/Input";
import { FaUserAlt, FaEnvelope, FaKey } from 'react-icons/fa'
import logo from '../../images/logo.png'

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { ContainerGeral } from "./style";




const RegisterPage = () => {

  const sechema = yup.object().shape({
    name: yup.string().required('Campo obrigatório.'),
    email: yup.string().required('Campo obrigatório.').email('Digite um email válido.'),
    password: yup.string().required('Campo obrigatório.').matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "A senha deve conter: Letras maiúsculas e minúsculas, símbolos e pelo menos 8 caracteres."),
    confirmPassword: yup.string().required("Campo obrigatório.").oneOf([yup.ref("password")], "Senhas diferentes."),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({
    resolver: yupResolver(sechema)
  })

  const onSubmit = (data) => {

    console.log(data);

    // FAZER A LÓGICA
    // DA REQUISIÇÃO
    // NA API
  }


  return (
    <>
      <ContainerGeral>

        <a className="ancora-logo" href="/"> {/*MANDAR PRA LANDING PAGE ============================= */}
          <img src={logo} alt="Logo" />
        </a>

        <div className="cont-form">

          <h2>Conecte-se</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              icon={FaUserAlt}
              placeholder='Nome'
              register={register}
              name='name'
              error={errors.name && errors.name.message}
            />

            <InputComponent
              icon={FaEnvelope}
              type='email'
              placeholder='Email'
              register={register}
              name='email'
              error={errors.email && errors.email.message}
            />

            <InputComponent
              icon={FaKey}
              type='password'
              placeholder='Senha'
              register={register}
              name='password'
              error={errors.password && errors.password.message}
            />

            <InputComponent
              icon={FaKey}
              type='password'
              placeholder='Confime a Senha'
              register={register}
              name='confirmPassword'
              error={errors.confirmPassword && errors.confirmPassword.message}
            />

            <button type="submit">Cadastrar</button>
          </form>

          <span className="mensagem">Possui uma conta? 
            <a href="/"> {/*COLOCAR O CAMINHO=============================*/}
            <strong>Conecte-se</strong>
            </a>
          </span>
        </div>

        <span className="copyright">Kenzie Academy Brazil &copy; 2022</span>
      </ContainerGeral>
    </>
  )

}


export default RegisterPage;