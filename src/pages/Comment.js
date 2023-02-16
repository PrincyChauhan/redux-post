import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCommentDataAPI } from "../redux/action/commentAction";

const Comment = () => {
  const params = useParams();
  const { postId } = params;

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
      {comments.length > 0 && (
        <table border={1}>
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
        </table>
      )}
    </>
  );
};

export default Comment;


