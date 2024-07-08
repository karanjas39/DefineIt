import FavouriteWords from "../_components/FavouriteWords";

export default function page() {
  return (
    <section className="sm:w-[50%] w-[90%] mx-auto my-6">
      <h2 className="sm:text-3xl text-2xl text-center font-bold">
        Your <span className="dark:text-red-700 text-red-800">favourite</span>{" "}
        words.
      </h2>
      <FavouriteWords />
    </section>
  );
}
