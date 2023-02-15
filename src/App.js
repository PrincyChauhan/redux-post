import "./App.css";
import React from "react";
import Post from "./components/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}
export default App;
