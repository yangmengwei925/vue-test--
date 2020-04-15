<template>
   <div class='bodydatacss'>
       <p class='ziticss'><span>视图接口权限</span></p>
         <el-table 
       class="bottomma"
      :data="newarr.slice((currentPage-1)*pagesize,currentPage*pagesize)"

      style="width: 100%">
      
        <el-table-column
        prop="view_authority_text"
        label="视图权限名称"
       >
      </el-table-column> 

        <el-table-column
        prop="view_id"
        label="视图id"
       >
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
import {gainviewpermission} from '../../../../api/index.js'
export default {
 data () {
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
     gainviewpermission().then((res)=>{
         console.log(res)
         this.newarr = res.data.data
     })
 },
}
</script>

<style scoped>
.bodydatacss{
width: 100%;
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
    height: auto;
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
.block{
    text-align: right;
}
</style>
