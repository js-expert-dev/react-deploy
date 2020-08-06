import { apiAddUser, apiUpdateUser } from '../../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';

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
