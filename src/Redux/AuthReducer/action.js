
export const login = (email, password) => (dispatch) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  } else {
    dispatch({ type: 'LOGIN_FAILURE' });
  }
};

export const register = (email, password) => (dispatch) => {
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.email === email);

  if (userExists) {
    dispatch({ type: 'REGISTER_FAILURE' });
  } else {
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    dispatch({ type: 'REGISTER_SUCCESS', payload: newUser });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('loggedInUser');
  dispatch({ type: 'LOGOUT' });
};
