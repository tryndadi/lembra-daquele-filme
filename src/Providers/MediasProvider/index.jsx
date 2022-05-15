import React, { createContext, useEffect, useState, useContext } from "react";
import tmdb from "../../services/tmdb";

const MediasContext = createContext();

const MediasProvider = ({ children }) => {
  const [mediasList, setMediasList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    tmdb.getMedia.then((res) => {
      setMediasList(
        res.map(({ keyWord, title, items }) => ({
          keyWord,
          title,
          items: items.data.results,
        }))
      );
      return setIsLoading(false);
    });
  }, []);

  return (
    <MediasContext.Provider value={{ mediasList, isLoading }}>
      {children}
    </MediasContext.Provider>
  );
};

export const useTMDBMedias = () => useContext(MediasContext);

export default MediasProvider;
