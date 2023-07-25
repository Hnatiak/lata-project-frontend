// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://lata-project-backend.onrender.com';
// // axios.defaults.baseURL = 'https://task-pro-backend-j82b.onrender.com';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const register = createAsyncThunk('auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/api/auth/register', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const login = createAsyncThunk('auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post('/api/auth/login', credentials);
//       setAuthHeader(response.data.token);
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/api/auth/logout');
//     clearAuthHeader();
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.message);
//   }
// });

// // export const updateTheme = createAsyncThunk(
// //   'users/updateThemes',
// //   async (theme, thunkAPI) => {
// //     try {
// //       const { data } = await axios.patch('/api/users/themes', { theme });
// //       return data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (!persistedToken) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const res = await axios.get('/api/users/current');
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUserData = createAsyncThunk(
//   'users/updateUserData',
//   async (formData, thunkAPI) => {
//     try {
//       const resp = await axios.patch('api/users', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       return resp.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// // export const patchBoard = createAsyncThunk(
// //   'auth/patchBoard',
// //   async ({ boardId }, thunkAPI) => {
// //     try {
// //       const { data } = await axios.patch(`/api/users/board`, {
// //         activeBoard: boardId,
// //       });

// //       return data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );


import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/';
axios.defaults.baseURL = 'https://lata-project-backend.onrender.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // const res = await axios.post('/users/signup', credentials);
      const res = await axios.post('api/auth/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/auth/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/authlogout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/me');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);