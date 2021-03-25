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
import { connect } from 'react-redux';
import { Input, Space } from 'antd';
import data from '../../data/orglist.json';
import projectlist from '../../data/projectlist.json';
import ProjectModal from '../projectModal/index.js';
const { Search } = Input;

class Projectlist extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           showdata:[],
           page:1,
           datall:data.orgList[0].project_list
        
       }
    }

    onSearch(){

    }

    getData(){
        var prodata = []
        data.orgList.map((item)=>{
            let _arr = []
            item.project_list.map((items) => {
                _arr.push(Object.assign({},items,{orgtitle: item.title}))
            })
            prodata.concat(_arr)
        })
        return prodata
    }



 


    render(){
        let showdata = projectlist[this.props.chiFlag]
        
        return(         
            <div className="Projectlist">
               <div className="ProjectListBanner">
               <Search
                    
                    placeholder={showdata.searchPlaceholder}
                    allowClear
                    size="large"
                    onSearch={this.onSearch}
                />
                <div className="ProjectListRank">
                    <span className="ProjectListRankItem ">{showdata.order[0]}</span>
                    <span className="ProjectListRankItem">{showdata.order[1]}</span>
                </div>
               
               </div> 
               <div className="projectListWrapper">
                   {
                       this.state.datall.map((item,index)=>{
                           return (
                                <ProjectModal showdata={showdata} item={item} key={index}/>
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

export default connect(mapStateToProps)(Projectlist)