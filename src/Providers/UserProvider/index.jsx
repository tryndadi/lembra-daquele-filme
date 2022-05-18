import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { fakeApiAccess } from "../../services/api";
import { addToStorage, getUserInfos } from "../../assets/js/utils";
import { useHistory } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("userData")) || false
  );

  useEffect(() => {
    const { id, accessToken } = getUserInfos();
    if (!id || !accessToken) {
      history.push("/login");
    }
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
          setIsLoggedIn(true);
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
