<template>

<draggable v-model="myArray" :options="{group:'people'}" @start="drag" @end="drop" :move="checkMove" :key="">
   <div v-for="res in myArray">{{res.name}}</div>
</draggable>

</template>

<script>
import draggable from 'vuedraggable'
export default {
    components: {draggable,},
    data(){
        return{
            myArray:[
                {
                    name:'div1'
                },
                {
                    name:'div2'
                },
            ],
        }
    },
    method:{
          drag(){ // 拖动时候触发的函数
           
         },
          drop(e){  // 拖动结束的时候触发
            // 我个人用来取出移动后的下标，通过下标去做对数组重新排序
             console.log(e.newIndex)  // 拖拽后存放的下标
          }
    }       
}
</script>