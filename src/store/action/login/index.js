import {
    login
} from "../../mutation-types/index"



//登录接口
export const doLogin = ({
    commit
}, data) => {

    commit(login.LOGIN, data)
}
