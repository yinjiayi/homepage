import studatas from '../../data/stunum.json'

const initState = {
    chiFlag:"chi", // chi|en
    orgdetail:{},  // 显示orgDetail数据
    prodetail:{},   // 显示ProjectDetail数据
    orgTabFlag:"orglist",  // orglist|projectlist
    pageflag:"index",
    studata:studatas      //定义接口获取的学生人数
}

export const reducer = (state = initState,action)=>{
    console.log(action)
    if(action.type === "chiFlag_chi"){
        window.location.hash = window.location.hash.split("?")[0] + "?lang=chi"
    }
    if(action.type === "chiFlag_en"){
        window.location.hash = window.location.hash.split("?")[0] + "?lang=en"
    }
    switch (action.type){
        case "chiFlag_chi":
            return {
                ...state,
                chiFlag:"chi"
            }
        case "chiFlag_en":
            return {
                ...state,
                chiFlag:"en"
            }
        case "setOrgDetail":
            return{
                ...state,
                orgdetail:action.payload
            }
        case "setProDetail":
            return{
                ...state,
                prodetail:action.payload
            }
        case "setOrgTabFlag":
            return{
                ...state,
                orgTabFlag:action.payload
            }
        case "setPageFlag":
            return{
                ...state,
                pageflag:action.payload
            }
        case "setStuData":
                return{
                    ...state,
                    studata:action.payload
                }
        default:
            return state

    }
    

}