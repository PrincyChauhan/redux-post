import { createSlice } from "@reduxjs/toolkit";

const initialPostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    getAllPosts(state, action) {
      state.posts = [];
      state.posts.push(...action.payload);
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
