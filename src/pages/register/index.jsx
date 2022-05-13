import InputComponent from "../../components/Input";
import { FaUserAlt, FaEnvelope, FaKey } from "react-icons/fa";
import logoCompleta from "../../assets/img/logoCompleta.svg";

import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContainerGeral } from "./style";
import { fakeApiAccess } from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const sechema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório.")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Somente letras"),
    email: yup
      .string()
      .required("Campo obrigatório.")
      .email("Digite um email válido."),
    password: yup
      .string()
      .required("Campo obrigatório.")
      .min(8, "Conter 8 ou mais caracteres")
      .matches(/(?=.*?[a-z])/, "Conter ao menos uma letra minúscula")
      .matches(/(?=.*?[A-Z])/, "Conter ao menos uma letra maiúscula")
      .matches(/(?=.*?[0-9])/, "Conter ao menos um número")
      .matches(/(?=.*?[#?!@$%^&*-])/, "Conter ao menos um símbolo"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("password")], "Senhas diferentes."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sechema),
  });

  const onSubmit = ({ name, email, password }) => {
    const infoUserRegister = {
      name,
      email,
      password,
    };

    fakeApiAccess
      .post("/api/register", JSON.stringify(infoUserRegister))
      .then((_) => toast.success("Conta cadastrada com sucesso!"))
      .catch((_) => toast.error("Email já cadastrado."));
  };

  return (
    <>
      <ContainerGeral>
        <Link to="/" className="ancora-logo">
          <img src={logoCompleta} alt="logoCompleta" />
        </Link>

        <div className="cont-form">
          <h2>Cadastre-se</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              icon={FaUserAlt}
              placeholder="Nome"
              register={register}
              name="name"
              error={errors.name && errors.name.message}
            />

            <InputComponent
              icon={FaEnvelope}
              type="email"
              placeholder="Email"
              register={register}
              name="email"
              error={errors.email && errors.email.message}
            />

            <InputComponent
              icon={FaKey}
              type="password"
              placeholder="Senha"
              register={register}
              name="password"
              error={errors.password && errors.password.message}
            />

            <InputComponent
              icon={FaKey}
              type="password"
              placeholder="Confime a Senha"
              register={register}
              name="confirmPassword"
              error={errors.confirmPassword && errors.confirmPassword.message}
            />

            <button type="submit">Cadastrar</button>
          </form>

          <span className="mensagem">
            Possui uma conta? 
            <Link to='/login'>
              <strong> Conecte-se</strong>
            </Link>
          </span>
        </div>

        <span className="copyright">Kenzie Academy Brazil &copy; 2022</span>
      </ContainerGeral>
    </>
  );
};

export default RegisterPage;
