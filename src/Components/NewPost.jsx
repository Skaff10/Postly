const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">New Post</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="postTitle" className="mb-1 font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="postTitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="postBody" className="mb-1 font-medium text-gray-700">
            Post:
          </label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
