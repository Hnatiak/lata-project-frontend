// reviewsOperations.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://lata-project-backend.onrender.com';

/*
 * POST @ /api/reviews
 * body: { name, email, comment }
 */
export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (reviewData, thunkAPI) => {
    try {
      const res = await axios.post('/api/reviews', reviewData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /api/reviews
 */
export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/api/reviews');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * PUT @ /api/reviews/:id
 * body: { name, email, comment }
 */
export const editReview = createAsyncThunk(
  'reviews/editReview',
  async ({ id, name, email, comment }, thunkAPI) => {
    try {
      const res = await axios.put(`/api/reviews/${id}`, { name, email, comment });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /api/reviews/:id
 */
export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id, thunkAPI) => {
  try {
    await axios.delete(`/api/reviews/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});