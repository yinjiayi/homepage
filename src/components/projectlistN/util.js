const getSelectM = function(item){
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

const getSelectLang = function(item){   
    return {
        "全部":"all",
        "All":"all",
        "中文":"chi",
        "Chinese":"chi",
        "中文/English":"chien",
        "Chinese/English":"chien",
        "English":"eng"
    }[item]||"all"
}

const getSelectDToChi = function(tagen){
    return {
        "low":"低",
        "medium":"中",
        "high":"高"
    }[tagen]||"全部"

}

const getLangDToChi = function(tagen){
    return {  
        "chien":0,
        "chi":1,
        "eng":2
    }[tagen]||0
}

const getTagSelect = function(tag){
    return {
        "全部":"all",
        "All":"all"
    }[tag]||tag
}

export {
    getSelectM,
    getSelectLang,
    getSelectDToChi,
    getLangDToChi,
    getTagSelect

}