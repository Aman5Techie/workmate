import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
const token = localStorage.getItem("authorization") || null;

const initialState = {
  user: token ? jwtDecode(token) : null,
 
};

export const userinfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userinfoSlice.actions;

export default userinfoSlice.reducer;
