import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
      <p className="text-sm text-gray-500 mb-4">Well, that's Disappointing.</p>
      <p className="underline text-blue-600">
        <Link to="/"> Visit Our HomePage</Link>
      </p>
    </div>
  );
};
export default Missing;
