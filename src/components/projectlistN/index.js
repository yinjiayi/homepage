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
import { Input } from 'antd';
import proData from '../../data/proList.json';
import projectlist from '../../data/projectlist.json';
import { Pagination } from 'antd';
import {getSplit,gohash,getSupportLanguage} from "../../util/url.js";
const { Search } = Input;

class ProjectlistN extends React.Component{
    constructor(props){
       super(props)
       this.state ={   
           page:1,
           pagesize:40,
           datall: proData,        // 显示的project所有数据
           searchdatastock:[],      
           datastock:proData,      // project 所有数据
           projectlistdata:[],     // 单页显示的project数据
           degreeselect:"all",
           langSelect:"all",
           techSelect:"all",
           areaSelect:"all"
       }
       this.itemRender = this.itemRender.bind(this)
    }

   



    componentDidMount(){         
        this.getData()   
    }

    getPageData(page){
        this.setState({
            page:page,
            projectlistdata:this.state.datall.slice(this.state.pagesize*(page-1),this.state.pagesize*page),       
        })  
    }

    filterItem(value){  
        this.setState({ 
            degreeselect:"all"           
        })
        if(value){
            var showdataTemp = []
            this.state.datall.map((item)=>{
                if(item.name.toString().includes(value)||
                item.label.includes(value)){
                    showdataTemp.push(item)
                }
                return 0;
            })
            
            this.setState({
                datall:showdataTemp,
                searchdatastock:showdataTemp,
                page:1,
                
            })
        }else{
           
            this.setState({
                datall:this.state.datastock,  
                searchdatastock:[], 
                degreeselect:"all"           
            })

        }       
        setTimeout(()=>{
            this.getPageData(1)
        },100)
        
        
        return 0;
    }


    getData(){
        // var prodata = []
        // var domain_tag = []
        // var tech_tag = []
        // data.map((item)=>{
        //     let _arr = []    
        //     domain_tag = domain_tag.concat(item.domain_tag)  
        //     tech_tag = tech_tag.concat(item.tech_tag)   
        //     item.project_list.map((items) => {           
        //         _arr.push(Object.assign({},items,
        //             {orgtitle: item.title,
        //             anchor:item.anchor,
        //             prourl:item.project_url}))            
        //     })
        //     prodata = prodata.concat(_arr)         
        // })
        this.setState({
            projectlistdata:this.state.datall.slice(0,this.state.pagesize),
        })
        
    }

    itemRender(current, type, originalElement) {
        if(this.props.chiFlag === "chi"){
            if (type === 'prev') {
                return <a>上一页</a>;
            }
            if (type === 'next') {
            return <a>下一页</a>;
            }

        }else{
            if (type === 'prev') {
                return <a>Previous</a>;
              }
              if (type === 'next') {
                return <a>Next</a>;
              }
        }
        
        return originalElement;
      }

    onChange = page => {
        this.getPageData(page)
    };

    gohashlink(orgtitle,proid){
        let url = "/org/orgdetail/"+orgtitle
        if(proid){
            url += "/proid"+proid
        }
        gohash(url)
        this.props.setOrgTabFlag("orglist")
    }

    goLink(link){
        window.open(link)
    }

    filterTag(tag){ 
        let filterdata = [] 
        if(this.state.searchdatastock.length>0){
            if(tag === "all"){
                this.setState({
                    datall:this.state.searchdatastock,              
                })
            }else{
                const degree = this.getSelectDToChi(tag)
                filterdata = this.state.searchdatastock.filter(item => item.difficulty === degree);
                this.setState({
                    datall:filterdata,              
                })
            }
        } else{
            if(tag === "all"){
                this.setState({
                    datall:this.state.datastock,              
                })
            }else{
                const degree = this.getSelectDToChi(tag)
                filterdata = this.state.datastock.filter(item => item.difficulty === degree);
                this.setState({
                    datall:filterdata,              
                })
            }
        }

        setTimeout(()=>{
            this.getPageData(1)
        },100)
    }
    setDegree(tag){
        const tagen = this.getSelectM(tag)
        this.setState({
            degreeselect:tagen
        })
        this.filterTag(tagen)

    }

    getSelectM(item){
        return {
            "全部":"all",
            "低":"low",
            "中":"medium",
            "高":"high",
            "All":"all",
            "Low":"low",
            "Medium":"medium",
            "High":"high"
        }[item]||"all"
    }

    getDegreeBy(degree){
        if(this.props.chiFlag === "chi"){
            return degree
        }
        return {
            "高":"High",
            "中":"Medium",
            "低":"Low"
        }[degree]||"Low"
    }

