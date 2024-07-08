"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
} from "react";
import { useState, useEffect } from "react";

type ProviderContextType = {
  searchedWord: string;
  setSearchedWord: Dispatch<SetStateAction<string>>;
  favWords: FavWordsType[];
  setFavWords: Dispatch<SetStateAction<FavWordsType[]>>;
  deleteWord: (word: string) => void;
};

export type FavWordsType = {
  word: string;
  audio?: string;
  source: string;
};

const SearchContext = createContext<ProviderContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [favWords, setFavWords] = useState<FavWordsType[]>([]);

  useEffect(() => {
    const favWords = window.localStorage.getItem("favWords");
    setFavWords(favWords ? JSON.parse(favWords) : []);
  }, []);

  function deleteWord(delWord: string) {
    setFavWords((words) => words.filter((word) => word.word !== delWord));
  }

  return (
    <SearchContext.Provider
      value={{
        searchedWord,
        setSearchedWord,
        favWords,
        setFavWords,
        deleteWord,
      }}
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
