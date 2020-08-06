import { types } from '../../../../../constants/index';

const initialState = {
  paidBills: [],
  pendingBills: [],
  allBills: [],
};
//get all bill reducer
export const getAllBillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getAllBills:
      let obj = Object.assign({}, state, { allBills: action.payload });
      console.log('get paid bills', obj);
      return obj;
    default:
      return state;
  }
};
// get paid bill reducer
export const getPaidBillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPaidBills:
      let obj = Object.assign({}, state, { paidBills: action.payload });
      console.log('get paid bills', obj);
      return obj;
    default:
      return state;
  }
};
//get pending bill reducer
export const getPendingBillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPendingBills:
      let obj = Object.assign({}, state, { pendingBills: action.payload });
      console.log('get paid bills', obj);
      return obj;
    default:
      return state;
  }
};
