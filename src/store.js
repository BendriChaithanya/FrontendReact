import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { coupons } from "./Cupon.js";
import axios from "axios";

/* -------------------- CART SLICE -------------------- */
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
  const payload = { ...action.payload, id: action.payload._id }; // map backend _id → id
  const item = state.find(i => i.id === payload.id);
  if (item) item.quantity += 1;
  else state.push({ ...payload, quantity: 1 });
},

    removeFromCart: (state, action) => state.filter(i => i.id !== action.payload),
    incrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.id === action.payload);
      if (!item) return;
      if (item.quantity > 1) item.quantity--;
      else return state.filter(i => i.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

/* -------------------- COUPON SLICE -------------------- */
const couponsSlice = createSlice({
  name: "coupons",
  initialState: { code: "", discount: 0, msg: "", applied: false },
  reducers: {
    applyCoupon: (state, action) => {
      const enteredCode = action.payload.toUpperCase();
      if (coupons[enteredCode]) {
        state.code = enteredCode;
        state.discount = coupons[enteredCode];
        state.applied = true;
        state.msg = `Coupon "${enteredCode}" applied successfully! You saved ${coupons[enteredCode]}%`;
      } else {
        state.msg = "Invalid coupon code";
        state.applied = false;
        state.discount = 0;
      }
    }
  }
});
export const { applyCoupon } = couponsSlice.actions;

/* -------------------- FETCH PRODUCTS -------------------- */
export const fetchVegItems = createAsyncThunk("veg/fetchVegItems", async () => {
  const res = await axios.get("http://localhost:9065/api/v1/products/getVegItems");
  return res.data.items;
});

export const fetchNonvegItems = createAsyncThunk("nonveg/fetchNonvegItems", async () => {
  const res = await axios.get("http://localhost:9065/api/v1/products/getNonvegItems");
  return res.data.items;
});

export const fetchMilkItems = createAsyncThunk("milk/fetchMilkItems", async () => {
  const res = await axios.get("http://localhost:9065/api/v1/products/getMilkItems");
  return res.data.items;
});

/* -------------------- REGISTER USER -------------------- */
export const registerUser = createAsyncThunk("register", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("http://localhost:9065/api/v1/products/register", data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

/* -------------------- LOGIN USER -------------------- */
export const LoginUser = createAsyncThunk("login", async (data, { rejectWithValue }) => {
  try {
    const res = await axios.post("http://localhost:9065/api/v1/products/login", data);
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

/* -------------------- FETCH ORDERS (PROTECTED) -------------------- */
export const fetchOrders = createAsyncThunk("orders", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:9065/api/v1/products/orders", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

/* -------------------- PRODUCT SLICE -------------------- */
const Vegslice = createSlice({
  name: "veg",
  initialState: { VegItems: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchVegItems.pending, state => { state.loading = true; })
      .addCase(fetchVegItems.fulfilled, (state, action) => {
        state.loading = false;
        state.VegItems = action.payload || [];
      })
      .addCase(fetchVegItems.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

const Nonvegslice = createSlice({
  name: "nonveg",
  initialState: { NonvegItems: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNonvegItems.pending, state => { state.loading = true; })
      .addCase(fetchNonvegItems.fulfilled, (state, action) => {
        state.loading = false;
        state.NonvegItems = action.payload || [];
      })
      .addCase(fetchNonvegItems.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

const Milkslice = createSlice({
  name: "milk",
  initialState: { MilkItems: [], loading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMilkItems.pending, state => { state.loading = true; })
      .addCase(fetchMilkItems.fulfilled, (state, action) => {
        state.loading = false;
        state.MilkItems = action.payload || [];
      })
      .addCase(fetchMilkItems.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

/* -------------------- USER SLICE -------------------- */
const userSlice = createSlice({
  name: "login",
  initialState: { user: null, loading: false, error: null, token: null, orders: [] },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => { state.loading = true; })
      .addCase(registerUser.fulfilled, state => { state.loading = false; })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(LoginUser.pending, state => { state.loading = true; })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload || [];
      });
  }
});

/* -------------------- STORE -------------------- */
const Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    coupon: couponsSlice.reducer,
    veg: Vegslice.reducer,
    nonveg: Nonvegslice.reducer,
    milk: Milkslice.reducer,
    login: userSlice.reducer,
  },
});

export default Store;
