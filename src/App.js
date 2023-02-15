import "./App.css";
import React from "react";
import Post from "./components/Post";
import Comment from "./components/Comment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId/comments" element={<Comment />} />
      </Routes>
    </Router>
  );
}
export default App;
