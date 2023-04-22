import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unSetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
// * POST @ /users/signup
// * body: { name, email, password }
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      //   После успешной регистрации добавляем токен в заголовок HTTP
      setToken(response.data.token);
     
      return response.data;
    } catch (error) {
     
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      //   После успешного login  добавляем токен в заголовок HTTP
      setToken(response.data.token);
      return response.data;
    } catch (error) {
  
       return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      // После успешного выхода удаляем токен из заголовка HTTP
      unSetToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// * GET @ /users/current

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  // Чтение токена из  state  с помощью getState()
  const state = thunkAPI.getState();
  const stateToken = state.auth.token;

  //  проверка на наличие токена если нет, то return
  if (!stateToken) {
   
    return thunkAPI.rejectWithValue('No valid token');
  }

  //  если токен есть, то добавляем токен в заголовок HTTP
  setToken(stateToken);

  // берем get инвормацию от бекэнда
  try {
    const response= await axios.get('/users/current');
     
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
