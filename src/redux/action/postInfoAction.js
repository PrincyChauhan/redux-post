import axios from "axios";
import { postInfoActions } from "../slice/postInfoSlice";

export const getPostInfoDataAPI = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      dispatch(postInfoActions.getPostInfo(data));
    } catch (error) {
      console.log(error);
    }
  };
};
