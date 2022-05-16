import React from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../components/Input";
import logo from "../../assets/img/logoCompleta.svg";
import { Main } from "./style";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { fakeApiAccess } from "../../services/api";
import { addToStorage } from "../../assets/js/utils";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

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

  const onSubmit = ({ email, password }) => {
    const infoUserLogin = {
      email,
      password,
    };

    fakeApiAccess
      .post("/api/login", JSON.stringify(infoUserLogin))
      .then((res) => {
        if (res.status === 200) {
          toast.success("Login bem sucedido!");
          const {
            data: { accessToken, user },
          } = res;
          addToStorage("userData", { accessToken, ...user });
          setTimeout(() => {
            history.push("/dashboard");
          }, 1000);
        }
      })
      .catch((res) => toast.error("Email ou senha errados!"));
  };

  return (
    <>
      <Main>
        <Link className="ancora-logo" to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="cont-form">
          <h2>Conecte-se</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
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
