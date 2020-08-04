import { types } from '../../constants/index';

// let loggedInUser = JSON.parse(localStorage.getItem('user'));
const initialState = { loggedIn: false, user: null };

const INITIAL_STATE = {
  ...initialState,
};

export const loginReducer = (state = INITIAL_STATE, data) => {
  switch (data.type) {
    case types.loggedIn:
      return Object.assign({}, state, { loggedIn: data.payload });
    default:
      return state;
  }
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.user:
      let obj = Object.assign({}, state, { user: action.payload });
      console.log(obj);
      return obj;
    default:
      return state;
  }
};
