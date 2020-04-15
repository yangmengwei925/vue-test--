<template>
     <div class="popoutThree">
          <p>
            <el-button type="primary" plain>添加api接口权限</el-button>
          </p>
          <p class="popoutiptfour">
            <el-input v-model="input" placeholder="请输入api接口权限名称"></el-input>
          </p>
          <p class="popoutiptfive">
            <el-input v-model="input2" placeholder="请输入api接口权限url"></el-input>
          </p>
          <p class="popoutiptsix">
            <el-input v-model="input3" placeholder="请输入api接口权限方法"></el-input>
          </p>
          <p>
            <el-button type="primary" @click="addPermissionFn">确定</el-button>
            <el-button plain @click="deleteFn">重置</el-button>
          </p>
        </div>
</template>

<script>
import {addPermission} from "../../../../api/index.js"
export default {
data () {
    return {
        input:'',
        input2:'',
        input3:'',
    }
},
methods: {
  addPermissionFn(){
  addPermission(this.input,this.input2,this.input3).then((res)=>{
    if(res.data.code===1){
    this.$message('添加api接口权限成功')
    }
})
  },
  deleteFn(){
    this.input=''
    this.input2=''
    this.input3=''
  }
}
}
</script>

<style scoped>
.popoutThree {
  width: 33.2%;
  height: 50%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutThree p {
  margin-left: 10px;
}
.popoutiptfour {
  width: 96%;
}
.popoutiptfive {
  width: 96%;
}
.popoutiptsix {
  width: 96%;
}
</style>
