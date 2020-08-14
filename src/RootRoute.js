import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Login from './Components/Login/Login';
import Layout from './Components/layout/Layout';
import Forget from './Components/ForgetPassword/forget';
import ResetPassword from './Components/ForgetPassword/ResetPassword';

export const RootRoute = (props) => {
  const { match } = props;
  return (
    <>
      <Route exact path={`${match.url}`} component={Login} />
      <Route exact path={`${match.url}login`} component={Login} />
      <Route exact path={`${match.url}forget`} component={Forget} />
      <Route exact path={`${match.url}reset`} component={ResetPassword} />
      <PrivateRoute path={`${match.url}admin`} component={Layout} />
      <PrivateRoute path={`${match.url}staff`} component={Layout} />
    </>
  );
};
