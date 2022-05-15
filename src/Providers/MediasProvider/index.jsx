import React, { createContext, useEffect, useState, useContext } from "react";
import tmdb from "../../services/tmdb";

const MediasContext = createContext();

const MediasProvider = ({ children }) => {
  const [mediasList, setMediasList] = useState([]);

  useEffect(() => {
    tmdb.getMedia.then((res) =>
      setMediasList(
        res.map(({ keyWord, title, items }) => ({
          keyWord,
          title,
          items: items.data.results,
        }))
      )
    );
  }, []);

  return (
    <MediasContext.Provider value={{ mediasList }}>
      {children}
    </MediasContext.Provider>
  );
};

export const useTMDBMedias = () => useContext(MediasContext);

export default MediasProvider;
