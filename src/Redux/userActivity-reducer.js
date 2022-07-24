import { createSlice } from "@reduxjs/toolkit";
import { userActivitiesData } from "../data";

const getTypeNumbers = (data, condition) => {
  const buys = data.filter((item) => {
    return item.type === condition;
  });
  return buys;
};

const initialState = {
  allData: userActivitiesData,
  buyingData: getTypeNumbers(userActivitiesData, "Buy"),
  sellingData: getTypeNumbers(userActivitiesData, "Sell"),
};

const userActivitySlice = createSlice({
  name: "userActivitySlice",
  initialState: initialState,
  reducers: {},
});

export default userActivitySlice.reducer;
