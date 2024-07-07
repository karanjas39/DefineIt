"use client";

import { useEffect, useState } from "react";
import { useSearch } from "../_contexts/searchContext";
import useDebounce from "@/app/_lib/debounce";

export default function SearchResult() {
  const { searchedWord } = useSearch();
  const [result, setResult] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchedWord, 500);

  useEffect(() => {
    async function searchMeaning() {
      if (debouncedSearchTerm) {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedSearchTerm}`
        );
        const data = await res.json();
        setResult(data);
      }
    }
    searchMeaning();
  }, [debouncedSearchTerm]);

  return <div>{result && JSON.stringify(result)}</div>;
}
