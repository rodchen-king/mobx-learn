import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userStore from './stores/userStore';
import { Provider } from "mobx-react";
// import { useStrict } from "mobx";

const stores = {
  userStore
}

// useStrict(true);

// For easier debugging
window._____APP_STATE_____ = stores;
debugger
ReactDOM.render(

    <Provider {...stores}> 
      <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
