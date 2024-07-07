import { FaBookmark } from "react-icons/fa";
import { FavWordsType, useSearch } from "../_contexts/searchContext";

export default function BookmarkWord({ favWord }: { favWord: FavWordsType }) {
  const { setFavWords, favWords } = useSearch();

  function handleAddBookMark() {
    setFavWords((prev) => [...prev, favWord]);
    localStorage.setItem("favWords", JSON.stringify([...favWords, favWord]));
    alert("Word is added to favourite list.");
  }

  return (
    <FaBookmark
      className="text-3xl cursor-pointer"
      onClick={handleAddBookMark}
    />
  );
}
