/*
 * @Author: henry yan
 * @Date:   2016-07-29 16:25:01
 * 
 * 
 */
export const setCookie = (name, value) => {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

export const getCookie = (name) => {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//
export const delCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

//
export const getQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    console.log(r);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//文件下载
export const downloadFile = (url) => {
    try {
        console.log("try");
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
        elemIF.onload = function (event) {}
    } catch (e) {}
}

function formatDate(date) {
    var myyear = date.getFullYear();
    var mymonth = date.getMonth() + 1;
    var myweekday = date.getDate();
    var myhours = date.getHours();
    var myminutes = date.getMinutes();
    var myseconds = date.getSeconds();

    if (mymonth < 10) {
        mymonth = "0" + mymonth;
    }
    if (myweekday < 10) {
        myweekday = "0" + myweekday;
    }
    if (myhours < 10) {
        myhours = "0" + myhours;
    }
    if (myminutes < 10) {
        myminutes = "0" + myminutes;
    }
    if (myseconds < 10) {
        myseconds = "0" + myseconds;
    }
    return (myyear + "-" + mymonth + "-" + myweekday + " " + myhours + ":" + myminutes + ":" + myseconds);
}

function getMonthDays(myMonth) { //获得某月的天数
    myMonth = parseInt(myMonth); //这一步很重要，有时候传进来的可能是字符串，后面+1的时候会变成字符串相连
    var monthStartDate = new Date(nowYear, myMonth, 1); //当月1号的时间戳
    var monthEndDate = new Date(nowYear, myMonth + 1, 1); //下月1号的时间戳
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24); //求差即可取得某月天数
    return days;
}


var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay(); //今天本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getFullYear(); //当前年


/**
 * 获得本月的开端日期
 */
export const getMonthStartDate = () => {
    var monthStartDate = new Date(nowYear, nowMonth, 1);
    return formatDate(monthStartDate);
}

/**获得本月的停止日期
 */
export const getMonthEndDate = () => {
    var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
    return formatDate(monthEndDate);
}

//滚动条在Y轴上的滚动距离
export const getScrollTop = (document) => {　　
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;　　
    if (document.body) {　　　　
        bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollTop = document.documentElement.scrollTop;　　
    }　　
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
    return scrollTop;
}

//文档的总高度
export const getScrollHeight = (document) => {　
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;　　
    if (document.body) {　　　　
        bodyScrollHeight = document.body.scrollHeight;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollHeight = document.documentElement.scrollHeight;　　
    }　　
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
    return scrollHeight;
}

//浏览器视口的高度
export const getWindowHeight = (document) => {　
    var windowHeight = 0;　　
    if (document.compatMode == "CSS1Compat") {　　　　
        windowHeight = document.documentElement.clientHeight;　　
    } else {　　　　
        windowHeight = document.body.clientHeight;　　
    }　　
    return windowHeight;
}


//判断window scroll reach bottom

//   if (getScrollTop(element) + getWindowHeight(element) == getScrollHeight(element)) {
//     //self.loadMore();
//      console.log("加载更多");
//   }

//判断 element scroll reach bottom
// var o= element;
// if (o.offsetHeight + o.scrollTop == o.scrollHeight) {
//   //self.loadMore();
// }


//json 对象合并
//调用方式
// var a ={"a":"1","b":"2"}
// var b ={"c":"3","d":"4","e":"5"}
// var c = extend({}, [a,b]);
export const extend = (des, src, override) => {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++)
            extend(des, src[i], override);
    }
    for (var i in src) {
        if (override || !(i in des)) {
            des[i] = src[i];
        }
    }
    return des;

}
