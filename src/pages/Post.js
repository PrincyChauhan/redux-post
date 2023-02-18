import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPostDataAPI } from "../redux/action/postAction";
import Button from "@mui/material/Button";

const Post = () => {
  const navigate = useNavigate();
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
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/posts/add")}
        >
          Add Post
        </Button>
      </div>
      {posts.length > 0 && (
        <table border={1} className="center">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Post View</th>
              <th>Comment View</th>
            </tr>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/posts/${post.id}`)}
                  >
                    Post
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/posts/${post.id}/comments`)}
                  >
                    Comments
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Post;