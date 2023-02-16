import { createSlice } from "@reduxjs/toolkit";

const initalPostInfoState = {
  postInfos: [],
};

const postInfoSlice = createSlice({
  name: "postInfo",
  initialState: initalPostInfoState,
  reducers: {
    getPostInfo(state, action) {
      state.postInfos = action.payload;
    },
  },
});

export const postInfoActions = postInfoSlice.actions;
export default postInfoSlice;