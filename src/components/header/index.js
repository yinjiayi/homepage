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

        //1.0 浏览器语言不是中文的切换到英文版本展示
        if(window.navigator && window.navigator.language){
            if(window.navigator.language !== "zh-CN"){
                this.switchFlag('en')
            }
        }
       
       titleChange();
       setTimeout(()=>{
           let hashopl = window.location.hash.split("#/");         
           if(hashopl[1] === ""){
               window.history.replaceState('','',window.location.pathname)
           }
       },5) 

   }

   gosummer2020(){
       window.open("https://isrc.iscas.ac.cn/summer2020/")
   }

    

    


    render(){
        let showdata = this.state.data[this.state.chiFlag]
        let link = this.state.data.link
        
        return(         
            <div className={["header", this.state.chiFlag].join(" ")}>
                <div className="content1200 headerContent">
                     <NavLink to="/homepage">
                        <div className="osscHeaderLogo"></div>
                    </NavLink>
                    
                    <div className="headerList">
                    <div className="headerTabWrapper">
                        
                        {
                            showdata.linkdata.map((ele,index)=>{
                                const linkurl = link[index]
                                return (
                                   
                                    <NavLink key={index} to={'/'+ linkurl} >
                                        <div className={["headerTabItem","headerNav", linkurl].join(" ")}>
                                            <span>{ele.name}</span>
                                        </div>                                
                                    </NavLink>
                                  
                                 
                                    
                                )
                            })
                        }
                        <div onClick={()=>{this.gosummer2020()}}className={["headerTabItem","headerNav"].join(" ")} key="summer2020">
                                        <span>{showdata.summer2020}</span>
                        </div> 
                        

                    </div>
                   
                    <div className="headerChiEn headerTabItem" >
                            <div className="headerChi" onClick={()=>{this.switchFlag('chi')}}>中文</div>
                            <div className="headerEn" onClick={()=>{this.switchFlag('en')}}>ENG</div>
                    </div>
                    <div className="headerMobileIcon" onClick={()=>this.headerlist(true)}>
                    </div>

                    </div>
                    

                    <div className={["headerMobileList" ,this.state.moblieListFlag?"displayblock":""].join(" ")}>
                        <div className="headerClose" onClick={()=>this.headerlist(false)}></div>
                        {
                            showdata.linkdata.map((item,index)=>{
                            const linkurl = link[index]
                            return (                            
                                <div key={index}
                                    onClick={()=>this.getLink(linkurl)}
                                    className={["osscListItem",linkurl].join(" ")}>                                
                                    <span> {item.name}</span>                
                                </div>
                              
                            )
                                
                            })
                        }
                        <div
                            onClick={()=>this.gosummer2020()}
                            className={["osscListItem"].join(" ")}>                                
                            <span>{showdata.summer2020}</span>                
                        </div>
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