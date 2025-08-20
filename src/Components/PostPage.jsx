import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <div>
      <article className="mx-auto p-6 bg-white shadow-md rounded-md">
        {post && (
          <>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{post.dateTime}</p>
            <p className="text-gray-700 mb-4">{post.body}</p>

            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </>
        )}{" "}
        {!post && (
          <>
            <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
            <p className="text-sm text-gray-500 mb-4">
              Well, that's Disappointing.
            </p>
            <p className="underline text-blue-600">
              <Link to="/"> Visit Our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </div>
  );
};
export default PostPage;
