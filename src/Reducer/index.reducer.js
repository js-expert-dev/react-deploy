import { combineReducers } from 'redux';
// import admin from './admin';
// import user from './user';
import { loginReducer } from '../Components/Login/reducer';
import { userReducer } from '../Components/Login/reducer';
import {
  getPaidBillsReducer,
  getAllBillsReducer,
  getPendingBillsReducer,
} from '../Components/Users/Admin/Bill/store/reducer';
import { getStaffUsersReducer } from '../Components/Users/Admin/Staff/Store/reducer';

export default combineReducers({
  loggedIn: loginReducer,
  user: userReducer,
  getPaidBillsReducer,
  getPendingBillsReducer,
  getAllBillsReducer,
  getStaffUsersReducer,
});
