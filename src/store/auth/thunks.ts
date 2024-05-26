//core
import axios, { AxiosResponse } from 'axios';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
//other
import { IAuthData } from '../../types/common';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const loginUser: AsyncThunk<undefined, IAuthData, AsyncThunkConfig> =
  createAsyncThunk('auth/login', async (data: IAuthData, thunkAPI) => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        'users/signup',
        data
      );
      console.log('response.data.token', response.data);
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  });
