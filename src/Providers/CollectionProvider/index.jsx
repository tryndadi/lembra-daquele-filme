import React from "react";
import { createContext, useState } from "react";

export const CollectionContext = createContext([]);

const CollectionProvider = ({ children }) => {
  const [moviesCollection, setMoviesCollection] = useState([]);

  const addMovieToCollection = (movie) => {
    setMoviesCollection([...moviesCollection, movie]);
  };

  const removeMovieFromCollection = (movie) => {
    const newListMovies = moviesCollection.filter(
      (movieList) => movieList.id !== movie.id
    );
    setMoviesCollection(newListMovies);
  };

  return (
    <CollectionContext.Provider
      value={{
        moviesCollection,
        addMovieToCollection,
        removeMovieFromCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
