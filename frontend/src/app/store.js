import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices/loadingSlice";
const store = configureStore({
  reducer: {userReducer,loadingReducer},
});

export default store;