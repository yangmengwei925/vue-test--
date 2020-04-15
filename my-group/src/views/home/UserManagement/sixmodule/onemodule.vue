<template>
  <div class="wrap">
    <div class="popoutOne" v-if="flag">
      <p>
        <el-button type="primary" plain>添加用户</el-button>
        <el-button plain @click="changeview">更新用户</el-button>
      </p>
      <p class="popoutiptone">
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </p>
      <p class="popoutipttwo">
        <el-input v-model="input2" placeholder="请输入密码"></el-input>
      </p>
      <p>
        <el-select v-model="identity_id" placeholder="请选择身份id">
          <el-option
            v-for="item in options"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_id"
          ></el-option>
        </el-select>
      </p>
      <p>
        <el-button type="primary" @click="adduserFn">确定</el-button>
        <el-button plain @click="deleteFn">重置</el-button>
      </p>
    </div>

    <div class="popsecound" v-if="flag2">
      <p class='updateusercss'>
        <el-button type="primary" plain @click="adduseuser">添加用户</el-button>
        <el-button plain>更新用户</el-button>
      </p>
      <p class='selectusercss'>
        <el-select v-model="user_id" placeholder="请选择身份id">
          <el-option
            v-for="item in options2"
            :key="item.user_id"
            :label="item.user_name"
            :value="item.user_id"
          ></el-option>
        </el-select>
      </p>
      <p class="popoutiptone1">
        <el-input v-model="input3" placeholder="请输入用户名"></el-input>
      </p>
      <p class="popoutipttwo2">
        <el-input v-model="input4" placeholder="请输入密码"></el-input>
      </p>
      <p class='selectbodycss'>
        <el-select v-model="identity_id" placeholder="请选择身份id">
          <el-option
            v-for="item in options"
            :key="item.identity_id"
            :label="item.identity_text"
            :value="item.identity_id"
          ></el-option>
        </el-select>
      </p>
      <p class='buttoncss'>
        <el-button type="primary" @click="updateuser">确定</el-button>
        <el-button plain @click="deleteFn">重置</el-button>
      </p>
    </div>
  </div>
</template>

<script>
import { gainbody } from "../../../../api/index.js";
import { adduser } from "../../../../api/index.js";
import { showuser } from "../../../../api/index.js";
import { updateuserFn } from "../../../../api/index.js";

export default {
  data() {
    return {
      options: [],
      input: "",
      input2: "",
      identity_id: "",
      flag: true,
      flag2: false,
      options2: [],
      user_id: "",
      input3:'',
      input4:''
    };
  },
  methods: {
    adduserFn() {
      adduser(this.input, this.input2, this.identity_id).then(res => {
        if (res.data.code === 1) {
          this.$message("用户添加成功");
        }
      });
    },
    deleteFn() {
      this.input = "";
      this.input2 = "";
      this.identity_id = "";
       this.input3 = "";
      this.input4 = ""
      this.user_id=''
    },
    changeview() {
      this.flag = !this.flag;
      this.flag2 = !this.flag2;
      this.identity_id=''
    },
    adduseuser() {
      this.flag = !this.flag;
      this.flag2 = !this.flag2;
      this.identity_id=''
    },
    updateuser() {
      updateuserFn(this.user_id,this.input3,this.input4,this.identity_id).then((res)=>{
        if(res.data.code===1){
        location.reload([this.bForceGet=true])
        this.$message("用户更新成功");
    }
      })

    }
  },
  created() {
    gainbody().then(res => {
      this.options = res.data.data;
    });
    showuser().then(res => {
      this.options2 = res.data.data;
    });
  }
};
</script>

<style scoped>
.wrap {
  width: 33.2%;
  height: 250px;
}
.popoutOne {
  width: 100%;
  height: 250px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutOne p {
  margin-left: 10px;
}
.popoutiptone {
  width: 96%;
}
.popoutipttwo {
  width: 96%;
}
.popoutiptone1 {
  width: 96%;
  height: 30px;
}
.popoutipttwo2 {
  width: 96%;
  height: 30px;
}
.selectusercss{
  height: 30px;  
}
.selectbodycss{
  height: 30px;  
}
.buttoncss{
  margin-top:5px;
}
.popsecound {
  width: 100%;
  height: 250px;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popsecound p {
  margin-left: 10px;
}
.popoutiptone {
  width: 96%;
}
.popoutipttwo {
  width: 96%;
}
</style>
