import {
  apiGetPaidBills,
  types,
  apiGetPendingBills,
  apiGetAllBills,
  apiUpdateBillStatus,
} from '../../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';
// get paid bills
export const actionGetPaidBills = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios
    .get(apiGetPaidBills.base_url, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({ type: types.getPaidBills, payload: res.data.data });
    })
    .catch((error) => toast.error('error', error));
};
// get pending bills
export const actionGetPendingBills = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios
    .get(apiGetPendingBills.base_url, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({ type: types.getPendingBills, payload: res.data.data });
    })
    .catch((error) => toast.error('error', error));
};
// get all bills
export const actionGetAlldBills = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios
    .get(apiGetAllBills.base_url, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      dispatch({ type: types.getAllBills, payload: res.data.data });
    })
    .catch((error) => toast.error('error', error));
};
// update bill status
export const updateBillStatus = (id, data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .put(apiUpdateBillStatus.base_url + id, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => {
      toast.success('Bill status is updated successfully.');
      return res;
    })
    .catch((error) => toast.error('error', error));
};
