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

import React from 'react'
import './index.less';
import {withRouter} from 'react-router-dom';
import data from './../../data/org.json';
import { connect } from 'react-redux';
class Org extends React.Component{
    constructor(props){
       super(props)
       this.state ={
            data,
            tabflag:"orglist"
       }
    }

    componentDidMount(){    
        var hashurl = this.props.history.location.pathname.split("/")[2];
        if(hashurl === "orgdetail"){
            hashurl = "orglist"
        }
        this.setState({
            tabflag:hashurl
        })
    }

    handleClick(hashurl){
        this.setState({
            tabflag:hashurl
        })
        console.log(this.props)
        this.props.history.push('/org/'+hashurl)
        
    }

 


    render(){
       const showdata = this.state.data[this.props.chiFlag]
        return(         
            <div className="Org">
                <div className="OrgBanner"></div>
                <div className="OrgTab">
                    {
                        showdata.tab.map((item,index)=>{
                            return(
                                <div  
                                    key={index} 
                                    onClick={()=>this.handleClick(item.hash)} 
                                    className={["OrgTabItem",this.state.tabflag === item.hash ? "activeTab":""].join(" ")}> {item.name}</div>
                            )
                        })
                    }
                    
                   
                </div>
                <div className="OrgWrapper content1200">
                 {this.props.children}
                </div>
               
            </div>
         )
       
        
        
    }
}


const mapStateToProps = (state)=>{
    
    return {
        chiFlag:state.chiFlag
    }
 }


export default connect(mapStateToProps)(withRouter(Org))