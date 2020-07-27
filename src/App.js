import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {RootRoute} from "./RootRoute";
import {ToastContainer} from "react-toastify";
import store from './store';
import {Provider} from 'react-redux';
import {PromiseLoader} from "./Components/PromiseLoader";


class App extends Component {
    
  
  
  render(){
  return(
    <Provider store={store}>
            <PromiseLoader/>
            <ToastContainer position="bottom-right"/>
            <Route path="/" component={RootRoute}/>
    </Provider>
  );
  }   
}

export default App;