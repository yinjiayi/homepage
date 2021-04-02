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
import data from '../../data/org.json';
import orglist from '../../data/orglist2021.json';
import { connect } from 'react-redux';
import OrgTip from '../../components/OrgTip/index.js';
import {getSplit} from "../../util/url.js";
class Orglist extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           data,
           orgflag:"",
           
       }

       this.closeModall  = this.closeModall.bind(this);

       
    }

    openOrgModal(anchor){
        let flag = anchor;
        if(anchor === this.state.orgflag){
            flag=""
        }
        this.setState({
            orgflag:flag
        })
    }

    closeModall(){
        
        this.setState({
            orgflag:""
        })
    }



   

 


    render(){
        let showdata = this.state.data[this.props.chiFlag]
        return(         
            <div className="Orglist">         
                <div className="OrglistBanner">
                    {showdata.rank}
                </div>
                <div className="OrgListWrapper">
                    {
                        orglist.map((item,index)=>{
                            const iconUrl = require('./../../img/organisation/'+item.img).default;
                            return(
                                <div className="OrgListItem" key={index} >
                                    <div className="OrgListItemModal" onClick={()=>{this.openOrgModal(item.anchor)}}>
                                        <div className="OrgListItemModalImage" style={{backgroundImage:"url("+iconUrl + ")"}}></div>
                                        <div className="OrgListItemModalTitle">
                                            {
                                                getSplit(item.title,this.props.chiFlag)
                                            }
                                        </div>
                                        <div className="OrgListItemModalDesc">
                                            {  getSplit(item.description,this.props.chiFlag)}
                                        </div>
                                    </div>
                                    <OrgTip 
                                        item={item} 
                                        showdata={showdata} 
                                        orgflag={this.state.orgflag} 
                                        closeModal={this.closeModall}
                                    />

                                </div>
                            )
                        })
                    }

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




export default connect(mapStateToProps)(Orglist)