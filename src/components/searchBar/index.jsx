import React, { useContext, useState } from "react";
import {FaSistrix} from "react-icons/fa"
import { SearchContext } from "../../Providers/SearchProvider";
import { InputSearch } from "./styles";

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const { getResults } = useContext(SearchContext)

    const handleSearch = (evt) => {
        evt.preventDefault()
        getResults(search)
        setSearch('')
    }
    console.log(search)
    return(
        <InputSearch onSubmit={(evt) => handleSearch(evt)}>
            <input 
            value={search} 
            onChange={(evt) => setSearch(evt.target.value)}
            placeholder="Pesquisar"
            />
            <button type="submit"><FaSistrix/></button>
        </InputSearch>
    )
}

export default SearchBar