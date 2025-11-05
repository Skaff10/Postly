import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="mx-2 my-3 p-6 bg-gray-900 text-gray-200 shadow-lg rounded-2xl border border-gray-700 hover:shadow-xl hover:border-amber-400 transition duration-300">
      <Link to={`/post/${post.id}`} className="block">
        <h2 className="text-2xl font-serif font-bold mb-2 text-amber-300 hover:text-amber-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-gray-400 mb-4 italic">{post.dateTime}</p>
      </Link>
      <p className="text-gray-300 cursor-default">
        {post.body.length <= 80 ? post.body : `${post.body.slice(0, 80)}...`}
      </p>
    </article>
  );
};

export default Post;
