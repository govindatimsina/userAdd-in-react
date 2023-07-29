import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllUsers(state, action) {
      return [];
    },
  },
});

export default UserSlice.reducer;
export const { addUser, removeUser, removeAllUsers } = UserSlice.actions;
