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
import data from "./../../data/help.json"
class Help extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           data
           
       }
    }

 


    render(){
        let showdata = this.state.data[this.props.chiFlag]
        return(         
            <div className="Help">
                <div className="HelpBanner">
                    <div className="HelpBannerText">
                        <div>帮助</div>
                        <div>Help</div>
                    </div>

                </div>
                <div className="HelpResourceLink content1200">
                        <div className="helptitle">
                            <div className="indexOneTitle">
                                <span>{showdata.list[0]}</span>
                            </div>
                            <div className="helpBlueText"><span className="underline">{showdata.list[1]}</span>--></div>
                        </div>

                        <div className="helptitle">
                            <div className="indexOneTitle">
                                <span>{showdata.list[2]}</span>
                            </div>
                            <div className="helpEmail mail">
                                <span>{showdata.list[3]}:<a href="mailto:summer@iscas.ac.cn">summer@iscas.ac.cn</a></span>
                            </div>
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


export default connect(mapStateToProps)(Help)