    getSelectDToChi(tagen){
        return {
            "low":"低",
            "medium":"中",
            "high":"高"
        }[tagen]||"全部"

    }

    // TabSelectOrder(flag){
    //     this.setState({
    //         orderSelect:flag
    //     })
    // }





 


    render(){
        let showdata = projectlist[this.props.chiFlag]
        let {projectlistdata,degreeselect,datall} = this.state
        let datalllength = datall.length
        return(         
            <div className="Projectlist">
               <div className="ProjectListBanner">
                <Search                      
                        placeholder={showdata.searchPlaceholder}
                        allowClear
                        size="large"
                        onSearch={value => this.filterItem(value)}
                    />
                    {/* 功能未上线 */}
                    {/* <div className="ProjectListRank">
                        <span 
                            onClick={()=>{this.TabSelectOrder("community")}}
                            className={["ProjectListRankItem",this.state.orderSelect === "community"?"selectOrder":""].join(" ")}>
                                {showdata.order[0]}</span>
                        <span 
                            onClick={()=>{this.TabSelectOrder("proid")}}
                            className={["ProjectListRankItem",this.state.orderSelect === "proid"?"selectOrder":""].join(" ")}>
                                {showdata.order[1]}</span>
                    </div>            
                    */}
               </div> 
               <div className="projectListWrapper content1200">
                    <div className="ProjectListPageState">
                        <div className="ProjectListPage">
                            <span className="ProjectListPageItemOne">{showdata.pronum[0]} {datalllength} {showdata.pronum[1]}</span>
                            <span className="ProjectListPageItem">
                                {showdata.pagenum[0]}{this.state.page} {showdata.pagenum[1]} 
                                <span className="ProjectListPageItemSum">{showdata.pagesum[0]} {Math.ceil(datalllength/this.state.pagesize)} {showdata.pagesum[1]}</span>
                            </span>
                        </div>
                        {/* <div className="ProjectListApplyState">{showdata.applyState[2]}</div> */}
                    </div>
                    <div className="ProjectListSelect">
                        <div className="ProjectListSelectItem Degree">
                            <span className="ProjectListSelectItemTitle" >{showdata.proDi}</span>
                            {
                                showdata.prodegree.map((item,index)=>{
                                    return (
                                        <span 
                                        key={index} 
                                        onClick={()=>{this.setDegree(item)}}
                                        className={["ProjectListSelectItemContent",this.getSelectM(item) === degreeselect ? "ProjectListSelectTagDe":""].join(" ")}>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="ProjectListLCWrapper">
                    <div className="ProjectListLC">
                        <div className="ProjectListLCLine Header">
                            <span className="ProjectListLCID ">{showdata.projectNumber}</span>
                            <span className="ProjectListLCName">{showdata.projectName}</span>
                            <span className="ProjectListLCCommunity">{showdata.projectCommunity}</span>
                            <span className="ProjectListLCLang">{showdata.language}</span>
                            <span className="ProjectListLCDegree">{showdata.proDegree}</span>
                            <span className="ProjectListLCOperation">{showdata.operation}</span>
                        </div>
                       

                        {
                          
                                         
                                projectlistdata.map((item,index)=>{
                                    return(
                                        <div className="ProjectListLCLine Item" key={index}>
                                            <span className="ProjectListLCID ">{item.label}</span>
                                            <span className="ProjectListLCName" onClick={()=>{this.gohashlink(item.organchor,item.label)}}>
                                                
                                                {getSplit( item.name,this.props.chiFlag)}
                                            </span>
                                            <span className="ProjectListLCCommunity" onClick={()=>{this.gohashlink(item.organchor)}}>
                                                {getSplit( item.orgname,this.props.chiFlag)}</span>
                                            <span className="ProjectListLCLang">{getSupportLanguage(item.spl)}</span>
                                            <span className="ProjectListLCDegree">{this.getDegreeBy(item.difficulty)}</span>
                                            <span className="ProjectListLCOperation Item">
                                                
                                                <span className="PLOperationButton prodetail" onClick={()=>{this.gohashlink(item.organchor,item.label)}}>{showdata.operationbutton[0]}</span>
                                                <span className="PLOperationButton proapply">{showdata.operationbutton[1]}</span>
                                            </span>
                                        </div>
                                    )
    
                                })
                          
                            
                        }
                        
                      

                    </div>
                    </div>
                    <Pagination 
                    current={this.state.page}
                    defaultPageSize ={this.state.pagesize} 
                    total={datalllength} 
                    itemRender={this.itemRender}
                    onChange={this.onChange}
                    showSizeChanger={false}
                    /> 

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
        setOrgTabFlag:(data)=>{
            dispatch({
                type:'setOrgTabFlag',
                payload:data
            })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ProjectlistN)