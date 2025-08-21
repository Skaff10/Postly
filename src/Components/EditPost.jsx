import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  setEditBody,
  editTitle,
  setEditTitle,
}) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-700">
      {editTitle && (
        <>
          <h2 className="text-3xl font-serif font-bold mb-6 text-amber-300">
            Update The Post
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(post.id);
            }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <div className="flex flex-col">
              <label
                htmlFor="postTitle"
                className="mb-2 font-medium text-gray-300 tracking-wide"
              >
                Title
              </label>
              <input
                type="text"
                id="postTitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-700 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col">
              <label
                htmlFor="postBody"
                className="mb-2 font-medium text-gray-300 tracking-wide"
              >
                Post
              </label>
              <textarea
                id="postBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="border border-gray-700 bg-gray-800 text-gray-200 rounded-lg px-4 py-2 h-36 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-amber-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-amber-300 transition-colors"
            >
              Publish
            </button>
          </form>
        </>
      )}{" "}
      {!editTitle && (
        <div className="mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
          <p className="text-sm text-gray-500 mb-4">
            Well, that's Disappointing.
          </p>
          <p className="underline text-blue-600">
            <Link to="/">Please Visit Our HomePage 😊</Link>
          </p>
        </div>
      )}
    </div>
  );
};
export default EditPost;
