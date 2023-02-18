import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducer: {
    getAllUser(state, action) {
      state.users = action.payload;
    },
    getUserById(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users = action.payload;
    },
    updateUserById(state, action) {
      state.users = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;