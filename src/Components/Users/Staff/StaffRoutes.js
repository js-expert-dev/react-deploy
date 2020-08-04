import React, { Component } from 'react';
import PendingOrder from './Order/PendingOrder';
import VerifiedOrder from './Order/VerifiedOrder.js';
import PendingBills from './Bill/PendingBills';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
export const StaffRoutes = (props) => {
  let { match } = props;
  debugger;
  return (
    <>
      <Route path={`${match.path}/dashboard`} component={Dashboard} />
      <Route exact path={`${match.path}/`} component={Dashboard} />
      <Route
        exact
        path={`${match.path}/order/approved`}
        component={VerifiedOrder}
      />
      <Route
        exact
        path={`${match.path}/order/pending`}
        component={PendingOrder}
      />
      <Route path={`${match.path}/bills/pending`} component={PendingBills} />
    </>
  );
};
