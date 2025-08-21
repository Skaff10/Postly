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
import api from "./api/posts";
import EditPost from "./Components/EditPost";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const history = useNavigate();
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (e) {
        // Not in the 200 response range
        if (e.response) {
          console.log(e.response.data);
          console.log(e.response.status);
          console.log(e.response.headers);
        } else {
          console.log(`Error : ${e.message}`);
        }
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredPost.reverse());
  }, [posts, search]);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "yyyy-MM-dd hh:mm a");
    const updatedPost = {
      id,
      title: editTitle,
      dateTime: datetime,
      body: editBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditBody("");
      setEditTitle("");
      history("/");
    } catch (e) {
      console.log(`Error : ${e.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "yyyy-MM-dd hh:mm a");

    const newPost = {
      id,
      title: postTitle,
      dateTime: datetime,
      body: postBody,
    };

    try {
      const res = await api.post("/posts", newPost);
      const allPosts = [...posts, res.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      history("/");
    } catch (e) {
      console.log(`Error : ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      history("/");
    } catch (e) {
      console.log(`Error : ${error.message}`);
    }
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
            path="/edit/:id"
            element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
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
