import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { getAllCommentDataAPI } from "../redux/action/commentAction";
import Button from "@mui/material/Button";

const Comment = () => {
  const params = useParams();
  const { postId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommentDataAPI(postId));
  }, [postId]);

  const { comments, isLoading } = useSelector((state) => state.comment);

  if (isLoading) {
    return <div>Loading......</div>;
  }
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
      {comments.length > 0 && (
        <table border={1}>
           <tbody>
          <tr>
            <th>Id</th>
            <th>Comment</th>
          </tr>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
      <div style={{ paddingTop: "20px" }}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/posts/${postId}`)}
        >
          View Post
        </Button>
      </div>
    </>
  );
};

export default Comment;
