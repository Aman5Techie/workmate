import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading : false
 
};

export const loadinginfoSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },

  },
});

export const { setloading} = loadinginfoSlice.actions;

export default loadinginfoSlice.reducer;
