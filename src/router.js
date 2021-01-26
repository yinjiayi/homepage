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

import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Wrapper from './wrapper.js';
import Index from './pages/index/index.js';
import HomePage from './pages/homepage/index.js';
import Help from './pages/help/index.js';
import Howitworks from './pages/howitworks/index.js';
import Apply from './pages/apply/index.js';
export default class IRouter extends React.Component{
    constructor(props){
        super(props);
             
    }


   

    render(){
        return(
            <Router >
                <App>
                    
                    <Route path="/" render={()=>
                        <Wrapper>
                            <Switch >
                                
                                <Route path="/homepage"component={HomePage} ></Route> 
                                <Route path="/help"component={Help} ></Route>
                                <Route path="/howitworks"component={Howitworks} ></Route> 
                                <Route path="/apply"component={Apply} ></Route>
                                <Route path="/index"component={Index} ></Route>                                                                                     
                                <Route path="/" component={HomePage} /> 
                            </Switch>
                        </Wrapper>
                    }/>
                </App>
            </Router>
        );
    }
}