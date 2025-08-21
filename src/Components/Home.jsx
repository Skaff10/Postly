import Post from "./Post";
const Home = ({ posts }) => {
  return (
    <main className="">
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="mt-8 text-center text-gray-300 text-lg font-medium">
          No posts to display... <span className="text-amber-300">😔</span>
        </p>
      )}
    </main>
  );
};
export default Home;
