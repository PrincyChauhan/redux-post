import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCommentDataAPI } from "../store/commentAction";

const Comment = () => {
  const params = useParams();
  const { postId } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCommentDataAPI(postId));
  }, [dispatch,postId]);

  const comments = useSelector((state) => state.comment.comments);

  return (
    <>
      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.id} {comment.name}
            </li>
          ))}
        </ul>
      )}
      {/* {postId} */}
    </>
  );
};

export default Comment;
