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
});

export default cardSlice.reducer;
