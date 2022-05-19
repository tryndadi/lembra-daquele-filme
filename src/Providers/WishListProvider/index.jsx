import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getFromStorage } from "../../assets/js/utils";
import { fakeApiAccess } from "../../services/api";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const history = useHistory();

  const getUserInfos = () => getFromStorage("userData") || {};

  const doubleCheck = async (movie) => {
    const { id, accessToken } = getUserInfos();

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    try {
      const res = await fakeApiAccess.get(
        `/wishWatch/?userId=${id}&movieId=${movie.id}`
      );

      if (res.data.length !== 0) {
        toast.error("Este filme já está na sua Lista de Desejos");
        return true;
      }

      return false;
    } catch (error) {
      const unauthorizedStatus = [401, 403];

      if (unauthorizedStatus.includes(error.status)) {
        return false;
      }
    }
  };

  const addMovieToWishList = async (movie) => {
    const { id, accessToken } = getUserInfos();

    const wishListHasMovie = await doubleCheck(movie);

    if (!wishListHasMovie) {
      const customMovieData = {
        ...movie,
        movieId: movie.id,
      };

      delete customMovieData.id;

      fakeApiAccess.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      try {
        await fakeApiAccess
          .post("/wishWatch", {
            userId: id,
            ...customMovieData,
          })
          .then((_) => {
            toast.success(" Filme adicionado à sua Lista de Desejos");
          });
      } catch (error) {
        const unauthorizedStatus = [401, 403];

        if (unauthorizedStatus.includes(error.status)) {
          history.push("/login");
          toast.error("Sua sessão expirou. Efetue login para continuar");
        }

        toast.error("Não foi possível salvar este filme");
      }
    }
  };

  const removeMovieFromWishList = ({ id }) => {
    const { accessToken } = getUserInfos();

    try {
      fakeApiAccess
        .delete(`/wishWatch/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken} `,
          },
        })
        .then((_) => toast.success("Filme removido da sua Lista de Desejos"));
    } catch (error) {
      const unauthorizedStatus = [401, 403];

      if (unauthorizedStatus.includes(error.status)) {
        history.push("/login");
        toast.error("Sua sessão expirou. Efetue login para continuar");
      }
      toast.error(
        "Não foi possível remover este filme da sua Lista de Desejos"
      );
    }
  };

  const getWishes = async () => {
    const { id, accessToken } = getFromStorage("userData") || {};

    if (!id || !accessToken) {
      history.push("/login");
      return;
    }

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return await fakeApiAccess
      .get(`/wishWatch/?userId=${id}`)
      .then(({ data }) => data);
  };

  return (
    <WishListContext.Provider
      value={{ addMovieToWishList, removeMovieFromWishList, getWishes }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
export const useWishList = () => useContext(WishListContext);
