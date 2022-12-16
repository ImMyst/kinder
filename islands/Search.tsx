import { SearchIcon } from "../components/icons/SearchIcon.tsx";

const Search = () => {
  return (
    <div class="bg-accent rounded-xl font-main h-full">
      <form action="/" method="get" class="flex items-center p-2 w-full h-full">
        <div class="ml-4 mr-6 -mt-1">
          <SearchIcon />
        </div>
        <input
          class="border-none px-4 focus:outline-none focus:bg-accent focus:ring focus:ring-main transition-colors h-12 rounded-xl mr-4 bg-primary w-full"
          type="text"
          placeholder="Search Github username..."
        />
        <button
          type="submit"
          class="rounded-xl bg-main py-3 px-6 flex transition-colors hover:bg-opacity-80 focus:outline-none focus:ring focus:ring-main/10 justify-end"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
