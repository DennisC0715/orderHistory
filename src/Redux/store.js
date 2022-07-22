import { configureStore } from "@reduxjs/toolkit";
import ActivityReducer from "./userActivity-reducer";

export const store = configureStore({
  reducer: { userActivity: ActivityReducer },
});
