import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    getAllComments(state, action) {
      state.comments = [];
      state.comments.push(...action.payload);
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
