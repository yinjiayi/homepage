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
import { connect } from 'react-redux'


class OrgTip extends React.Component{
    constructor(props){
       super(props)
       this.state ={      
       }
       this.goOrgDetail = this.goOrgDetail.bind(this)
    }

    goOrgDetail(){
        this.props.setOrgDetail(this.props.item)
        window.location.hash = "/org/orgdetail/"+this.props.item.anchor
    }

   
    render(){
        const {closeModal,orgflag,orgDetailflag} =this.props;
        return(         
            <div className={["OrgListItemTip",orgDetailflag,orgflag === this.props.item.anchor?"show":"hide"].join(" ")}>
                <div className="triangle"></div>
                <div className="OrgTipItemContent">
                    <div className="OrgTipClose" onClick={closeModal}></div>
                    <div className="OrgTipTitle">{this.props.item.title}</div>
                    <div className="OrgTipFullDesc">{this.props.item.full_des}</div>
                    <div className="Orgdivider"></div>
                    <div className="OrgTipWebSiteUrl OrgTipArr">
                        {this.props.showdata.websiteurl}
                        <a href={this.props.item.url}  target="_blank" rel="noopener noreferrer">
                            {this.props.item.url}
                        </a>
                    </div>
                    <div className="OrgTipMailList OrgTipArr">
                        {this.props.showdata.maillist}
                        <a href={"mailto:"+this.props.item.mail_list}  target="_blank" rel="noopener noreferrer">
                            {this.props.item.mail_list}
                        </a>
                    </div>
                    <div className="OrgTipMail OrgTipArr">
                        {this.props.showdata.email}
                        <a href={"mailto:"+this.props.item.email}  target="_blank" rel="noopener noreferrer">
                            {this.props.item.email}
                        </a>
                    </div>
                    <div className="OrgTipsummer2020pro OrgTipArr">
                        {this.props.showdata.summer2020pro}
                        <a href={this.props.item.project_url}  target="_blank" rel="noopener noreferrer">
                            {this.props.item.project_url}
                        </a>
                    </div>
                    <div className="OrgTipDomain OrgTipArr">{this.props.showdata.domain}</div>
                    <div className="OrgTipDomainTag">
                        {
                            this.props.item.domain_tag.map((tag,indext)=>{
                                return (
                                    <span className="Domain tagItem" key={indext}>{tag}</span>
                                )
                            })
                        }
                    </div>
                    <div className="OrgTipDomain OrgTipArr">{this.props.showdata.tech}</div>
                    <div className="OrgTipTechTag">
                        {
                            this.props.item.tech_tag.map((tag,indext)=>{
                                return (
                                    <span className="Tech tagItem" key={indext}>{tag}</span>
                                )
                            })
                        }
                    </div>
                    <div className="OrgTipButton" 
                    onClick={()=>{this.goOrgDetail()}}
                    >{this.props.showdata.button}</div>

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

const mapDispatchToProps = dispatch => {
    return {
        setOrgDetail:(data)=>{
            dispatch({
                type:'setOrgDetail',
                payload:data
            })
        },
    }
}
 
 export default connect(mapStateToProps,mapDispatchToProps)(OrgTip)