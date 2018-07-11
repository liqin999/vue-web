import {
    put
} from "../../mutation-types/index"


///获取登录者下的所有的广告主
export const camplistPage = ({
    commit
}, data) => {

    commit(put.camp_listPage, data)
}

//展示定向条件
export const showConditon = ({
    commit
}, data) => {

    commit(put.SHOW_CONTENT, data)
}

//隐藏定向条件
export const hideConditon = ({
    commit
}, data) => {

    commit(put.SHOW_CONTENT, data)
}


//展示 网络设备
export const showNetwork = ({
    commit
}, data) => {
    console.log(data);
    commit(put.SHOW_TEMP_NETWORK, data)
}

//展示 设备定向
export const showDevice = ({
    commit
}, data) => {

    commit(put.SHOW_TEMP_DEVICE, data)
}



//展示 媒体
export const showMeadia = ({
    commit
}, data) => {

    commit(put.ISSHOWMEADIA, data)
}

//展示 广告位
export const showAdposition = ({
    commit
}, data) => {

    commit(put.ISSHOWADPOSITION, data)
}
//媒体列表
export const getMeadiaList = ({
    commit
}, data) => {
    commit(put.GETMEADIALIST, data)
}

//广告位列表
export const getAdPositionList = ({
    commit
}, data) => {
    commit(put.GETADPOSITIONLIST, data)
}


//网络设备被中元素
export const chekAllDevice = ({
    commit
}, data) => {

    commit(put.CEK_NETWORK_DEVICE, data)
}

//网络类型被选中元素
export const chekAllType = ({
    commit
}, data) => {

    commit(put.CEK_NETWORK_ALL_TYPE, data)
}

//媒体被选中元素
export const chekAllMeadia = ({
    commit
}, data) => {

    commit(put.ALLCHECKKMEADIA, data)
}


//广告位被选中元素
export const chekAllAdPosition = ({
    commit
}, data) => {

    commit(put.ALLCHECKADPOSITON, data)
}



//省级
export const addProvince = ({
    commit
}, data) => {
    commit(put.ADD_PROVINCE, data)
}

//市级
export const addCities = ({
    commit
}, data) => {

    commit(put.ADD_CITIES, data)
}

//更新地域显示结果


export const updateTerrain = ({
    commit
}, data) => {

    commit(put.UPDATE_TERRITOR, data)
}


//更新省级
export const updateProvince = ({
    commit
}, data) => {

    commit(put.UPDATE_PROVINCE, data)
}

//获取全部数据  省级 市级
export const getAllProvinceCities = ({
    commit
}, data) => {

    commit(put.GET_SOURCE_TRRAIN_DATA, data)
}

//周一
export const modifyMonday = ({
    commit
}, data) => {

    commit(put.MODIFY_MONDAY, data)
}
//周二
export const modifyTuesDay = ({
    commit
}, data) => {

    commit(put.MODIFY_TUESDAY, data)
}
//周三
export const modifyWendesDay = ({
    commit
}, data) => {

    commit(put.MODIFY_WENDESDAY, data)
}
//周四
export const modifyThuesDay = ({
    commit
}, data) => {

    commit(put.MODIFY_THRUSDAY, data)
}
//周五
export const modifyFriDay = ({
    commit
}, data) => {

    commit(put.MODIFY_FRIDAY, data)
}
//周六
export const modifySaturDay = ({
    commit
}, data) => {

    commit(put.MODIFY_SATURDAY, data)
}

//周日
export const modifyWeekDay = ({
    commit
}, data) => {

    commit(put.MODIFY_WEEKDAY, data)
}

//全选 周一
export const checkedAllMonday = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_MONDAY, data)
}


//全选 周二
export const checkedAllTuesdays = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_TUESDAY, data)
}
//全选 周三
export const checkedAllWendesday = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_WENDESDAY, data)
}
//全选 周四
export const checkedAllthursday = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_THRUSDAY, data)
}
//全选 周五
export const checkedAllFriday = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_FRIDAY, data)
}
//全选 周六
export const checkedAllSaturday = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_SATURDAY, data)
}

//全选 周日
export const checkedAllWeekdays = ({
    commit
}, data) => {

    commit(put.CHECKED_ALL_WEEKDAY, data)
}
