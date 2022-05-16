import React from "react";
import { createContext, useState } from "react";
import { tmdbAccess } from "../../services/api";
import { useTMDBMedias } from "../MediasProvider";

export const SearchContext = createContext([]);

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const { setMediasList } = useTMDBMedias();

  const getResults = (text) => {
    tmdbAccess
      .get(
        `search/multi?api_key=9274a24698b0d50f3d975771c35fd96e&language=pt-BR&query=${text}`
      )
      .then((resp) => {
        const results = {
          keyWord: text,
          title: `Resultados para ${text}`,
          items: resp.data.results,
        };
        setMediasList([results]);
      })
      .catch((err) => console.log(`error search: ${err}`));
  };
  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        getResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
