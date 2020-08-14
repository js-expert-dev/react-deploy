export const api = {
  login: '',
  base_url: 'http://localhost:3000/auth/signin',
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
  base_url: 'http://localhost:3000/category',
};

export const categoryTypes = {};

export const apiTable = {
  base_url: 'http://localhost:3000/table',
};

export const apiItems = {
  base_url: 'http://localhost:3000/item',
};

export const apiAddUser = {
  base_url: 'http://localhost:3000/user',
};

export const apiGetUser = {
  base_url: 'http://localhost:3000/user',
};
export const apiDelUser = {
  base_url: 'http://localhost:3000/user/',
};

export const apiUpdateUser = {
  base_url: 'http://localhost:3000/user/',
};

export const apiGetPaidBills = {
  base_url: 'http://localhost:3000/bill?status=paid',
};
export const apiGetPendingBills = {
  base_url: 'http://localhost:3000/bill?status=pending',
};
export const apiGetAllBills = {
  base_url: 'http://localhost:3000/bill?status=all',
};

export const apiUpdateBillStatus = {
  base_url: 'http://localhost:3000/bill/',
};
