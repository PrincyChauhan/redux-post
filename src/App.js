import "./App.css";
import React from "react";
import Post from "./pages/Post/Post";
import Comment from "./pages/Comment/Comment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostInfo from "./pages/Post/PostInfo";
import AddPost from "./pages/Post/PostForm";
import UserForm from "./pages/User/UserForm";
import User from "./pages/User/User";
import UserEditForm from "./pages/User/UserEditForm";
import Person from "./pages/Person/Person";

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Post />} />
        <Route path="/posts/:postId/comments" element={<Comment />} />
        <Route path="/posts/:postId" element={<PostInfo />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/users/add" element={<UserForm />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:userId" element={<UserEditForm />} />
        <Route path="/person" element={<Person />} />
      </Routes>
    </Router>
  );
}
export default App;
