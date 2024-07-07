"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
} from "react";
import { useState } from "react";

type ProviderContextType = {
  searchedWord: string;
  handleSearch: (s: string) => void;
  setSearchedWord: Dispatch<SetStateAction<string>>;
};

const SearchContext = createContext<ProviderContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchedWord, setSearchedWord] = useState<string>("");

  function handleSearch(s: string) {
    setSearchedWord(s);
  }

  return (
    <SearchContext.Provider
      value={{ searchedWord, setSearchedWord, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
