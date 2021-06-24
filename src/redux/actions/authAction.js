
import {
  USER_LOADED,
  LOGOUT
} from './types';

// Load User
export const loadUser = user => async dispatch => {
  try {
    dispatch({
      type: USER_LOADED,
      payload: user
    });
  } catch (err) {
   console.log(err)
  }
};

// // Register User
// export const register = formData => async dispatch => {
//   try {
//     const res = await api.post('/api/users', formData);

//     dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     });
//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       console.log('errors');
//     }

//     dispatch({
//       type: REGISTER_FAIL
//     });
//   }
// };

// // Login User
// export const login = (email, password) => async dispatch => {
//   const body = { email, password };

//   try {
//     const res = await api.post('/auth', body);

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: res.data
//     });

//     dispatch(loadUser());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       console.log('errors..login')
//     }

//     dispatch({
//       type: LOGIN_FAIL
//     });
//   }
// };

// Logout
export const logout = () => ({ type: LOGOUT });
