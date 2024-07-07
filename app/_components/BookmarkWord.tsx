import { FaBookmark } from "react-icons/fa";

export default function BookmarkWord() {
  function handleAddBookMark() {}

  return (
    <FaBookmark
      className="text-3xl cursor-pointer"
      onClick={handleAddBookMark}
    />
  );
}
