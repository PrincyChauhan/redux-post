import { postActions } from "./postSlice";
import axios from "axios";

export const getAllPostDataAPI = () => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(postActions.getAllPosts(data));
    }catch(err){
      console.log(err)
    } 
  };
};

