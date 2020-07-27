import React from 'react';
import {Route} from 'react-router-dom';
import {PrivateRoute} from "./PrivateRoute";
import Login from './Components/Login/Login';
import Layout from  './Components/layout/Layout';


export const RootRoute = (props) => {

    const {match} = props;
    return (
        <>
            {/* <Route exact path={`${match.path}emailVerification`} component={AccountConfirmation}/> */}
            <Route exact path={`${match.url}`} component={Login}/>
            <Route exact path={`${match.url}login`} component={Login}/>

            <PrivateRoute path={`${match.url}admin`} component={Layout}/>
            {/* <PrivateRoute path={`${match.url}admin`} component={AdminRoute}/> */}
            {/* <PrivateRoute path={`${match.url}user`} component={UserRoute}/> */}
        </>
    );
}
