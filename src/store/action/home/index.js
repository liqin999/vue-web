import {
    home
} from "../../mutation-types/index"


///获取登录者下的所有的广告主
export const publicAdvertiserInfo = ({
    commit
}, data) => {

    commit(home.PULIC_ADVERTSERINFO, data)
}


//获取广告主的计划
export const publicCampaignAll = ({
    commit
}, data) => {

    commit(home.PULIC_CAMPAIGNALL, data)
}


//获取广告主的总点击次数
export const homeGetclickviewajax = ({
    commit
}, data) => {

    commit(home.HOME_GETCLICKVIEWAJAX, data)
}


//广告主的所有的曝光次数
export const publicAccountClickView = ({
    commit
}, data) => {

    commit(home.PUBLIC_ACCOUNTCLICKVIEW, data)
}

//当前用户
export const getCurrentUser = ({
    commit
}, data) => {

    commit(home.GET_CURRNET_USER, data)
}


//侧边栏
export const getSideBar = ({
    commit
}, data) => {

    commit(home.GET_SIDE_BAR, data)
}


//breadcrumb
export const setBreadCrumb = ({
    commit
}, data) => {

    commit(home.SET_BREAD_CRUMB, data)
}
