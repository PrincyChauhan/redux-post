import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostInfoDataAPI } from "../redux/action/postAction";

const PostInfo = () => {
  const params = useParams();
  const { postId } = params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostInfoDataAPI(postId));
  }, [postId]);

  const postInfo = useSelector((state) => state.post.posts);

  return (
    <>
      {
        <table border={1}>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>

          <tr key={postInfo.id}>
            <td>{postInfo.id}</td>
            <td>{postInfo.title}</td>
          </tr>
        </table>
      }
    </>
  );
};

export default PostInfo;
