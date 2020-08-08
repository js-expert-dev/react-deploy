import {
  apiAddUser,
  apiUpdateUser,
  types,
  apiGetUser,
} from '../../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';
//get staff user
export const actionGetStaffUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios
    .get(apiGetUser.base_url, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({ type: types.getStaffUser, payload: res.data.data });
    })
    .catch((error) => toast.error('error', error));
};

//add staff user
export const addStaffUser = (data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .post(apiAddUser.base_url, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      toast.success('Staff user is added successfully.');
      return res;
    })
    .catch((error) => toast.error('error', error));
};
// update staff user
export const updateStaffUser = (id, data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .put(apiUpdateUser.base_url + id, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      toast.success('Staff user is updated successfully.');
      return res;
    })
    .catch((error) => toast.error('error', error));
};
