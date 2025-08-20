import { Link } from "react-router-dom";
const Post = ({ post }) => {
  return (
    <div className=" mx-2 my-4 p-6 bg-purple-50 shadow-md rounded-md">
      <Link to={`/post/${post.id}`}>
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{post.dateTime}</p>
      </Link>
      <p className="text-gray-700">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}....`}
      </p>
    </div>
  );
};
export default Post;
