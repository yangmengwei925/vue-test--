<template>
  <div class="classRoom">
    <h1>教室管理</h1>
    <div class="box">
      <el-button class="button" type="primary" icon="el-icon-plus" @click="addClassFn">添加教室</el-button>
        <div class="classBox">
        <el-table :data="tableData" style="width: 100%" class="leione">
            <el-table-column label="教室号">
            <template slot-scope="scope">
                <p class='leitwo'>{{ scope.row.room_text }}</p>
            </template>
            </el-table-column>

            <el-table-column label="操作" width="150">
            <template slot-scope="scope">
                <el-button size="mini" type="danger" @click='open(scope.$index, scope.row)'>删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
    </div>
    <div class="tan" v-show='flag'>
        <div class="tan2">
            <p class='addcss'><span>添加班级</span> <span @click='cancel'>X</span></p>
            <div class="jiaoshi">
            <p class='red'><span>*</span><span>教室号</span></p>
            <p><el-input v-model="input2" placeholder="教室名"></el-input></p>
            </div>
            
            <p class='subdele'>
                <button @click="cancel">取消</button>
                <el-button type="primary" @click="submitFn">提交</el-button>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import {acquireClassroom} from "../../../api/index.js"
import {addClassroom} from "../../../api/index.js"
import {DeleteFn} from "../../../api/index.js"
export default {
    data () {
        return {
            tableData:[],
            input2:'',
            flag:false
        }
    },
methods:{
    open(index, row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             DeleteFn(row.room_id).then((res)=>{
           if(res.data.code===1){
              acquireClassroom().then((res)=>{
            // console.log(res.data.data)
            this.tableData = res.data.data
            }) 
          }
        })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
    addClassFn(){
        this.flag = true
    },
    cancel(){
        this.flag=false
    },
    submitFn(){
        addClassroom(this.input2).then((res)=>{
        //   console.log(res.data.code)
          if(res.data.code===1){
              acquireClassroom().then((res)=>{
            // console.log(res.data.data)
            this.tableData = res.data.data
            }) 
          }
        })
        this.flag=false
    }
},
created () {
     acquireClassroom().then((res)=>{
        // console.log(res.data.data)
        this.tableData = res.data.data
    })
}
}
</script>

<style>
.jiaoshi{
    width: 90%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin:0 auto;
}
.subdele{
    margin:0 auto;
}
.subdele button:nth-child(1){
    width: 50px;
    height: 40px;
    background: #fff;
    border:1px solid #ccc;
    margin-right: 10px;

}
.red{
    margin-bottom:10px;
}
.red span:nth-child(1){
    color:red;
    font-size: 20px;
}
.addcss{
    width: 90%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
}
.tan{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top:0;
    left: 0;
}
.tan2{
    position: absolute;
    left: 35%;
    top:150px;
    width: 500px;
    height: 400px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.classRoom {
  width: 100%;
  height: 100%;
}
.cell{
    margin-left: 20px;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
h3 {
  font-weight: 500;
}
.leione{
display: flex;
flex-direction: column;
}

.box {
  width: 96%;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  position: relative

}
.button {
  margin: 20px;
  width: 150px;
  padding: 7px 0;
  height: 40px;
}
.classBox{
    width:90%;
    margin: 0 auto;
    height:100%;
    display:flex;
    justify-content: space-between;
}
</style>
