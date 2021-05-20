import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import './pages/homepage/pad.less';
import './pages/homepage/mobile.less';
import './pages/homepage/common.less';
import './pages/index/index.less';
import IRouter from './router.js';

ReactDOM.render(
  <React.StrictMode>
    <IRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

