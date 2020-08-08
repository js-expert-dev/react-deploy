import { types } from '../../../../../constants/index';
const initialState = {
  staffUser: [],
};

export const getStaffUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getStaffUser:
      let obj = Object.assign({}, state, { staffUser: action.payload });
      console.log('staff user', obj);
      return obj;
    default:
      return state;
  }
};
