//import fetch from '../../config/fetch'
import axios from 'axios'
import {
    baseUrl
} from '../../config/env'



//报表中心-效果分析
export const centerlist = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-centerlist',
    data: data
});


//报表中心-基础数据报表
export const centerbaselist = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-centerbaselist',
    data: data
});

