const initState = {
    chiFlag:"chi", // chi|en
    orgdetail:{},  // 显示orgDetail数据
    orgTabFlag:"orglist" // orglist|projectlist
}

exports.reducer = (state = initState,action)=>{
    console.log(action)
    switch (action.type){
        case "chiFlag_chi":
            return {
                ...state,
                chiFlag:"chi"
            };
        case "chiFlag_en":
            return {
                ...state,
                chiFlag:"en"
            };
        case "setOrgDetail":
            return{
                ...state,
                orgdetail:action.payload
            }
        case "setOrgTabFlag":
            return{
                ...state,
                orgTabFlag:action.payload
            }
        default:
            return state

    }
    

}