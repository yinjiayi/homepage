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
import { Pagination } from 'antd';
const { Search } = Input;

class ProjectlistN extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           showdata:[],       
           datall: this.getData(),
           datastock:[],
            
        
       }
    }

   



    componentDidMount(){       
      
        this.setState({
            datastock:this.state.datall
        })
        console.log(data)
    }


    getData(){
        var prodata = []
        data.orgList.map((item)=>{
            let _arr = []         
            item.project_list.map((items) => {           
                _arr.push(Object.assign({},items,{orgtitle: item.title}))            
            })
            prodata = prodata.concat(_arr)         
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
                        onSearch={value => this.filterItem(value)}
                    />
                    <div className="ProjectListRank">
                        {/* <span className="ProjectListRankItem ">{showdata.order[0]}</span> */}
                        <span className="ProjectListRankItem">{showdata.order[1]}</span>
                    </div>           
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

export default connect(mapStateToProps)(ProjectlistN)