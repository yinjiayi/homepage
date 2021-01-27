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
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import data from './../../data/nav.json';
import {titleChange} from './../../util/url.js';
class Header extends React.Component{
    constructor(props){
       super(props)
       this.state ={         
            chiFlag:"chi",
            data,
            pageflag:"index",
            moblieListFlag:false,
       }
    }

   
    switchFlag(msg){
        msg === 'chi'?this.props.chiFlag_chi():this.props.chiFlag_en();
        this.setState({
            chiFlag:msg
        })
    }

    headerlist(flag){
        this.setState({
            moblieListFlag:flag
        })
    }

    getLink(title){
        window.location.hash = "/"+title
        this.headerlist(false)
    }

    
    componentDidMount(){
       
        titleChange();
       setTimeout(()=>{
           let hashopl = window.location.hash.split("#/");         
           if(hashopl[1] === ""){
               window.history.replaceState('','',window.location.pathname)
           }
       },5) 

   }

    

    


    render(){
        let showdata = this.state.data[this.state.chiFlag]
        let link = this.state.data.link
        return(         
            <div className={["header", this.state.chiFlag].join(" ")}>
                <div className="content1200 headerContent">
                     <NavLink to="/index">
                        <div className="osscHeaderLogo"></div>
                    </NavLink>
                    
                    <div className="headerList">
                    <div className="headerTabWrapper">
                        
                        {
                            showdata.map((ele,index)=>{
                                return (
                                    <NavLink key={index} to={'/'+link[index]} >
                                        <div className={["headerTabItem","headerNav",this.state.pageflag===link[index]?'left0':''].join(" ")} key={index}>
                                            <span>{ele.name}</span>
                                        </div>
                                      
                                    </NavLink>  
                                    
                                )
                            })
                        }
                        

                    </div>
                    <div className="headerMobileIcon" onClick={()=>this.headerlist(true)}>
                    </div>
                    <div className="headerChiEn headerTabItem" >
                            <div className="headerChi" onClick={()=>{this.switchFlag('chi')}}>中文</div>
                            <div className="headerEn" onClick={()=>{this.switchFlag('en')}}>ENG</div>
                    </div>

                    </div>
                    

                    <div className={["headerMobileList" ,this.state.moblieListFlag?"displayblock":""].join(" ")}>
                        <div className="headerClose" onClick={()=>this.headerlist(false)}></div>
                        {
                            showdata.map((item,index)=>{
                            return (                            
                                <div key={index}
                                    onClick={()=>this.getLink(link[index])}
                                    className={["osscListItem",this.state.pageflag===link[index]?'left0':''].join(" ")}>                                
                                    <span> {item.name}</span>                
                                </div>
                              
                            )
                                
                            })
                        }
                    </div>
                   

                </div>

            </div>
         )
       
        
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        chiFlag_chi:()=>{
            dispatch({
                type:'chiFlag_chi'
            })
        },
        chiFlag_en:()=>{
            dispatch({
                type:'chiFlag_en'
            })
        }
    }
}

export default connect(null,mapDispatchToProps)(Header)