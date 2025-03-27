import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// src/store.js
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { thunk } from "redux-thunk";
// import axios from "axios";

// const baseURL = "https://soft-solutions-api.onrender.com/";

// // Initial State
// const initialState = {
//   users: [],
// };

// // Action Types
// const SET_USERS = "SET_USERS";
// const ADD_USER = "ADD_USER";
// const UPDATE_USER = "UPDATE_USER";
// const DELETE_USER = "DELETE_USER";

// // Reducer Function
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USERS:
//       return { ...state, users: action.payload };
//     case ADD_USER:
//       return { ...state, users: [...state.users, action.payload] };
//     case UPDATE_USER:
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.payload.id ? action.payload : user
//         ),
//       };
//     case DELETE_USER:
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// // Create Store
// const store = createStore(userReducer, applyMiddleware(thunk));
// export default store;

// // Action Creators
// export const fetchUsers = () => async (dispatch) => {
//   const response = await axios.get(
//     "https://soft-solutions-api.onrender.com/api/user"
//   );
//   dispatch({ type: SET_USERS, payload: response.data });
//   console.log(response);
// };

// export const addUser = (user) => async (dispatch) => {
//   const response = await axios.post(
//     "https://jsonplaceholder.typicode.com/users",
//     user
//   );
//   dispatch({ type: ADD_USER, payload: response.data });
// };

// export const updateUser = (user) => async (dispatch) => {
//   const response = await axios.put(
//     `https://jsonplaceholder.typicode.com/users/${user.id}`,
//     user
//   );
//   dispatch({ type: UPDATE_USER, payload: response.data });
// };

// export const deleteUser = (userId) => async (dispatch) => {
//   await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   dispatch({ type: DELETE_USER, payload: userId });
// };
