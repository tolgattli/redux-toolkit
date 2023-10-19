import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../assets/courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 1,
  total: 0,
};
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item)=>item.id !== itemId)
    },
  },
});

export const { clearCard, removeItem } = cardSlice.actions;

export default cardSlice.reducer;
