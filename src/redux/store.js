import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slice/commentSlice";
import postInfoSlice from "./slice/postInfoSlice";
import postSlice from "./slice/postSlice";
const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
    postInfo: postInfoSlice.reducer,
  },
});

export default store;
