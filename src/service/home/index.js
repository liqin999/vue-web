import axios from 'axios'
import {
    baseUrl
} from '../../config/env'

import {
    getCookie
} from "../../common/utils"

axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie("token");


///获取登录者下的所有的广告主
export const publicAdvertiserInfo = (data) =>axios({
    method: 'post',
    url: baseUrl + '/public-advertiserInfo',
    data: data
});

//获取广告主的计划
export const publicCampaignAll = (data) =>axios({
    method: 'post',
    url: baseUrl + '/public-campaignAll',
    data: data
});

//获取广告主的总点击次数
export const homeGetclickviewajax = (data) =>axios({
    method: 'post',
    url: baseUrl + '/home-getclickviewajax',
    data: data
});

//广告主的所有的曝光次数
export const publicAccountClickView = (data) =>axios({
    method: 'post',
    url: baseUrl + '/public-accountClickView',
    data: data
});

