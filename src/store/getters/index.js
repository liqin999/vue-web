//首页侧边栏
export const sidebar = state => {

    return state.login.menu;
}

//是否显示网络类型
export const isshownetwork = state => {
    return state.tempnetwork == "3-1";
};

//是否显示定向设备
export const isshowdevice = state => {
    return state.tempdevice == "3-2";
};

//是否显示 媒体
export const isshowmeadia = state => {
    return state.tempmeadia == "4-1";
};


//是否显示  广告位
export const isshowposition = state => {
    return state.tempadposition == "4-2";
};



//网络类型是否全选
export const isallnetworktype = state => {
    return state.networktype.length != 5;
};


export const territoryGetter = state => {

    return state.terrainResult;
}

//报表中心 动态显示列

export const isShowColumn= state => {

    

    let result = {};

    console.log("getter");

    if (state.reportList.length == 0) {
        result.date = false;//日期 
        result.consume = false;//消耗
        result.cost = false;//成本
        result.view = false;//曝光
        result.click = false;//点击

        result.clickrate = false;//点击率
        result.clickcost = false;//点击价格（元）
        result.viewrate = false;//曝光率
        result.viewcost = false;//千次曝光价格(元)
        // result.consume = false;//消耗
        // result.cost = false;//成本
        // result.viewrate = false;//曝光率
        // result.click = false;//点击
    } else {

        for (var key in state.reportList.data[0]) {
            if (key == "date") {
                result.date = true;

            }
            if (key == "consume") {
                result.consume = true;

            }
            if (key == "cost") {
                result.cost = true;

            }
            if (key == "view") {
                result.view = true;

            }
            if (key == "viewrate") {
                result.viewrate = true;

            }
            if (key == "viewcost") {
                result.viewcost = true;

            }
            if (key == "click") {
                result.click = true;

            }
            if (key == "clickrate") {
                result.clickrate = true;

            }
            if (key == "clickcost") {
                result.clickcost = true;

            }
            　　
        }

    }



    return result;
}


export default {
    sidebar,
    isshownetwork,
    isshowdevice,
    isallnetworktype,
    isshowposition,
    isshowmeadia,
    territoryGetter,
    isShowColumn
}
