import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPostDataAPI } from "../redux/action/postAction";

const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPostDataAPI());
  }, []);

  const { posts, isLoading } = useSelector((state) => state.post);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  return (
    <>
      {posts.length > 0 && (
        <table border={1}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>View</th>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>
                <Link to={`/posts/${post.id}/comments`}>
                  {post.id}
                  {post.title}
                </Link>
              </td>
              <td>
              <Link to={`/posts/${post.id}`}>
                 Posts
                </Link>
              <Link to={`/posts/${post.id}/comments`}>
                 Comments
                </Link>
              </td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default Post;
