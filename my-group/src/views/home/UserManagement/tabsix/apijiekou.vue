<template>
   <div class='bodydatacss'>
       <p class='ziticss'><span>api接口权限</span></p>
         <el-table 
       class="bottomma"
        :data="newarr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
        <el-table-column
        prop="api_authority_text"
        label="api权限名称"
       >
      </el-table-column> 

        <el-table-column
        prop="api_authority_url"
        label="api权限url"
       >
      </el-table-column>  

       <el-table-column
        prop="api_authority_method"
        label="api权限方法">
      </el-table-column> 
    </el-table>
    <el-pagination class="block"
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
</template>

<script>
import {apiportPermission} from "../../../../api/index.js"
export default {
    data () {
        return {
            newarr:[],
            currentPage: 1,
            DataLength: 10,
            pagesize: 10
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
    apiportPermission().then((res)=>{
        this.newarr = res.data.data
        console.log(this.newarr)
        this.DataLength = res.data.data.length
    })
},
}
</script>

<style scoped>
.bodydatacss{
width: 100%;
height: 100%;
}
.ziticss span{
    font-size: 27px;
}
.navwhite{
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.bottomma{
    width: 100%;
    min-height:100px;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
.bottomma p{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom:1px solid #ccc;
}
.block {
  text-align: right;
}
</style>
