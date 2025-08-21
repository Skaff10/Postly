import Post from "./Post";
const Home = ({ posts }) => {
  return (
    <main className="">
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="mt-8">No posts to display... 😔 </p> 
      )}
    </main>
  );
};
export default Home;
