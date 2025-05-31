import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostData } from "../../utils/fetch.utils";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  return await fetchPostData();
})

const postSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchPosts.pending, (state) => {
      state.error = null;
      state.status = 'loading';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'success';
      state.posts = action.payload;
      state.error = null;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export default postSlice.reducer;
