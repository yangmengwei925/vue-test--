<template>
      <div class="popoutTwo">
          <p>
            <el-button type="primary" plain>添加身份</el-button>
          </p>
          <p class="popoutiptthree">
            <el-input v-model="input" placeholder="请输入身份名称"></el-input>
          </p>
          <p>
            <el-button type="primary" @click="addbodyFn">确定</el-button>
            <el-button plain @click="deleteFn">重置</el-button>
          </p>
        </div>
</template>

<script>
import {addbody} from "../../../../api/index.js"
export default {
data () {
    return {
        input:'',
    }
},
methods: {
    addbodyFn(){
        addbody(this.input).then((res)=>{
            if(res.data.code===1){
        this.$message('身份添加成功')
    }
        })
    },
    deleteFn(){
      this.input=''
    }
},
}
</script>

<style scoped>
.popoutTwo {
  width: 33.2%;
  height: 50%;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popoutiptthree {
  width: 96%;
}
.popoutTwo p {
  margin-left: 10px;
}
</style>
