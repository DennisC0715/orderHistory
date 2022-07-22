import { createSlice } from "@reduxjs/toolkit";
import { userActivitiesData } from "../data";

export const paginateFunction = (data) => {
  const itemsPerPage = 3;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return pages;
};

const getTypeNumbers = (data, condition) => {
  const buys = data.filter((item) => {
    return item.type === condition;
  });
  return buys;
};

const initialState = {
  userData: paginateFunction(userActivitiesData),
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
