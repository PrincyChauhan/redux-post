import { commentActions } from "./commentSlice";
import axios from "axios";

export const getAllCommentDataAPI = (id) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      dispatch(commentActions.getAllComments(data));
    }catch(err){
      console.log(err)
    } 
  };
};

