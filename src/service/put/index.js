import axios from 'axios'
import {
    baseUrl
} from '../../config/env'

import {
    getCookie
} from "../../common/utils"

axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie("token");

//单个计划的点击曝光
export const homecampaign = (data) =>axios({
    method: 'post',
    url: baseUrl + '/home-campaign',
    data: data
});
//折线图数据 C/V
export const publicgetCTV = (data) =>axios({
    method: 'post',
    url: baseUrl + '/public-getCTV',
    data: data
});
//管理员获取展现类型数据   柱状图
export const publicgetTypeView = (data) =>axios({
    method: 'post',
    url: baseUrl + '/public-getTypeView',
    data: data
});
//投放计划列表
export const camplistPage = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-listPage',
    data: data
});
//开启投放计划
export const campflagOpenajax = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-flagOpenajax',
    data: data
});
//关闭投放计划
export const campflagCloseajax = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-flagCloseajax',
    data: data
});
//删除投放计划
export const campcampDelect = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-campDelect',
    data: data
});
//投放计划详情
export const campedit = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-edit',
    data: data
});
//添加或编辑投放计划
export const campdoedit = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-doedit',
    data: data
});
//已选择创意列表
export const campcreatlist = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-creatlist',
    data: data
});
//未选择创意列表
export const campnoCreatlist = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-noCreatlist',
    data: data
});
//批量修改曝光或点击检测

export const campeditImpCl = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-editImpCl',
    data: data
});
//处理选择创意
export const campselectCreat = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-selectCreat',
    data: data
});

//地域查询
export const campRegion = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-region',
    data: data
});

//获取资源媒体列表
export const mediaMediaName = (data) =>axios({
    method: 'post',
    url: baseUrl + '/media-mediaName',
    data: data
});

//查询对应的的广告位的id
export const mediaadName = (data) =>axios({
    method: 'post',
    url: baseUrl + '/media-adName',
    data: data
});

//创意关联列表开启
export const flagOpenajax = (data) =>axios({
    method: 'post',
    url: baseUrl + '/campcreat-flagOpenajax',
    data: data
});

//创意关联列表关闭
export const flagCloseajax = (data) =>axios({
    method: 'post',
    url: baseUrl + '/campcreat-flagCloseajax',
    data: data
});

//创意关联列表删除
export const campDelect = (data) =>axios({
    method: 'post',
    url: baseUrl + '/campcreat-campDelect',
    data: data
});

//已选择创意尺寸列表
export const creatsizelist = (data) =>axios({
    method: 'post',
    url: baseUrl + '/camp-creatsizelist',
    data: data
});


