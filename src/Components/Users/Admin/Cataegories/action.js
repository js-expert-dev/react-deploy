import { apiCategory, categoryTypes } from '../../../../constants/index';
import axios from 'axios';
import { toast } from 'react-toastify';

export const addCategory = (data) => async (dispatch) => {
  const token = localStorage.getItem('token');

  const response = await axios
    .post(apiCategory.base_url, data, {
      headers: {
        'access-token': token,
      },
    })
    .then((res) => toast.success('Category is added successfully.'))
    .catch((error) => toast.error('error', error));
};
