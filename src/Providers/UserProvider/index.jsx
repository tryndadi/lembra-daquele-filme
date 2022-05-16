import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { fakeApiAccess } from "../../services/api";
import { getFromStorage, addToStorage } from "../../assets/js/utils";
import { useHistory } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const userData = getFromStorage("userData");
    userData ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  const login = ({ email, password }) => {
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
    <UserContext.Provider value={{ login, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
