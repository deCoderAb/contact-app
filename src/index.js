import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import App1 from './App1';
// import IG from './IG';
// import store from './store';
import store from './redux/store';
import {Provider} from 'react-redux';
import AppC from './contact-app/AppC';
import AppShop from './FakeShop/AppShop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppC />
    {/* <Provider store={store}>
      <App1 />
    </Provider> */}
    {/* <IG /> */}
    {/* <Provider store={store}>
      <AppShop />
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
