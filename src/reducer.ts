// src/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import { MyState } from "./interfaces";


const initialState: MyState = {
  // Initialize your state here
};

const mySlice = createSlice({
  name: "my",
  initialState,
  reducers: {
    // Define your reducers here
  },
});

export const { /* Export your actions here */ } = mySlice.actions;
export default mySlice.reducer;
