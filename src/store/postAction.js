import { postActions } from "./postSlice";
import axios from "axios";

export const getAllPostDataAPI = () => {
  return async (dispatch) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        dispatch(postActions.getAllPosts(data));
      });
  };
};