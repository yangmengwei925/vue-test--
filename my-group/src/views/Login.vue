<template>
  <div class="wrap">
    <div class="box">
      <div>
        <el-input v-model="user_name" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="user_pwd" show-password></el-input>
      </div>
      <div class="mima">
        <p>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </p>
        <p @click="forgetFn">忘记密码</p>
      </div>
      <div>
        <el-button type="primary" @click="loginFn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import cookie from "js-cookie";
import { Login } from "../api/index.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      user_name: "",
      user_pwd: "",
      checked: false,
      newloginname:''
    };
  },
  computed: {},
  methods: {
    loginFn() {
        if(this.checked===true){
      localStorage.setItem('name',this.user_name)
      localStorage.setItem('pwd',this.user_pwd)
        }
      Login(this.user_name, this.user_pwd).then(res => {
        console.log(res);
        this.newloginname = JSON.parse(res.config.data).user_name
        localStorage.setItem('loginname',this.newloginname)
        if (res.data.code === 1) {
          cookie.set("token", res.data.token);
            this.$store.dispatch('Login/getUserInfo');
            this.$router.push("/home");
           window.location.reload(); 
        }
      });
    },
    forgetFn() {
      this.user_name = "";
      this.user_pwd = "";
      this.checked = false;
    }
  },
  created() {
      this.user_name = localStorage.getItem('name')
      this.user_pwd =  localStorage.getItem('pwd')
  },
  mounted() {}
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: url("../assets/1.jpg");
  background-size: cover;
}
.box {
  width: 380px;
  height: 270px;
  background: #fff;
  border-radius: 5px;
  position: fixed;
  left: 60%;
  top: 20%;
}
.mima {
  width: 80%;
  margin: 0 auto;
}
div {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.el-input {
  width: 100%;
}
.el-button--primary {
  width: 100%;
  border-radius: 5px;
}
</style>

