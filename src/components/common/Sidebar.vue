<template>
    <div class="sidebar">
        <el-aside>
            <div class="logo_box">
                <div class="logo">
                </div>
            </div>
            <el-menu :default-active="onRoutes"  :router="true" >
                <template v-for="item in items">
                                <template v-if="item.chiled">
                                <el-submenu :index="item.id.toString()" :key="item.id.toString()" >
                                    <template slot="title">
                                    <i :class="item.icon"></i>{{ item.name }}
</template>
                        <el-menu-item v-for="(subItem,i) in item.chiled" :key="i" :index="subItem.id.toString()" :route='{ path: "/"+subItem.path }' @click="activeMenu">{{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                    </template>
<template v-else>
    <el-menu-item :index="item.id.toString()" :route='{ path: "/"+subItem.path }' :key="item.id.toString()">
        <i :class="item.icon"></i>{{ item.n }}
    </el-menu-item>
</template>
                </template>
                </el-menu>
            <!-- <el-menu :default-openeds="['1']">
                <el-submenu index="1">
<template slot="title">
    <i class="el-icon-output"></i>
    投放管理
</template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">首页</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
<template slot="title">
    <i class="el-icon-creative"></i>
    创意中心
</template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">创意列表</el-menu-item>
                        <el-menu-item index="2-2">原生创意模板</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
<template slot="title">
    <i class="el-icon-media"></i>
    媒体管理
</template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">资源列表</el-menu-item>
                        <el-menu-item index="3-2">媒体列表</el-menu-item>
                        <el-menu-item index="3-3">PMP配置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
<template slot="title">
    <i class="el-icon-report"></i>
    报表中心
</template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">投放效果分析</el-menu-item>
                        <el-menu-item index="4-2">基础数据报表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
<template slot="title">
    <i class="el-icon-backstage"></i>
    后台管理
</template>
                    <el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">个人空间</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="5-2" class="el-authority">
<template slot="title">
    <i class="authority"></i>
    权限管理
</template>
                            <el-menu-item index="5-5-1"><i class="authority-item"></i>帐户列表</el-menu-item>
                            <el-menu-item index="5-5-2"><i class="authority-item"></i>角色列表</el-menu-item>
                        </el-submenu>
                        <el-menu-item-group>
                            <el-menu-item index="5-6" class="el-custom">客户管理</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="5-7" class="el-stencil">模版管理<span class="num">10</span></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="5-8">消息管理</el-menu-item>
                        </el-menu-item-group>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu> -->
        </el-aside>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapGetters
    } from "vuex";
    import {
        setCookie,
        getCookie,
        delCookie
    } from "../../common/utils";
    export default {
        mounted() {
            if (getCookie("sidebar")) {
                this.getSideBar(JSON.parse(getCookie("sidebar")));
            }
        },
        data: function() {
            return {
                // items: [{
                //     icon: '',
                //     id: 1,
                //     name: "投放管理",
                //     path: null,
                //     pid: 0,
                //     chiled: [{
                //         icon: "",
                //         id: 60,
                //         name: "首页",
                //         // path: { path: "/home" },
                //         path: "home",
                //         pid: 1
                //     }]
                // }]
                items: [{
                    "name": "投放管理",
                    "icon": "el-icon-output",
                    "path": null,
                    "id": 1,
                    "pid": 0,
                    "chiled": [{
                        "name": "首页",
                        "icon": "",
                        "path": "home",
                        "id": 60,
                        "pid": 1,
                        "chiled": []
                    }]
                }, {
                    "name": "创意中心",
                    "icon": "el-icon-creative",
                    "path": null,
                    "id": 2,
                    "pid": 0,
                    "chiled": [{
                        "name": "创意列表",
                        "icon": null,
                        "path": "list",
                        "id": 14,
                        "pid": 2,
                        "chiled": []
                    }]
                }, {
                    "name": "媒体管理",
                    "icon": "el-icon-media",
                    "path": null,
                    "id": 3,
                    "pid": 0,
                    "chiled": [{
                        "name": "资源列表",
                        "icon": null,
                        "path": "resourse",
                        "id": 21,
                        "pid": 3,
                        "chiled": []
                    }, {
                        "name": "媒体列表",
                        "icon": null,
                        "path": "meadia",
                        "id": 22,
                        "pid": 3,
                        "chiled": []
                    }, {
                        "name": "PMP配置",
                        "icon": null,
                        "path": "pmp",
                        "id": 23,
                        "pid": 3,
                        "chiled": []
                    }]
                }, {
                    "name": "报表中心",
                    "icon": "el-icon-report",
                    "path": "",
                    "id": 4,
                    "pid": 0,
                    "chiled": [{
                        "name": "效果分析",
                        "icon": null,
                        "path": "effect",
                        "id": 36,
                        "pid": 4,
                        "chiled": []
                    }, {
                        "name": "基础数据报表",
                        "icon": null,
                        "path": "base",
                        "id": 37,
                        "pid": 4,
                        "chiled": []
                    }]
                }, {
                    "name": "后台管理",
                    "icon": "el-icon-backstage",
                    "path": null,
                    "id": 5,
                    "pid": 0,
                    "chiled": [{
                        "name": "客户管理",
                        "icon": null,
                        "path": "custome",
                        "id": 40,
                        "pid": 5,
                        "chiled": []
                    }, {
                        "name": "个人空间",
                        "icon": null,
                        "path": "space",
                        "id": 61,
                        "pid": 5,
                        "chiled": []
                    }, {
                        "name": "模板管理",
                        "icon": null,
                        "path": "templatemg",
                        "id": 62,
                        "pid": 5,
                        "chiled": []
                    }, {
                        "name": "消息管理",
                        "icon": null,
                        "path": "message",
                        "id": 63,
                        "pid": 5,
                        "chiled": []
                    }]
                }]
            }
        },
        methods: {
            ...mapActions(["getSideBar"]),
            activeMenu(){
                console.log("当前激活菜单项");
                console.log(this.$route.path.replace("/", ""));
            }
        },
        computed: {
            onRoutes() {
                return this.$route.path.replace("/", "");
            },
            ...mapState({
                sidebar: "sidebar",
                currentbreadcrumb:"currentbreadcrumb"
            })
        }
    }
</script>

<style lang="scss">
    @import "../../style/mixin";
    @import "../../style/common";
    
    // content background color
    .el-container {
        background-color: #fbfbfb;
    }
    // left large container
    .sidebar {
        background-color: #1b2133;
    }
    .el-aside {
        width: 220px !important;
        .menubar {
            border-right: 0 none;
        }
        .logo_box {
            background-color: #1b2133;
            padding: 14px 0 14px 20px;
            border-bottom: 2px solid #0c1224;
        }
        .logo {
            @include svgbg("../../style/image/role/logo.svg");
            width: 100px;
            height: 42px;
        }
        // siderbar menu
        .el-menu {
            background-color: #1b2133 !important;
            border-right: 0 none;
        }
        // menu small icon
        .el-icon-media,
        .el-icon-report,
        .el-icon-backstage,
        .el-icon-output {
            width: 14px !important;
            height: 14px;
        }
        .el-submenu [class^="el-icon-"] {
            margin-right: 20px !important;
            vertical-align: -2px !important;
        }
        .el-icon-output{
            background: url("../../style/image/common/output.svg") 0 0 no-repeat;
        }
        .el-icon-media{
            background: url("../../style/image/common/media.svg") 0 0 no-repeat;
        }
        .el-icon-report{
            background: url("../../style/image/common/report.svg") 0 0 no-repeat;
        }
        .el-icon-backstage{
            background: url("../../style/image/common/backstage.svg") 0 0 no-repeat;
        }
        .el-submenu__title{
            padding-left: 15px!important;
            color: #515974!important;
            &:hover{
                color: #0c1224!important;
            }
            
            .el-icon-creative{
                background: url("../../style/image/common/creative.svg") 0 0 no-repeat;
                width: 15px !important;
                margin-right: 19px!important;
                height: 17px;
            }
        }
        // authority msg num
        .authority{
            padding-left: 14px;
        }
        .authority-item{
            padding-left: 20px;
            .num{
                @include xx(30px, 30px, 14px)
            }
        }
        .el-menu-item-group{
            position: relative;
        }
        .el-stencil{
            position: relative;
            .num{
                position: absolute;
                top: 13px;
                right: 21px;
            }
        }
        // open menu style
        .is-opened{
            .el-menu-item{
                color:#e4ebf7;
            }
            .el-submenu__title{
                color:#e4ebf7!important;
            }
        }
        .el-menu-item,
        .el-submenu__title {
            height: 54px;
            line-height: 54px;
            border-left: 5px solid #1b2133;
            &:focus,
            &:hover {
                background-color: #0c1124;
                border-color: #ff6870;
                color: #e4ebf7!important;
            }
        }
        .el-submenu{
            &:focus,
            &:hover {
                color: #e4ebf7;
            }
        }
        .el-menu-item.is-active{
            background-color:#0c1224;
            border-left:5px solid #ff6870;
            color: #e4ebf7;
        }
        .el-menu-item{
            padding-left: 48px!important;
            &:focus,
            &:hover{
                border-left:5px solid #ff6870!important;
                color: #e4ebf7!important;
            }
        }
        .el-menu-item-group__title{
            padding: 0 0 0 20px;
        }
    }
    
    // main content
    .el-main {
        padding: 30px !important;
        font-size: 14px;
    }

    .el-container:first-child{
        min-width: 1200px;
    }
    
</style>