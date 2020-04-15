<template>
     <div class="popoutsix">
          <p>
            <el-button type="primary" plain>给身份设置视图权限</el-button>
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
            <el-select v-model="view_authority_id" placeholder="请选择视图权限id">
              <el-option
                v-for="item in options2"
                :key="item.view_authority_id"
                :label="item.view_authority_text"
                :value="item.view_authority_id"
              ></el-option>
            </el-select>
          </p>
          <p>
            <el-button type="primary" @click="bodyviewFn">确定</el-button>
            <el-button plain @click="deleteFn">重置</el-button>
          </p>
        </div>
</template>

<script>
import {gainbody} from "../../../../api/index.js"
import {gainviewpermission} from "../../../../api/index.js"
import {addbodyview} from "../../../../api/index.js"

export default {
data () {
    return {
        options:[],
        identity_id:'',
        options2:[],
        view_authority_id:'',
        
    }
},
methods: {
  bodyviewFn(){
  addbodyview(this.identity_id,this.view_authority_id).then((res)=>{
    console.log(res.data.code)
    if(res.data.code===1){
    this.$message('给身份设置视图权限成功')
    }
})
  },
  deleteFn(){

  }
},
created () {
    gainbody().then((res)=>{
        this.options = res.data.data
    })
    gainviewpermission().then((res)=>{
        this.options2 = res.data.data
    })
}
}
</script>

<style scoped>
.popoutsix {
  width: 33.2%;
  height: 50%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutsix p {
  margin-left: 10px;
}
</style>
