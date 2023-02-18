import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPostInfoDataAPI } from "../redux/action/postAction";
import Button from "@mui/material/Button";

const PostInfo = () => {
  const params = useParams();
  const { postId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostInfoDataAPI(postId));
  }, [postId]);

  const postInfo = useSelector((state) => state.post.posts);

  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            navigate(`/posts/`);
          }}
        >
          Back
        </Button>
      </div>
      {
        <table border={1}>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Title</th>
            </tr>

            <tr key={postInfo.id}>
              <td>{postInfo.id}</td>
              <td>{postInfo.title}</td>
            </tr>
          </tbody>
        </table>
      }

      <div style={{ paddingTop: "20px" }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/posts/${postInfo.id}/comments`)}
        >
          View Comments
        </Button>
      </div>
    </>
  );
};

export default PostInfo