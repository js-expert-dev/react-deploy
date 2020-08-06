import { apiTable, categoryTypes } from '../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addTable = (data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .post(apiTable.base_url, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => toast.success('Table is added successfully.'))
    .catch((error) => toast.error('error', error));
};
