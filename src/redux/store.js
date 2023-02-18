import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./slice/commentSlice";
import postSlice from "./slice/postSlice";
import userSlice from "./slice/userSlice";
const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comment: commentSlice.reducer,
    user:userSlice.reducer
  },
});

export default store;
