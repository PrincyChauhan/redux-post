import { createSlice } from "@reduxjs/toolkit";

const initialPostState = {
  posts: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    getAllPosts(state, action) {
      state.posts = action.payload;
      state.isLoading=false
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
