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
import LiveModal from '../../components/livemodal/index.js'
import data from '../../data/liveshow.json';
export default class Liveshow extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           
       }
    }

 


    render(){
       
        return(         
            <div className="Liveshow">
                <div className="LiveshowBanner">

                </div>
                <div className="LiveShowWrapper">
                    <div className="LiveShowContent content1200">
                        <div className="LiveShowContentTitle">即将直播</div> 
                        {
                            data.speechlist.map((item,index)=>{
                                return (
                                    item.url?"":
                                    <LiveModal 
                                    key = {index}
                                    item ={item}/>

                                )
                            })
                        } 
                    
                    </div>

                </div>

            </div>
         )
       
        
        
    }
}

