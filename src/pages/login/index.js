import React from "react";
import * as yup from "yup";
import logo from "../../assets/img/logoCompleta.svg";
import InputComponent from "../../components/Input";

import { Main } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useUser } from "../../Providers/UserProvider";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const { login } = useUser();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório.")
      .email("Digite um email válido."),
    password: yup.string().required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <Main>
        <Link className="ancora-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="cont-form">
          <h2>Conecte-se</h2>

          <form onSubmit={handleSubmit(login)}>
            <InputComponent
              type="email"
              icon={FaEnvelope}
              placeholder="Email"
              register={register}
              name="email"
              error={errors.email && errors.email.message}
            />

            <InputComponent
              type="password"
              icon={FaKey}
              placeholder="Senha"
              register={register}
              name="password"
              error={errors.password && errors.password.message}
            />

            <button type="submit">Entrar</button>
          </form>

          <span className="mensagem">
            Não possui uma conta?
            <Link to="/register">
              <strong> Cadastre-se</strong>
            </Link>
          </span>
        </div>

        <span className="copyright">Kenzie Academy Brazil &copy; 2022</span>
      </Main>
    </>
  );
};

export default LoginPage;
