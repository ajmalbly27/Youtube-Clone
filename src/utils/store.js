import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./appSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});

export default store;
