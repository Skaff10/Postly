import { Link } from "react-router-dom";

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-6 py-3 shadow-md  border-gray-700">
      {/* Search Bar */}
      <form
        className="flex flex-grow max-w-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="search"
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl bg-gray-800 text-gray-200 placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
        />
      </form>

      {/* Nav Links */}
      <ul className="flex gap-6 ml-6">
        <Link
          className="text-gray-300 hover:text-amber-300 font-medium transition-colors"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-300 hover:text-amber-300 font-medium transition-colors"
          to="/post"
        >
          Post
        </Link>
        <Link
          className="text-gray-300 hover:text-amber-300 font-medium transition-colors"
          to="/about"
        >
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
