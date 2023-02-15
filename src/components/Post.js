import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPostDataAPI } from "../store/postAction";

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostDataAPI());
  }, [dispatch]);

  const posts = useSelector((state) => state.post.posts);

  return (
    <>
      {posts.length > 0 && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}/comments`}>  {post.id}{post.title}</Link>
             
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Post;
