<template>
    <div>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">
            全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        data() {
            return {
                options: [{
                    value: '1',
                    label: '开启'
                }, {
                    value: '0',
                    label: '关闭'
                }],
                value: '',
                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    };
</script>