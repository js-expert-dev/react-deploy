import {
  apiAddUser,
  apiUpdateUser,
  types,
  apiGetUser,
  apiDelUser,
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
//delete staff user
export const actionDeleteStaffUser = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios
    .delete(apiDelUser.base_url + id, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({ type: types.deleteStaffUser, payload: res.data.data });
      return res;
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
