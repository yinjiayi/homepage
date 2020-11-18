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

class Footer extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           text:{
               chi:'版权所有 @开源软件供应链点亮计划-暑期2021 活动组委会',
               en:'Copyright @Open Source Promotion Plan - Summer 2021 Organizing Committee.'
           },
           
       }
    }

 


    render(){
       let showtext = this.state.text[this.props.chiFlag]
        return(         
            <div className="footer">
                <div className="content1200">
        <div className="footerWrapper">{showtext}</div>
                </div>

            </div>
         )
       
        
        
    }
}

const mapStateToProps = (state)=>{

     return state
  }
 
 export default connect(mapStateToProps)(Footer)