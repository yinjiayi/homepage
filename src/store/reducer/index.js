const initState = {
    chiFlag:"chi", // chi|en
}

exports.reducer = (state = initState,action)=>{
    console.log(action)
    switch (action.type){
        case "chiFlag_chi":
            return {
                chiFlag:"chi"
            };
        case "chiFlag_en":
            return {
                chiFlag:"en"
            };
        default:
            return state

    }
    

}