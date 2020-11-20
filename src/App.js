/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store/index.js';

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('service-worker.js').then(() => {
//       console.log('sw注册成功了');
//     }).catch(() => {
//       console.log('sw注册失败了');
//     });
//   });
// }
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <>
          {this.props.children}   
        </>
      </Provider>
    );
  }
}

export default App;