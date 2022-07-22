import { createSlice } from "@reduxjs/toolkit";
import { userActivitiesData } from "../data";

const initialState = userActivitiesData;

const userActivitySlice = createSlice({
  name: "userActivitySlice",
  initialState: initialState,
  reducers: {},
});

export default userActivitySlice.reducer;
