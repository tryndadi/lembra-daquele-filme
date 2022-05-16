import React from "react";
import { createContext, useState } from "react";
import { fakeApiAccess } from "../../services/api";

export const CollectionContext = createContext([]);

const CollectionProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  const addMovieToCollection = async (movieId) => {
    fakeApiAccess.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${userData.accessToken}`;
    await fakeApiAccess
      .post("/watched", {
        userId: userData.id,
        movieId: movieId,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const removeMovieFromCollection = (elementId) => {
    fakeApiAccess
      .delete(`/watched/${elementId}`, {
        headers: {
          Authorization: `Bearer ${userData.acessToken} `,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <CollectionContext.Provider
      value={{
        addMovieToCollection,
        removeMovieFromCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
