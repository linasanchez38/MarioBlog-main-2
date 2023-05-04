import React, { useContext } from "react";
import SearchContext from "../context/Search";
import SearchStyle from "../styles/Search.module.css";
const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <section className={SearchStyle.container} id="Noticias">
      <input
        type="text"
        className={SearchStyle.search}
        onChange={function (e) {
          e.preventDefault();
          const { value } = e.target;
          if (String(value).toLowerCase().trim().length >= 3) {
            setSearch(value);
          } else {
            setSearch(null);
          }
        }}
        defaultValue={search}
        placeholder="Buscar..."
      />
    </section>
  );
};

export default Search;