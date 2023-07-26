import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  reviews: [],
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReviewStart(state) {
      state.loading = true;
      state.error = null;
    },
    addReviewSuccess(state, action) {
      state.loading = false;
      state.reviews.push(action.payload);
    },
    addReviewFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchReviewsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReviewsSuccess(state, action) {
      state.loading = false;
      state.reviews = action.payload;
    },
    fetchReviewsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addReviewStart,
  addReviewSuccess,
  addReviewFailure,
  fetchReviewsStart,
  fetchReviewsSuccess,
  fetchReviewsFailure,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;