import "./App.css";
import React from "react";
import Post from "./pages/Post";
import Comment from "./pages/Comment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostInfo from "./pages/PostInfo";
import AddPost from "./pages/Form";
function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId/comments" element={<Comment />} />
        <Route path="/posts/:postId" element={<PostInfo />} />
        <Route path="/posts/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
}
export default App;
