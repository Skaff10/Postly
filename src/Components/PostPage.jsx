import { Link, useParams } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <div className="flex  mt-6 px-4">
      <article className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
        {post ? (
          <>
            <h2 className="text-3xl font-serif font-bold mb-3 text-amber-300">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-6">{post.dateTime}</p>
            <p className="text-gray-200 mb-6 leading-relaxed">{post.body}</p>
            <p></p>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-serif font-bold mb-3 text-amber-300">
              Post Not Found
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Well, that's disappointing.
            </p>
            <p>
              <Link
                to="/"
                className="underline text-amber-400 hover:text-amber-300 transition-colors"
              >
                Visit Our HomePage
              </Link>
            </p>
          </>
        )}
      </article>
    </div>
  );
};

export default PostPage;
