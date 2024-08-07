import axios from 'axios';
import { FETCH_MOVIES_SUCCESS, SET_LOADING, SET_FILTER, SET_SORT_ORDER } from './actionTypes';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.get(`${process.env.REACT_APP_JSON_SERVER_URL}/movies`);
    dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setSortOrder = (order) => ({ type: SET_SORT_ORDER, payload: order });


