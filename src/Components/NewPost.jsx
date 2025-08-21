const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-serif font-bold mb-6 text-amber-300">
        Create a New Post
      </h2>
    <p></p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
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
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
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
    </div>
  );
};

export default NewPost;
