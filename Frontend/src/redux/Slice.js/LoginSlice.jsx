import React from "react";
import { createSlice } from "@reduxjs/toolkit";

// initial state apply here
const initialState = {
  loading: false,
};

export const LoginSlice = createSlice({
  // name , initialstat
  name: "counter",
  initialState,
  reducers: {
    // write the states
  },
});

export default LoginSlice;
