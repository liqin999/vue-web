<template>
    <el-header>
        <div class="path left" >
            <template v-for="item in currentbreadcrumb">
                <template v-if="!item.last">
                     <a href="javascript:void(0);" >{{item.title}}</a>
                    <i class="path-split">&gt;</i>
                </template>
                <template v-else>
                    <span class="hd-title">{{item.title}}</span>
                </template>
            </template>
        </div>
        <div class="hd-bd">
            <div class="register-image"></div>
            <span class="register-name">{{currentuser&& currentuser.name}}</span>
            <i class="down_arrow_white"></i>
        </div>
    </el-header>
</template>

<script>
    import {
        mapState,
        mapActions,
        mapGetters
    } from "vuex";
    export default {
        data: function() {
            return {}
        },
        computed: {
            ...mapState({
                currentuser: "currentuser",
                currentbreadcrumb:"currentbreadcrumb"
            })
        },
        methods: {
            //   ...mapActions(["setBreadCrumb"]),
        },
        mounted(){
            // console.log(this.$route.path.replace("/", ""));
            //this.setBreadCrumb(this.$route.path.replace("/", ""));
        }
    }
</script>

        
<style lang="scss">
    @import '../../style/mixin';
    // header common style
    .el-container .el-header {
        background-color: $fc !important;
        padding: 0 30px !important;
        height: 72px !important;
        line-height: 72px !important;
        border-bottom: 2px solid #e1e7f0;
        .hd-title {
            @include sc(18px, #515974);
            font-weight: bold;
        }
    }
    .el-header {
        // right role style
        .hd-bd {
            position: relative;
            .register-image {
                @include svgbg("../../style/image/role/role_men_on.svg");
                width: 46px;
                height: 46px;
                position: absolute;
                right: 100px;
                top: 13px;
            }
            .register-name {
                @include sc(14px, #515974);
                position: absolute;
                right: 50px;
            }
            .down_arrow_white {
                @include svgbg("../../style/image/common/down_arrow_gray.svg");
                width: 14px;
                height: 7px;
                position: absolute;
                right: 0;
                top: 30px;
            }
        }
        // bread crumb row
        .path {
            height: 72px;
            line-height: 72px;
            a,
            i {
                @include sc(18px, #a5a6bb);
                float: left;
            }
            i {
                margin: 0 10px;
            }
            span {
                vertical-align: top;
            }
        }
    }
    
</style>