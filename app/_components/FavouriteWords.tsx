"use client";

import { type FavWordsType, useSearch } from "../_contexts/searchContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AudioPlayer from "./AudioPlayer";

export default function FavouriteWords() {
  const { favWords } = useSearch();

  if (favWords.length === 0) {
    return <p className="mt-5 text-center">You haven't added any word yet.</p>;
  }

  return (
    <div className="flex flex-col gap-4 mt-10">
      {favWords.map((word, i) => (
        <FavWordTemplate word={word} key={i} />
      ))}
    </div>
  );
}

function FavWordTemplate({ word }: { word: FavWordsType }) {
  const { deleteWord } = useSearch();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="sm:text-4xl text-2xl font-bold lowercase">
          {word.word}
        </h2>
        <div className="flex items-start sm:gap-4 gap-3">
          {word.audio && <AudioPlayer src={word.audio} />}
          <RiDeleteBin6Fill
            className="sm:text-3xl text-2xl cursor-pointer"
            onClick={() => deleteWord(word.word)}
          />
        </div>
      </div>
      <a className="text-[14px]" href={word.source} target="_blank">
        {word.source}
      </a>
      <hr className=" dark:border-neutral-200 border-neutral-900 mb-2 mt-1" />
    </div>
  );
}
