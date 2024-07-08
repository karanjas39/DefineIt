import { FaBookmark } from "react-icons/fa";
import { FavWordsType, useSearch } from "../_contexts/searchContext";

export default function BookmarkWord({ favWord }: { favWord: FavWordsType }) {
  const { setFavWords, favWords } = useSearch();

  function handleAddBookMark() {
    const isWordExist = favWords.find((word) => word.word === favWord.word);
    if (isWordExist) {
      alert("Word is already in your favourite list.");
      return;
    }
    setFavWords((prev) => [favWord, ...prev]);
    localStorage.setItem("favWords", JSON.stringify([favWord, ...favWords]));
    alert("Word is added to favourite list.");
  }

  return (
    <FaBookmark
      className="text-3xl cursor-pointer"
      onClick={handleAddBookMark}
    />
  );
}
