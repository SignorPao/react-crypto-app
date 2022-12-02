import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { CryptoContext } from "./../context/CryptoContext";

// import icon
import searchIcon from "../assets/search-icon.svg";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchdata } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchdata();
  };

  return (
    <>
      <form
        className="w-96 relative flex items-center font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200/60 backdrop-blur-md">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                  className="flex items-center ml-4 my-2 cursor-pointer"
                >
                  <img
                    src={coin.thumb}
                    alt={coin.name}
                    className="w-[1rem] h-[1rem] mx-1.5"
                  />
                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <div
                className="w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin"
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;