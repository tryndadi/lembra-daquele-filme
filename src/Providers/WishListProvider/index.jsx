import React, { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { getFromStorage } from "../../assets/js/utils";
import { fakeApiAccess } from "../../services/api";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
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

  const [userData] = useState(JSON.parse(localStorage.getItem("userData")));

  const addMovieToWishList = async (movie) => {
    const { id } = getUserInfos();

    const wishListHasMovie = await doubleCheck(movie);

    if (!wishListHasMovie) {
      const customMovieData = {
        ...movie,
        movieId: movie.id,
      };

      delete customMovieData.id;

      await fakeApiAccess
        .post("/wishWatch", {
          headers: { Authorization: `Bearer ${userData.accessToken}` },
          body: { userId: id, ...customMovieData },
        })
        .then((_) => {
          toast.success(" Filme adicionado à Lista de Desejos");
        })
        .catch((err) => console.log(err));
    }
  };

  const removeMovieFromWishList = async (elementId) => {
    await fakeApiAccess
      .delete(`/wishWatch/${elementId}`, {
        headers: { Authorization: `Bearer ${userData.accessToken}` },
      })
      .then((_) => {
        toast.success(" Filme removido à Lista de Desejos");
      });
  };

  const getWishes = async () => {
    const { userId, accessToken } = getUserInfos();

    // if (!userId || !accessToken){
    //   history.push("/login")
    //   return
    // }

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return await fakeApiAccess
      .get(`wishWatch/?userId=${userId}`)
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
