import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slice/commentSlice";
import postSlice from "./slice/postSlice";
const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export default store;
