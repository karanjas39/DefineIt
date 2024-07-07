"use client";

import { useSearch } from "@/app/_contexts/searchContext";
import { FormEvent } from "react";

function SearchInput() {
  const { searchedWord, handleSearch, setSearchedWord } = useSearch();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    handleSearch(searchedWord);
  }

  return (
    <form className="w-[60%] mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search any word.."
        className="w-full p-3 rounded-lg "
        value={searchedWord}
        onChange={(e) => setSearchedWord(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
