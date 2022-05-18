import React, { createContext, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getFromStorage } from "../../assets/js/utils";
import { fakeApiAccess } from "../../services/api";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {

  const history = useHistory()
  const getUserInfos = () => getFromStorage("userData") || {}

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

  const getWishes = async () => {

    const {userId, accessToken} = getUserInfos()

    // if (!userId || !accessToken){
    //   history.push("/login")
    //   return
    // }

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`

    return await fakeApiAccess
    .get(`wishWatch/?userId=${userId}`)
    .then(({data}) => data)
  }

  return (
    <WishListContext.Provider
      value={{ addMovieToWishList, removeMovieFromWishList, getWishes}}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
export const useWishList = () => useContext(WishListContext);
