import React, { createContext, useState, useContext } from "react";
import { fakeApiAccess } from "../../services/api";
import fakeapi from "../../services/fakeapi";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {

  const [mediasList, setMediasList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const getMedias = (callback) => {
    setIsLoading(true);
    callback().then((res) => {
      res = !Array.isArray(res) ? [res] : res;
      setMediasList(
        res.map(({ keyWord, title, items }) => ({
          keyWord,
          title,
          items: items.data.results,
        }))
      );
      return setIsLoading(false);
    });
  };
 
  useEffect(() => {
    getMedias(fakeapi.getMedia(userData.accessToken));
  }, []);


  return (
    <WishListContext.Provider
      value={{ addMovieToWishList, removeMovieFromWishList, mediasList, isLoading, getMedias, setMediasList }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
export const useWishList = () => useContext(WishListContext);
