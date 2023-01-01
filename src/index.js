import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import { Provider } from 'react-redux';
import reducer from "./reducers"
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store =createStore(reducer, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();




