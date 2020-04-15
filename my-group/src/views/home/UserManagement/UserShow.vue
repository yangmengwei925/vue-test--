<template>
    <div class='wrapper'>
        <p class='usershow'><span>用户展示</span></p>
        <div class="navhead">
            <!-- <span v-for="(item,index) in data" :key='index' :class="[ind===index?'active':'']" @click="cssstyle(index)">{{item}}</span> -->
          <router-link tag='span' to='/home/UserShow/userdata'>用户数据</router-link>
          <router-link tag='span' to='/home/UserShow/bodydata'>身份数据</router-link>
          <router-link tag='span' to='/home/UserShow/apijiekou'>api接口权限</router-link>
          <router-link tag='span' to='/home/UserShow/bodyandapi'>身份和api接口关系</router-link>
          <router-link tag='span' to='/home/UserShow/viewjiekou'>视图接口权限</router-link>
          <router-link tag='span' to='/home/UserShow/bodyandview'>身份和视图权限关系</router-link>
        </div>
        <div class='mainmanage'>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{
    },
    data(){
        return {
                ind:0,
        }
    },
    computed:{

    },
    methods:{
        cssstyle(index){
            this.ind = index
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped>
.wrapper {
  width: 100%;
  height:100%;
  background: #f0f2f5;
}
.usershow{
    margin:30px 25px;
}
.usershow span{
    font-size: 22px;
}
.navhead{
    width: 870px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    border:1px solid #ccc;
    margin:20px 30px;
}
.navhead span{
    border-right: 1px solid #ccc;
    flex-grow:1;
    text-align: center;
}
.navhead span:nth-child(6){
    border:0;
}
.active{
    height: 30px;
    border:1px solid blue;
    color:blue;
    line-height: 30px;
}
.mainmanage{
    margin:10px 30px;
    width: 94%;
    height: 100%;
}

</style>