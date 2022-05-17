import React, { createContext, useState, useContext } from "react";
import { fakeApiAccess } from "../../services/api";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const addMovieToWishList = async (movieId) => {
    await fakeApiAccess
      .post("/wishWatch", {
        headers: { Authorization: `Bearer ${userData.accessToken}` },
        body: { userId: userData.id, movieId: movieId },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const removeMovieFromWishList = async (elementId) => {
    await fakeApiAccess.delete(`/wishWatch/${elementId}`, {
      headers: { Authorization: `Bearer ${userData.accessToken}` },
    });
  };

  return (
    <WishListContext.Provider
      value={{ addMovieToWishList, removeMovieFromWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
export const useWishList = () => useContext(WishListContext);
