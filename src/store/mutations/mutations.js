import {
    login,
    home,
    put,
    report
} from "../mutation-types/index"
import _ from "lodash";


export default {
    //登录
    [login.LOGIN](state, data) {
        state.login = data;
    },
    //投放管理
    [home.SET_BREAD_CRUMB](state, data) {
        let list = state.breadcrumblist;
        let result = [];

        for (var i = 0, l = list.length; i < l; i++) {

            　　
            for (var key in list[i]) {

                

                if (key == data || data.indexOf(key) >= 0) {
                    result = list[i][key];
                }

                　　
            }

        }


        state.currentbreadcrumb = result;
    },
    [home.GET_CURRNET_USER](state, data) {

        state.currentuser = data;
    },
    [home.GET_SIDE_BAR](state, data) {
        state.sidebar = data;
    },
    [home.PULIC_ADVERTSERINFO](state, data) {
        state.advertiser = data;
    },
    [home.PULIC_CAMPAIGNALL](state, data) {
        state.plan = data;
    },
    [home.HOME_GETCLICKVIEWAJAX](state, data) {
        state.allclick = data;
    },
    [home.PUBLIC_ACCOUNTCLICKVIEW](state, data) {
        state.allview = data;
    },
    [put.camp_listPage](state, data) {
        state.planlist = data;
    },
    [put.creative_listPage](state, data) {
        state.creativelist = data;
    },
    [put.SHOW_CONTENT](state, data) {

        if (state.parnetMenu != "" && state.parnetMenu != data[0]) {
            state.tempnetwork = "";
            state.tempdevice = "";
        }

        state.parnetMenu = data[0];
        state.result = data[0];
    },

    [put.SHOW_TEMP_NETWORK](state, data) {
        if (state.tempnetwork == "3-1") {
            return;
        }
        state.tempnetwork = data;
    },
    [put.SHOW_TEMP_DEVICE](state, data) {
        if (state.tempdevice == "3-2") {
            return;
        }
        state.tempdevice = data;
    },
    [put.CEK_NETWORK_ALL_TYPE](state, data) {
        state.networktype = data;

    },
    [put.CEK_NETWORK_DEVICE](state, data) {
        state.device = data;
    },
    [put.ISSHOWMEADIA](state, data) {
        if (state.tempmeadia == "4-1") {
            return;
        }
        state.tempmeadia = data;
    },
    [put.ISSHOWADPOSITION](state, data) {
        if (state.tempadposition == "4-2") {
            return;
        }
        state.tempadposition = data;
    },
    [put.GETMEADIALIST](state, data) {

        let list = state.meadialist;

        state.meadialist = data;
    },
    [put.GETADPOSITIONLIST](state, data) {

        state.dpositionlist = data;
    },

    [put.ALLCHECKKMEADIA](state, data) {

        state.meadia = data;

    },

    [put.ALLCHECKADPOSITON](state, data) {
        state.adposition = data;

    },


    //ADD PROVICE
    [put.ADD_PROVINCE](state, data) {
        state.province.push(data);
        state.province = [...state.province];

    },

    [put.ADD_CITIES](state, data) {

        let province = data.province;
        let cityies = data.cities;
        province[province.length - 1].cityies = cityies;
        state.terrainResult = province;
    },

    [put.UPDATE_TERRITOR](state, data) {
        state.terrainResult = data;
    },

    [put.UPDATE_PROVINCE](state, data) {
        state.province = data;
    },

    [put.GET_SOURCE_TRRAIN_DATA](state, data) {
        state.terrainSourceData = data;
    },

    [put.MODIFY_MONDAY](state, data) {
        let hours = state.monday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.monday = hours;
    },

    [put.MODIFY_TUESDAY](state, data) {
        let hours = state.tuesday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.tuesday = hours;
    },

    [put.MODIFY_WENDESDAY](state, data) {
        let hours = state.wendesday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.wendesday = hours;
    },

    [put.MODIFY_THRUSDAY](state, data) {
        let hours = state.tursday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.tursday = hours;
    },

    [put.MODIFY_FRIDAY](state, data) {
        let hours = state.friday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.friday = hours;
    },

    [put.MODIFY_SATURDAY](state, data) {
        let hours = state.saturday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.saturday = hours;
    },

    [put.MODIFY_WEEKDAY](state, data) {
        let hours = state.weekday;

        for (var j = 0; j < hours.length; j++) {
            if (data.key == hours[j].key) {
                hours[j] = data;
            }
        }
        state.weekday = hours;
    },
    [put.CHECKED_ALL_MONDAY](state, data) {
        state.monday = data;
    },
    [put.CHECKED_ALL_TUESDAY](state, data) {

        state.tuesday = data;
    },
    [put.CHECKED_ALL_WENDESDAY](state, data) {
        state.wendesday = data;
    },
    [put.CHECKED_ALL_THRUSDAY](state, data) {
        state.tursday = data;
    },
    [put.CHECKED_ALL_FRIDAY](state, data) {
        state.friday = data;
    },
    [put.CHECKED_ALL_SATURDAY](state, data) {
        state.saturday = data;
    },
    [put.CHECKED_ALL_WEEKDAY](state, data) {
        state.weekday = data;
    },
    [report.REPOTLIST](state, data) {
        state.reportList = data;
    }

}
