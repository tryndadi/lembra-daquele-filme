import React from "react";
import { createContext, useState, useContext } from "react";
import { getFromStorage } from "../../assets/js/utils";
import { fakeApiAccess } from "../../services/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const CollectionContext = createContext([]);

const CollectionProvider = ({ children }) => {
  const history = useHistory();

  const addMovieToCollection = async (movie) => {
    const { id, accessToken } = getFromStorage("userData") || {};

    fakeApiAccess.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${accessToken}`;
    await fakeApiAccess
      .post("/watched", {
        userId: id,
        movieId: movie.id,
        image: movie.poster_path,
        title: movie.title || movie.name,
        average: movie.vote_average,
        vote_count: movie.vote_count,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const removeMovieFromCollection = ({ id }) => {
    const { accessToken } = getFromStorage("userData") || {};
    fakeApiAccess
      .delete(`/watched/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken} `,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const getCollection = async () => {
    const { id, accessToken } = getFromStorage("userData") || {};

    if (!id || !accessToken) {
      history.push("/login");
      return;
    }

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return await fakeApiAccess
      .get(`/watched/?userId=${id}`)
      .then(({ data }) => data);
  };

  return (
    <CollectionContext.Provider
      value={{
        addMovieToCollection,
        removeMovieFromCollection,
        getCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
export const useCollection = () => useContext(CollectionContext);
