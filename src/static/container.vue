<template>
    <div>
        <el-container>
            <!-- 侧边栏 -->
            <!-- <vSidebar></vSidebar> -->
            <el-container class="is-vertical">
                <!-- <vHeader></vHeader> -->
                 <transition name="move" mode="out-in"><router-view></router-view></transition>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    // import vSidebar from '../components/common/Sidebar';
    // import vHeader from '../components/header/head';
    import {
        mapState,
        mapActions
    } from "vuex";
    export default {
        data() {
            return {
                value6: ""
            };
        },
        mounted() {},
        components: {
            // vSidebar,
            // vHeader,
        },
        computed: {},
        methods: {}
    };
</script>

        
<style lang="scss">
    @import "../style/mixin";

    // single-link
    .single-link {
        display: inline-block;
        color: #7f8599;
        background-color: #fff;
        width: 165px;
        height: 38px;
        line-height: 38px;
        border: 1px solid #e3e8f1;
        transition: 0.1s;
        border-radius: 4px;
        text-align: center;
    }
</style>