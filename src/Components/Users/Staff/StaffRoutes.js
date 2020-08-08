import React, { Component } from 'react';
import AllOrders from './Order/AllOrders';
import PendingOrder from './Order/PendingOrder';
import VerifiedOrder from './Order/VerifiedOrder';
import CompletedOrder from './Order/Completed';
import InProgressOrder from './Order/InProgress';
import AllBills from './Bill/AllBills';
import PendingBills from './Bill/PendingBills';
import PaidBills from './Bill/paidBills';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
export const StaffRoutes = (props) => {
  let { match } = props;
  debugger;
  return (
    <>
      <Route path={`${match.path}/dashboard`} component={Dashboard} />
      <Route exact path={`${match.path}/`} component={Dashboard} />
      <Route exact path={`${match.path}/order`} component={AllOrders} />
      <Route
        path={`${match.path}/order/progress`}
        component={InProgressOrder}
      />
      <Route path={`${match.path}/order/Complete`} component={CompletedOrder} />
      <Route path={`${match.path}/order/approved`} component={VerifiedOrder} />
      <Route path={`${match.path}/order/pending`} component={PendingOrder} />
      <Route exact path={`${match.path}/bill`} component={AllBills} />
      <Route path={`${match.path}/bill/pending`} component={PendingBills} />
      <Route path={`${match.path}/bill/paid`} component={PaidBills} />
    </>
  );
};
