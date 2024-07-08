import SearchInput from "@/app/_components/SearchInput";
import SearchResult from "./_components/SearchResult";

async function page() {
  return (
    <section className="flex items-center flex-col">
      <SearchInput />
      <SearchResult />
    </section>
  );
}

export default page;
