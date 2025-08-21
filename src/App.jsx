import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Missing from "./Components/Missing";
import Nav from "./Components/Nav";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { format } from "date-fns";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useNavigate();
  const location = useLocation();

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      dateTime: "2025-08-21 10:30 AM",
      body: "Just setting things up here, feeling excited!",
    },
    {
      id: 2,
      title: "Morning Grind",
      dateTime: "2025-08-21 08:00 AM",
      body: "Coffee ☕ + Code 💻 = Productivity unlocked.",
    },
    {
      id: 3,
      title: "Random Thoughts",
      dateTime: "2025-08-20 09:15 PM",
      body: "Is pineapple on pizza actually illegal in some countries? 🤔",
    },
    {
      id: 4,
      title: "Late Night Debugging",
      dateTime: "2025-08-19 11:45 PM",
      body: "Why do bugs only show up when you're about to sleep? 😭",
    },
  ]);

  useEffect(() => {
    const filteredPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredPost.reverse());
  }, [posts, search]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "yyyy-MM-dd hh:mm a");

    const newPost = {
      id,
      title: postTitle,
      dateTime: datetime,
      body: postBody,
    };
    const allPosts = [...posts, newPost];

    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    history("/");
  };

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    history("/");
  };

  // Determine if the page should scroll
  const scrollablePages = ["/", "/post"]; // Add paths that should scroll
  const isScrollable = scrollablePages.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <p></p>
      <main
        className={`flex-grow ${
          isScrollable ? "overflow-y-auto" : ""
        } bg-gray-700 flex-grow 
                 scrollbar-thumb-gray-500 scrollbar-track-gray-900
                 scrollbar-thin 
                 hover:scrollbar-thumb-amber-400 transition-colors duration-200`}
        style={{ minHeight: 0, marginBottom: "40px" }}
      >
        <Routes>
          <Route path="/" element={<Home posts={searchResults} />} />
          <Route
            path="/post"
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                setPostBody={setPostBody}
                postBody={postBody}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
