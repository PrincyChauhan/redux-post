import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
const store = configureStore({
  reducer: { post: postSlice.reducer, comment: commentSlice.reducer },
});

export default store;
