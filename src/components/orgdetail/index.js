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
import { connect } from 'react-redux';
import orglist from '../../data/orglist.json';
import {withRouter} from 'react-router-dom';
import OrgTip from '../OrgTip/index.js';
import prolistjson from '../../data/projectlist.json';
import ProjectModal from '../projectModal/index.js';
import { Pagination } from 'antd';

class OrgDetail extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           showdata:orglist.orgList[0],
           page:1, // 当前页
           pagesize:10, // 每页显示的个数
           showprojectlist:[]
       }
    }

    componentDidMount(){
        let showorg = this.props.orgdetail
        // 1.0 判断redux里是否有数据
        console.log(Object.keys(showorg).length === 0)
        if(Object.keys(showorg).length === 0){
             // 2.0 若无，则从orglist里搜索
             var hashurl = this.props.history.location.pathname.split("/")[3].toString();  

             for(let i=0,len=orglist.orgList.length;i<len;i++){
               
                 let item = orglist.orgList[i]
                 console.log(item)
                if(item.anchor === hashurl){
                    showorg = item
                    break       
                 }
             }
        }
        if(!showorg){
            this.props.history.push("/")
            return false
        }
        this.setState({
            showdata:showorg,
            showprojectlist:showorg.project_list.slice(0,this.state.pagesize)
        })
        console.log(this.state.showdata)   
    }

    goOrgList(){
        window.location.hash = "/org/orglist"
    }


    itemRender(current, type, originalElement) {
        if (type === 'prev') {
          return <a>上一页</a>;
        }
        if (type === 'next') {
          return <a>下一页</a>;
        }
        return originalElement;
      }

    onChange = page => {
        console.log(page);
        console.log(this.state.showdata);
        this.setState({
            page: page,
            showprojectlist:this.state.showdata.project_list.slice(this.state.pagesize*(page-1),this.state.pagesize*page)
        });
    };

 


    render(){
        let {chiFlag} = this.props
        let showtext = data[chiFlag]
        let protext = prolistjson[chiFlag]
        let showorgdata = this.state.showdata
        const projectlist = showorgdata.project_list
        const projectlistlen = projectlist.length
        return(         
            <div className="OrgDetail">   
                <div className="OrgDetailNavLink content1200">   
                    <span className="orgListNavBarItem orgClick" onClick={()=>{this.goOrgList()}}>社区列表</span>
                    <span className="orgListNavBarItem orgGrey"> &gt; 社区详情</span>              
                </div>
                <div className="OrgDetailWrapper">
                    <OrgTip 
                        item={showorgdata} 
                        showdata={showtext} 
                        orgDetailflag="orgdetail" 
                    />
                    <div className="OrgDetailState">
                        <div className="ProjectListPage">
                            <span className="ProjectListPageItemOne">{protext.pronum[0]} {projectlistlen} {protext.pronum[1]}</span>           
                        </div>
                        <div className="ProjectListApplyState">{protext.applyState[0]}</div>
                    </div>
                    <div className="projectListWrapper">
                        {
                            this.state.showprojectlist.map((item,index)=>{
                                return (
                                        <ProjectModal showdata={protext} item={item} key={index}/>
                                )
                            })
                        }
                    </div>

                    {
                        projectlistlen>10?
                        <Pagination 
                        defaultCurrent={this.state.page} 
                        defaultPageSize ={this.state.pagesize} 
                        total={projectlistlen} 
                        itemRender={this.itemRender}
                        onChange={this.onChange}
                        showSizeChanger={false}
                        />:""

                    }                     
                </div>         

            </div>
         )
       
        
        
    }
}

const mapStateToProps = (state)=>{
    
    return {
        orgdetail:state.orgdetail,
        chiFlag:state.chiFlag
    }
 }


export default connect(mapStateToProps)(withRouter(OrgDetail))