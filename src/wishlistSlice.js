import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const payload = { ...action.payload, id: action.payload._id || action.payload.id };
      const exists = state.find(item => item.id === payload.id);

      if (exists) {
        return state.filter(item => item.id !== payload.id);
      } else {
        state.push(payload);
      }
    }
  }
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
