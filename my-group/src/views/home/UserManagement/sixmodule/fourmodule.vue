<template>
     <div class="popoutfour">
          <p>
            <el-button type="primary" plain>添加视图接口权限</el-button>
          </p>
          <p>
            <el-select v-model="view_authority_id" placeholder="请选择已有视图">
              <el-option
                v-for="item in options"
                :key="item.view_authority_id"
                :label="item.view_authority_text"
                :value="item.view_authority_id"
              ></el-option>
            </el-select>
          </p>
          <p>
            <el-button type="primary" @click="addviewPermission">确定</el-button>
            <el-button plain @click="deleteFn">重置</el-button>
          </p>
        </div>
</template>

<script>
import {gainviewpermission} from "../../../../api/index.js"
import {addview} from "../../../../api/index.js"
export default {
data () {
    return {
        options:[],
        view_authority_id:'',
        view_authority_text:'',
        
    }
},
methods: {
  addviewPermission(){
  addview(this.view_authority_id,this.view_authority_id).then((res)=>{
  if(res.data.code===1){
    this.$message('添加视图接口权限成功')
  }
})
  },
  deleteFn(){
    this.view_authority_id=''
  }
},
created() {
    gainviewpermission().then((res)=>{
        this.options = res.data.data
    })
},
}
</script>

<style scoped>
.popoutfour {
  width: 33.2%;
  height: 50%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutfour p {
  margin-left: 10px;
}
</style>
