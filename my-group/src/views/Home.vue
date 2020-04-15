<template>
  <div id="home">
    <el-container>
      <el-header class="header">
        <img width="150px" height="50px" src="../assets/2.jpg"/>
        <p>
          <img class='xiao' :src='img' alt="">
          <!-- <img class="tou" src=""/> -->
        <el-dropdown>
  <span class="el-dropdown-link">
    <span>{{this.newloginname}}</span><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown" class='user'>
    <el-dropdown-item>个人中心</el-dropdown-item>
    <el-dropdown-item>我的班级</el-dropdown-item>
    <el-dropdown-item>设置</el-dropdown-item>
    <el-dropdown-item><span @click="quitlogin">退出登录</span></el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        
        <!-- <span class="user">mingzi</span> -->
        
        </p>
      </el-header>
      <el-container>
        <el-aside class="aside" width="205px" height="100%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu v-for="item in $store.state.Login.asideList" :key="item.id" :index="JSON.stringify(item.id+1)">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="item.id+1+'-'+val.id+1" v-for="val in item.children" :key="val.id" >
                  <router-link class="link" :to="val.path">{{val.name}}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link class="link" to="/home/addUser">添加用户</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link class="link" to="/home/UserShow">用户展示</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>考试管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <router-link class="link" to="/home/addTest">添加考试</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link class="link" to="/home/TestList">试卷列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <router-link class="link" to="/home/classmanage">班级管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <router-link class="link" to="/home/classroommanage">教室管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                  <router-link class="link" to="/home/studentmanage">学生管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-management"></i>
                <span>阅卷管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">
                  <router-link class="link" to="/home/AwaitingApprovalClass">待批班级</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import imgurl from '../../public/7.jpg'
export default {
  props: {},
  components: {},
  data() {
    return {
      newloginname:'',
      img:imgurl
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      quitlogin(){
        // console.log(123)
        this.$router.push('/login')
      }
  },
  created(){
    
    this.newloginname = localStorage.getItem('loginname')
  },
  mounted() {}
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
}
.link {
  color: #ccc;
}
.header{
  width:100%;
  background:#fff;
  position: fixed;
  top:0;
  left:0;
}
.aside{
  width:200px;
  padding-top:60px;
  position: fixed;
  top:0;
  left:0
}
.main{
  width:100%;
  height:100%;
  margin-left:200px;
  margin-top:60px;
  box-sizing: border-box;
  overflow-y: hidden;
}
.el-header {
  color: #333;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.19) !important;
  z-index: 100 !important;
}
.el-header p {
  width: 73%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.xiao{
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
}
.user {
  margin-left: 20px;
}

.el-aside {
  height: 100%;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
element.style {
  padding: 0;
}

.el-main {
  background: #f0f2f5;
  color: #333;
}
.el-container.is-vertical {
  height: 100%;
}
.el-menu-vertical-demo el-menu {
  height:100%;
}
.el-menu-vertical-demo.el-menu {
  height: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-dropdown-link {
  cursor: pointer;
  /* color: #409EFF; */
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>

