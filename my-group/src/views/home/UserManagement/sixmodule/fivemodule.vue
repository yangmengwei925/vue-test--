<template>
     <div class="popoutfive">
          <p>
            <el-button type="primary" plain>给身份设置api接口权限</el-button>
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
            <el-select v-model="api_authority_id" placeholder="请选择api接口权限">
              <el-option
                v-for="item in options2"
                :key="item.api_authority_id"
                :label="item.api_authority_text"
                :value="item.api_authority_id"
              ></el-option>
            </el-select>
          </p>
          <p>
            <el-button type="primary" @click="settingPermissionFn">确定</el-button>
            <el-button plain @click="deleteFn">重置</el-button>
          </p>
        </div>
</template>

<script>
import {gainbody} from "../../../../api/index.js"
import {apiportPermission} from "../../../../api/index.js"
import {settingPermission} from "../../../../api/index.js"

export default {
data () {
    return {
        options:[],
        options2:[],
        api_authority_id:'',
        identity_id:'',
        
    }
},
methods: {
  settingPermissionFn(){
    settingPermission(this.identity_id,this.api_authority_id).then((res)=>{
      if(res.data.code===1){
        this.$message('给身份设置api接口权限成功')
    }
    })
  },
  deleteFn(){
    this.api_authority_id=''
    this.identity_id=''
  }
},
created () {
    gainbody().then((res)=>{
        this.options = res.data.data
    })
    apiportPermission().then((res)=>{
        this.options2 = res.data.data
    })
}
}
</script>

<style scoped>
.popoutfive {
  width: 33.2%;
  height: 50%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutfive p {
  margin-left: 10px;
}
</style>
