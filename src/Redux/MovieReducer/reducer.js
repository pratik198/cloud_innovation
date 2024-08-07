
// import {
//   FETCH_MOVIES_SUCCESS,
//   SET_LOADING,
//   SET_FILTER,
//   SET_SORT_ORDER,
// } from './actionTypes';

// const initialState = {
//   isLoading: false,
//   isError: false,
//   movies: [],
//   filter: null,
//   sortOrder: 'asc',
// };

// const movieReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_MOVIES_SUCCESS:
//       return {
//         ...state,
//         movies: action.payload,
//       };
//     case SET_LOADING:
//       return {
//         ...state,
//         isLoading: action.payload,
//       };
//     case SET_FILTER:
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     case SET_SORT_ORDER:
//       return {
//         ...state,
//         sortOrder: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default movieReducer;

import {
  FETCH_MOVIES_SUCCESS,
  SET_LOADING,
  SET_FILTER,
  SET_SORT_ORDER,
} from './actionTypes';

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
  filter: null,
  sortOrder: 'asc',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      let sortedMovies = [...action.payload];

      // Sorting logic
      if (state.sortOrder === 'asc') {
        sortedMovies.sort((a, b) => a.Year - b.Year); // Ascending order
      } else {
        sortedMovies.sort((a, b) => b.Year - a.Year); // Descending order
      }

      // Filtering logic
      if (state.filter && state.filter.length > 0) {
        sortedMovies = sortedMovies.filter(movie => state.filter.includes(movie.rating));
      }

      return {
        ...state,
        movies: sortedMovies,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
