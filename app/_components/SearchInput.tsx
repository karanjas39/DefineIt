"use client";

import { useSearch } from "@/app/_contexts/searchContext";
import { FormEvent } from "react";

function SearchInput() {
  const { searchedWord, setSearchedWord } = useSearch();

  return (
    <div className="w-[60%] mx-auto">
      <input
        type="text"
        placeholder="Search any word.."
        className="w-full p-3 rounded-lg "
        value={searchedWord}
        onChange={(e) => setSearchedWord(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
