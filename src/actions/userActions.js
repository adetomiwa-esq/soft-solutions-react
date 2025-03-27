import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./types";

const API_URL = "https://soft-solutions-api.onrender.com/api/user";

// Fetch all users
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USERS_REQUEST });
      const response = await axios.get(API_URL);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Create a new user
export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_USER_REQUEST });
      const response = await axios.post(API_URL + "/new", userData);
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Update a user
export const updateUser = (userId, userData) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    axios
      .put(`${API_URL}/${userId}`, userData)
      .then((response) => {
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_USER_FAILURE,
          payload: error.message,
        });
      });
  };
};

// Delete a user
export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST, payload: userId });
    axios
      .delete(`${API_URL}/${userId}`)
      .then(() => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: userId,
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: error.message,
        });
      });
  };
};
