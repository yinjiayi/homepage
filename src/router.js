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


export default class IRouter extends React.Component{
    constructor(props){
        super(props);
        this.getchiflag = this.getchiflag.bind(this)
        this.state = {
            chiflag: 'chi'
        }  

        
    }

    componentDidMount(){
       
    }
   
    //子组件调用父组件的方法传值
    getchiflag(val){
        
        this.setState({
            chiflag: val
        });
    }

    render(){
        return(
            <Router >
                <App>
                    
                    <Route path="/" render={()=>
                        <Wrapper getchiflag={this.getchiflag}>
                            <Switch >
                                
                                <Route path="/index"component={Index} exact></Route>                                                                                     
                                <Route path="/" render={()=>{return <Index flag={this.state.chiflag}/>}} /> 
                            </Switch>
                        </Wrapper>
                    }/>
                </App>
            </Router>
        );
    }
}