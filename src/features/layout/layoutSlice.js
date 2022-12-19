import { createAsyncThunks, createSlice } from "@reduxjs/toolkit";

const initialState = {
  elRef: null,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setElRef: (state, action) => {
      state.elRef = action.payload;
    },

    scrollToEl: (state) => {
      window.scrollTo({
        top: state.elRef.current.offsetTop + state.elRef.current.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    },
  },
});

export const { setElRef, scrollToEl } = layoutSlice.actions;

export const selectElRef = (state) => state.layout.elRef;

export default layoutSlice.reducer;
