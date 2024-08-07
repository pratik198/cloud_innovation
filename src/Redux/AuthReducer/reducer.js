
const initialState = {
  user: JSON.parse(localStorage.getItem('loggedInUser')) || null,
  isAuthenticated: !!localStorage.getItem('loggedInUser'),
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, error: 'Invalid email or password', isAuthenticated: false };
    case 'REGISTER_SUCCESS':
      return { ...state, error: 'Registration successful! You can now log in.' };
    case 'REGISTER_FAILURE':
      return { ...state, error: 'User already exists or registration failed.' };
    case 'LOGOUT':
      return { ...state, user: null, isAuthenticated: false, error: null };
    default:
      return state;
  }
};

export default authReducer;
