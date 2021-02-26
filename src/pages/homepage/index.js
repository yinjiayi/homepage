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
import data from "./../../data/homepage.json";
import { Carousel } from 'antd';
import {gourl} from "./../../util/url.js";
import logocoopdata from "./../../data/coorganizer.json"
class HomePage extends React.Component{
    constructor(props){
       super(props)
       this.state ={
            data
       }
    }
    goLogoLink(url){
        if(url){
            gourl(url)
        }
        
    }

    createLogo(){
        var logo=[];
        
        logocoopdata.cooper.map((item,index)=>{
            const iconUrl = require('./../../img/logo/'+item.img).default;
            logo.push(
                <div 
                key={index}
                onClick={()=>{this.goLogoLink(item.url)}}
                className={["homepagelogocoop",item.url?'':'cursordefault'].join(" ")}
                style={{backgroundImage:"url("+iconUrl + ")"}} >

                </div>
            )
        })
        return logo;
    }

    createIconBanner(text){
        var iconcontainer = []
        text.map((item,index)=>{
            const iconUrl = require('./../../img/index/icon'+index+'.jpg').default
            iconcontainer.push(
                <div className="homepageIconItem" key={index}>
                    
                    <div className="homepageIconItemImageWrapper">
                        <div 
                        className="homepageIconItemImage" 
                        style={{backgroundImage:"url("+iconUrl + ")"}} 
                        ></div>
                    </div>
                    {
                        item.map((sitem,sindex)=>{
                            return (
                                <div className="homepageIconItemText" key={sindex}>{sitem}</div>
                            )
                        })
                    }
                    
                </div>
            )
            return 0;
        })
        return iconcontainer
     
    }

 


    render(){
        let showdata = this.state.data[this.props.chiFlag]
        return(         
            <div className="homepage">
            <Carousel autoplay>
                <div className="homepageBanner One">
                    <div className="homepageText content1200">
                        { 
                            showdata.bannertext.map((item,index)=>{
                                return(
                                    <span className="homepageBannerLine" key={index} dangerouslySetInnerHTML={{ __html: item }}/>                              
                                )
                            })
                        }

                    </div>
                </div>
                <div className="homepageBanner Two">
                    <div className="homepageText content1200">
                        <div className="homepageTitle">{showdata.bannerTwo[0]}</div>
                        <div className="homepageTitleTime">{showdata.bannerTwo[1]}</div>
                        <div className="homepageTitleGuide">
                            <span className="homepageTiO" onClick={()=>gourl(this.state.data.communitylink)}>{showdata.bannerTwo[2]} </span>
                            <span className="homepageTiTw">{showdata.bannerTwo[3]}</span>
                        </div>
                    </div>

                </div>

                </Carousel>
                
                <div className="homepageWrapper">
                    <div className="content1200">
                        <div className="homepageIcon">
                            {
                                this.createIconBanner(showdata.icontext)
                            }
                        </div>
                        <div className="homepageLogo">
                            <div className="homepageLogoTitle">{showdata.logotitle[0]}</div>
                           
                            <div className="homepageLogoItemTitle">
                                {showdata.logotitle[1]}
                            </div>
                            <div className="homepageLogoItemList ">
                                <div className="homepageLogoImage Host"></div>
                                <div className="homepageLogoImage openeuler"></div>
                            </div>
                            <div className="homepageLogoItemTitle">
                                {showdata.logotitle[2]}
                            </div>
                            <div className="homepageLogoItemList ">
                                <div className="homepageLogoImage nanjing"></div>
                            </div>
                            <div className="homepageLogoItemTitle">
                                {showdata.logotitle[4]}
                            </div>
                            <div className="homepageLogoItemList Coop">
                                {this.createLogo()}
                            </div>
                           
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

 
 export default connect(mapStateToProps)(HomePage)