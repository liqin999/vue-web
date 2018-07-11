//import fetch from '../../config/fetch'
import axios from 'axios'
import {
    baseUrl
} from '../../config/env'



export const doLogin = (data) =>axios({
    method: 'post',
    url: baseUrl + '/dologin',
    data: data
});

