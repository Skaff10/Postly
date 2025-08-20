import { Link } from "react-router-dom";
const Nav = ({ search, setSearch }) => {
  return (
    <nav className="flex  bg-zinc-400 items-center">
      <form className="flex w-1/2" onSubmit={(e) => e.preventDefault()}>
        <input
          id="search"
          className="ml-2 p-2 bg-white w-3xl rounded-l-xl  text-black rounded-r-xl h-12 mt-0.5 mb-1"
          type="text"
          placeholder="Search Post..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul className="flex justify-center mr-2  gap-10  mb-1 w-1/2">
        <Link
          className="bg-gray-300 rounded h-7 flex items-center  pl-4 pr-4 hover:bg-gray-900 hover:text-white "
          to="/"
        >
          Home
        </Link>
        <Link
          className="bg-gray-300 rounded h-7 flex items-center  pl-4 pr-4 hover:bg-gray-900 hover:text-white"
          to="/post"
        >
          Post
        </Link>
        <Link
          className="bg-gray-300 rounded h-7 flex items-center pl-4 pr-4 hover:bg-gray-900 hover:text-white"
          to="/about"
        >
          About
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
