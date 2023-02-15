import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
              {post.id} {post.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Post;