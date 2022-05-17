import React, { useContext, useState } from "react";

import { InputSearch } from "./styles";
import { FaSistrix } from "react-icons/fa";
import { SearchContext } from "../../Providers/SearchProvider";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { getResults } = useContext(SearchContext);

  const handleSearch = (evt) => {
    evt.preventDefault();
    getResults(search);
    setSearch("");
  };
  return (
    <InputSearch onSubmit={(evt) => handleSearch(evt)}>
      <input
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
        placeholder="Pesquisar"
      />

      <button type="submit">
        <FaSistrix />
      </button>
    </InputSearch>
  );
};

export default SearchBar;
