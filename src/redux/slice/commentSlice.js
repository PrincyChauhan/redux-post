import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = {
  comments: [],
  isLoading: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    getAllComments(state, action) {
      state.comments = action.payload;
      state.isLoading = false;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;