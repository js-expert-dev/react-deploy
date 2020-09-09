const pro_url = 'https://smart-ordering-bk.herokuapp.com';
const dev_url = 'http://localhost:3000';
export const url = dev_url;

export const api = {
  login: '',
  base_url: url + '/auth/signin',
};

export const types = {
  loggedIn: 'LOGGED_IN',
  user: 'USER',
  token: 'TOKEN',
  getPaidBills: 'GET_PAID_BILLS',
  getPendingBills: 'GET_PENDING_BILLS',
  getAllBills: 'GET_ALL_BILLS',
  getStaffUser: 'GET_STAFF_USER',
  deleteStaffUser: 'DELETE_STAFF_USER',
};

export const apiCategory = {
  base_url: url + '/category',
};

export const categoryTypes = {};

export const apiTable = {
  base_url: url + '/table',
};

export const apiItems = {
  base_url: url + '/item',
};

export const apiAddUser = {
  base_url: url + '/user',
};

export const apiGetUser = {
  base_url: url + '/user',
};
export const apiDelUser = {
  base_url: url + '/user/',
};

export const apiUpdateUser = {
  base_url: url + '/user/',
};

export const apiGetPaidBills = {
  base_url: url + '/bill?status=paid',
};
export const apiGetPendingBills = {
  base_url: url + '/bill?status=pending',
};
export const apiGetAllBills = {
  base_url: url + '/bill?status=all',
};

export const apiUpdateBillStatus = {
  base_url: url + '/bill/',
};
