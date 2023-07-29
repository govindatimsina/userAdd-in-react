import UserSlice from "./slicers/UserSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export default store;
