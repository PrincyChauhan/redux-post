import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostDataAPI } from "./store/postAction";

function App(props) {
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getAllPostDataAPI());
  };

  const posts = useSelector((state) => state.post.posts);
  return (
    <div>
      <button onClick={fetchData}>Fetch Posts</button>
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.id} {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;