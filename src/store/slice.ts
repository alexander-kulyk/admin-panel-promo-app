//core
import { createSlice } from '@reduxjs/toolkit';
//other
import { loginUser } from './auth';

interface IAuthInitialState {
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  error: null;
}

const initialState: IAuthInitialState = {
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: undefined,
//   extraReducers: builder =>
//     builder.addCase()
// });
