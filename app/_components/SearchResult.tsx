"use client";

import { useEffect, useState } from "react";
import { useSearch } from "../_contexts/searchContext";
import { getMeaning } from "../_lib/api";
import useDebounce from "@/app/_lib/debounce";
import AudioPlayer from "./AudioPlayer";
import Meaning from "./Meaning";
import BookmarkWord from "./BookmarkWord";

export type ResultType = {
  word: string;
  phonetics: {
    audio: string;
    text: string;
  };
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
    }>;
  }>;
  sourceUrls?: Array<string>;
};

export default function SearchResult() {
  const { searchedWord } = useSearch();
  const [result, setResult] = useState<any>();
  const [error, setError] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchedWord, 500);

  useEffect(() => {
    async function searchMeaning() {
      setError("");
      setResult("");
      if (debouncedSearchTerm) {
        const data = await getMeaning(debouncedSearchTerm);
        if (!data) {
          setError(
            "We couldn't find definitions for the word you were looking for."
          );
        }
        setResult(data);
      }
    }
    searchMeaning();
  }, [debouncedSearchTerm]);

  if (!searchedWord) {
    return (
      <p className="w-[70%] mx-auto my-5 text-center text-1xl">
        You haven't searched anything yet.
      </p>
    );
  }

  if (searchedWord && !result && !error) {
    return (
      <p className="w-[70%] mx-auto my-5 text-center text-1xl">Loading...</p>
    );
  }

  if (searchedWord && error) {
    return <p className="w-[70%] mx-auto my-5 text-center text-1xl">{error}</p>;
  }

  if (searchedWord && result) {
    return (
      <div className="flex flex-col gap-2 w-[50%] mx-auto my-6">
        <div className="flex items-center justify-between">
          <h2 className="text-5xl">{searchedWord.toLowerCase()}</h2>
          <div className="flex items-start gap-4">
            {result.phonetics?.audio ? (
              <AudioPlayer src={result.phonetics.audio} />
            ) : null}
            <BookmarkWord />
          </div>
        </div>
        {result.phonetics?.text ? (
          <p className="dark:text-red-700 text-red-800">
            {result.phonetics.text}
          </p>
        ) : null}
        <div className="mt-3 flex flex-col gap-6">
          {result.meanings.map(
            (
              meaning: {
                partOfSpeech: string;
                definitions: Array<{
                  definition: string;
                  example?: string;
                }>;
              },
              i: number
            ) => (
              <Meaning meaning={meaning} key={i} />
            )
          )}
        </div>
        {result?.sourceUrls[0] && (
          <div className="my-4">
            <hr className=" dark:border-neutral-200 border-neutral-900" />
            <p className="mt-2 text-[16px] font-bold">Sources</p>
            <a href={result.sourceUrls[0]} target="_blank">
              {result.sourceUrls[0]}
            </a>
          </div>
        )}
      </div>
    );
  }
}
