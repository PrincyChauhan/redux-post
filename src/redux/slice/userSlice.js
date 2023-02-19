import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
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
    deleteUserById(state, action) {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
