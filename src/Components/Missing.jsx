import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-gray-900 text-amber-300 rounded-2xl shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-3">🚫 Post Not Found</h2>
      <p className="text-gray-400 mb-6">
        Well, that's a little disappointing...
      </p>
      <Link to="/">
        <button className="bg-amber-400 cursor-pointer text-gray-900 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-amber-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Missing;
