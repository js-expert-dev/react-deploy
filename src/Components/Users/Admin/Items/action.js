import { apiItems } from '../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addItems = (data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .post(apiItems.base_url, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => toast.success('Item is added successfully.'))
    .catch((error) => toast.error('error', error));
};
