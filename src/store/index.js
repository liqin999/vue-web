import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations/mutations'
import actions from './action/index'
import getters from './getters/index'

Vue.use(Vuex)

const state = {
    login: "", //登录之后基本信息
    currentuser: "", //当前用户
    sidebar: "", //侧边栏
    activemenu: "",
    breadcrumblist: [{
            home: [{
                title: "首页",
                last: true
            }]
        },
        {
            plantable: [{
                    title: "投放管理"
                },
                {
                    title: "广告主"
                },
                {
                    title: "投放计划",
                    last: true
                }
            ]
        },
        {
            createplan: [{
                    title: "投放管理"
                },
                {
                    title: "广告主"
                },
                {
                    title: "创建投放计划",
                    last: true
                }
            ]
        },
        {
            editplan: [{
                    title: "投放管理"
                },
                {
                    title: "广告主"
                },
                {
                    title: "编辑投放计划",
                    last: true
                }
            ]
        },
        {
            relation: [{
                    title: "投放管理"
                },
                {
                    title: "广告主"
                },
                {
                    title: "创意关联列表",
                    last: true
                }
            ]
        },
        {
            list: [{
                    title: "创意中心"
                },
                {
                    title: "创意列表",
                    last: true
                }
            ]
        },
        {
            banner: [{
                    title: "创意中心"
                },
                {
                    title: "上传Banner",
                    last: true
                }
            ]
        },
        {
            native: [{
                    title: "创意中心"
                },
                {
                    title: "上传Naite素材",
                    last: true
                }
            ]
        },
        {
            pretemplate: [{
                    title: "创意中心"
                },
                {
                    title: "模板展示",
                    last: true
                }
            ]
        },
        {
            video: [{
                    title: "创意中心"
                },
                {
                    title: "上传Video",
                    last: true
                }
            ]
        },
        {
            base: [{
                    title: "报表中心"
                },
                {
                    title: "基础数据报表",
                    last: true
                }
            ]
        },
        {
            effect: [{
                    title: "报表中心"
                },
                {
                    title: "效果分析",
                    last: true
                }
            ]
        }
    ],
    currentbreadcrumb: [],
    //投放管理
    advertiser: "", //存放登录者下的所有的广告主
    plan: "", //存放广告主的计划
    allclick: "", //存放广告主的总点击次数
    allview: "", //存放广告主的所有的曝光次数
    planlist: [],
    result: "",
    tempnetwork: "", //网络类型 显示隐藏
    tempdevice: "", //设备定向 显示隐藏
    parnetMenu: "", //父及菜单

    tempmeadia: [], //媒体  显示 隐藏
    tempadposition: [], //广告位 显示 隐藏


    networktype: [], //网络类型被选中元素
    device: [], //设备定向被选中元素
    meadia: [], //媒体被选中元素
    adposition: [], //广告位被选中元素


    meadialist: [],
    dpositionlist: [],
    //地域
    terrainResult: [],
    province: [],
    terrainSourceData: [],

    //时段
    monday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    tuesday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    wendesday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    tursday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    friday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    saturday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],
    weekday: [{
        key: "0",
        value: "0"
    }, {
        key: "1",
        value: "0"
    }, {
        key: "2",
        value: "0"
    }, {
        key: "3",
        value: "0"
    }, {
        key: "4",
        value: "0"
    }, {
        key: "5",
        value: "0"
    }, {
        key: "6",
        value: "0"
    }, {
        key: "7",
        value: "0"
    }, {
        key: "8",
        value: "0"
    }, {
        key: "9",
        value: "0"
    }, {
        key: "10",
        value: "0"
    }, {
        key: "11",
        value: "0"
    }, {
        key: "12",
        value: "0"
    }, {
        key: "13",
        value: "0"
    }, {
        key: "14",
        value: "0"
    }, {
        key: "15",
        value: "0"
    }, {
        key: "16",
        value: "0"
    }, {
        key: "17",
        value: "0"
    }, {
        key: "18",
        value: "0"
    }, {
        key: "19",
        value: "0"
    }, {
        key: "20",
        value: "0"
    }, {
        key: "21",
        value: "0"
    }, {
        key: "22",
        value: "0"
    }, {
        key: "23",
        value: "0"
    }],

    reportList:[]



}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})
