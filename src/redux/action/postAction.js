import axios from "axios";
import { postActions } from "../slice/postSlice";

export const getAllPostDataAPI = () => {
  return async (dispatch) => {
    dispatch(postActions.setLoading(true))
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(postActions.getAllPosts(data));
    } catch (err) {
      console.log(err);
      dispatch(postActions.setLoading(false))
    }
  };
};

export const getPostInfoDataAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(postActions.getPostInfo(data));
    } catch (error) {
      console.log(error);
    }
  };
};
