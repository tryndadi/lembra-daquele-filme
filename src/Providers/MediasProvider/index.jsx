import React, { createContext, useEffect, useState, useContext } from "react";
import tmdb from "../../services/tmdb";

const MediasContext = createContext();

const MediasProvider = ({ children }) => {
  const [mediasList, setMediasList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMedias = (callback) => {
    setIsLoading(true);
    callback().then((res) => {
      res = !Array.isArray(res) ? [res] : res;
      console.log(res)
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
    getMedias(tmdb.getMedia);
  }, []);

  return (
    <MediasContext.Provider
      value={{ mediasList, isLoading, getMedias, setMediasList }}
    >
      {children}
    </MediasContext.Provider>
  );
};

export const useTMDBMedias = () => useContext(MediasContext);

export default MediasProvider;
