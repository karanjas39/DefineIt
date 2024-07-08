"use client";

import { useSearch } from "@/app/_contexts/searchContext";
import { FormEvent } from "react";

function SearchInput() {
  const { searchedWord, setSearchedWord } = useSearch();

  return (
    <div className="sm:w-[60%] w-[90%]  mx-auto mt-4">
      <input
        type="text"
        placeholder="Search any word.."
        className="w-full p-3 rounded-lg dark:bg-neutral-600"
        value={searchedWord}
        onChange={(e) => setSearchedWord(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
