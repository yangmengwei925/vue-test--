<template>
    <div class='userdatacss'>
       <p class='ziticss'><span>身份和视图权限的关系</span></p>
      <el-table 
        class="bottomma"
        :data="newarr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      
        <el-table-column
        prop="identity_text"
        label="身份"
       >
      </el-table-column> 

        <el-table-column
        prop="view_authority_text"
        label="视图名称"
       >
      </el-table-column>  

       <el-table-column
        prop="view_id"
        label="视图id">
      </el-table-column> 
     
      
    </el-table>
<div class="block">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        layout="total, prev, pager, next,sizes, jumper"
        :page-size="pagesize"
        :page-sizes="[5, 10, 20, 50,100]"
        :total="DataLength"
      ></el-pagination>
    </div>
        </div>
</template>

<script>
import {bodyandviewguanxi} from '../../../../api/index.js'

export default {
    data() {
        return {
            newarr:[],
            currentPage: 1,
            DataLength: 8,
            pagesize: 8
        }
    },
     methods: {
    handleSizeChange(val){
        this.pagesize = val
    },
    handleCurrentChange(val){
        this.currentPage = val
    }
    },
created() {
    bodyandviewguanxi().then((res)=>{
        console.log(res)
        this.newarr = res.data.data
    })
},
}
</script>

<style scoped>
.userdatacss{
width: 100%;
height: 100%;
}
.ziticss span{
    font-size: 27px;
}
.bottomma{
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.block{
    text-align: right;
}
</style>
