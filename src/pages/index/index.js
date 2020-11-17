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
import {endata,data} from './data.js'

export default class Index extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        data,
        endata,
        showdata:data,   
        url:"https://isrc.iscas.ac.cn/summer2020/",
       }
    }
    gourl(url){
        window.open(url)
    }

    // componentDidMount(){
    //    console.log(this)
    // }

    componentWillReceiveProps(nextProps){
       
      if(nextProps.flag){
        console.log(nextProps)
         if(nextProps.flag === this.state.showdata.flag){
             return 0;
         }
        
          if(nextProps.flag === "chi"){

              this.setState({
                showdata:this.state.data
              })
          }else{
            this.setState({
                showdata:this.state.endata
            })
          }
      }
    }
    




    


    render(){
       
        return(         
            <div className={["index" , this.props.flag].join(" ")}>
                
                <div className="indexBanner">
                   <div className="content1200 indexBannerWrapper">
                   <div className="indexText"></div>
                   <div className="indexButton">
                <span className="indexButtonText" onClick={()=>{this.gourl(this.state.url)}}>{this.state.showdata.banner.textone}</span>
                   </div>
                   </div>
                </div>
                <div className="indexOne">
                    <div className="content1200">
                    <div className="indexOneTitle">
                    <span className="indexOneTitleText">{this.state.showdata.indexOne.title}</span>
                    </div>
                    <div className="indexOneList">
                        {
                            this.state.showdata.time.map((item,index)=>{
                                return (
                                    <div className={["indexOneListLine", index%2 === 0 ? 'left':'right'].join(" ")}  key={index}>
                                        <div className="indexOneListItem" >
                                            <div className="indexOneListItemTitle">{item.title}</div>
                                            <div className="indexOneListItemTime">{item.time}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                   </div>
                </div>

                <div className="indexTwo">
                    <div className="content1200">
                        <div className="indexOneTitle">
                    <span className="indexOneTitleText">{this.state.showdata.indexTwo.title}</span>
                        </div>
                        <div className="indexTwoWrapper">
                    <div className="indexTwoText">{this.state.showdata.indexTwo.text}</div>
                            <div className="indexTwoBlue">
                                <span>{this.state.showdata.indexTwo.text2} <a href="mailto:summer@iscas.ac.cn">summer@iscas.ac.cn</a></span>
                            </div>
                        </div>
                    </div>
                   
                    

                </div>

            </div>
         )
       
        
        
    }
}
