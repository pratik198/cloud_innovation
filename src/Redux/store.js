import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './AuthReducer/reducer';
import movieReducer from './MovieReducer/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
