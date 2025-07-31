import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://api.artic.edu/api/v1/artworks";

export const fetchData = createAsyncThunk("FETCH/DATA", async (page: number, thunkAPI) => {
  try {
    const res = await axios.get(`${baseUrl}?page=${page}`);
    return res.data.data; // returning the artwork data only
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  isLoading: false,
  data: [],
  isError: null as string | null,
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string | null;
      });
  },
});

export default articleSlice.reducer;
