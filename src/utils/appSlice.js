import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "sideBarSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = state.isMenuOpen ? false : true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;

export default appSlice.reducer;
