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
  setSearchedWord: Dispatch<SetStateAction<string>>;
  favWords: FavWordsType[];
  setFavWords: Dispatch<SetStateAction<FavWordsType[]>>;
};

type FavWordsType = {
  word: string;
  audio: string;
  source: string;
};

const SearchContext = createContext<ProviderContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [favWords, setFavWords] = useState<FavWordsType[]>(() => {
    const storedGoals = localStorage.getItem("favWords");
    return storedGoals ? JSON.parse(storedGoals) : [];
  });

  return (
    <SearchContext.Provider
      value={{ searchedWord, setSearchedWord, favWords, setFavWords }}
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
