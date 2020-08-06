import { Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
import ItemsDetails from './Items/ItemsDetails';
import AddItem from './Items/AddItem';
import CategoryDetails from './Cataegories/CategoryDetails';
import AddCategory from './Cataegories/AddCategory';
import TableDetails from './Table/TableDetails';
import AddTable from './Table/AddTable';
import StaffDetails from './Staff/StaffDetails';
import AddStaff from './Staff/AddStaff';
import AllOrders from './Order/AllOrders';
import PendingOrder from './Order/PendingOrder';
import VerifiedOrder from './Order/VerifiedOrder.js';
import PendingBills from './Bill/PendingBills';
import InProgressOrder from './Order/InProgress';
import CompletedOrder from './Order/Completed';
import PaidBills from './Bill/PaidBills';
import AllBills from './Bill/AllBills';

export const AdminRoutes = (props) => {
  let { match } = props;
  return (
    <>
      <Route path={`${match.path}/dashboard`} component={Dashboard} />
      <Route exact path={`${match.path}/`} component={Dashboard} />
      <Route exact path={`${match.path}/items`} component={ItemsDetails} />
      <Route path={`${match.path}/items/add`} component={AddItem} />
      <Route
        exact
        path={`${match.path}/category`}
        component={CategoryDetails}
      />
      <Route path={`${match.path}/category/add`} component={AddCategory} />
      <Route exact path={`${match.path}/table`} component={TableDetails} />
      <Route path={`${match.path}/table/add`} component={AddTable} />

      <Route exact path={`${match.path}/user`} component={StaffDetails} />
      <Route path={`${match.path}/user/add`} component={AddStaff} />

      <Route exact path={`${match.path}/orders`} component={AllOrders} />
      <Route path={`${match.path}/orders/approved`} component={VerifiedOrder} />
      <Route path={`${match.path}/orders/pending`} component={PendingOrder} />
      <Route
        path={`${match.path}/orders/progress`}
        component={InProgressOrder}
      />
      <Route
        path={`${match.path}/orders/Complete`}
        component={CompletedOrder}
      />
      <Route exact path={`${match.path}/bills`} component={AllBills} />
      <Route path={`${match.path}/bills/paid`} component={PaidBills} />
      <Route path={`${match.path}/bills/pending`} component={PendingBills} />
    </>
  );
};
