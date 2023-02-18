
import axios from "axios";
import { commentActions } from "../slice/commentSlice";

export const getAllCommentDataAPI = (id) => {
  return async (dispatch) => {
    dispatch(commentActions.setLoading(true));
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      dispatch(commentActions.getAllComments(data));
    } catch (err) {
      console.log(err);
      dispatch(commentActions.setLoading(false));
    }
  };
};
