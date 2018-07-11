import {
    report
} from "../../mutation-types/index"



//登录接口
export const getReportList = ({
    commit
}, data) => {

    commit(report.REPOTLIST, data)
}
