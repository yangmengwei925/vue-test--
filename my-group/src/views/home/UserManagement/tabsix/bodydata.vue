<template>
     <div class='bodydatacss'>
       <p class='ziticss'><span>身份数据</span></p>
         <el-table 
           class="bottomma"
           :data="newarr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%">
      
        <el-table-column
        prop="identity_text"
        label="管理员"
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
import {gainbody} from '../../../../api/index.js'
export default {
    data() {
        return {
            newarr:[],
            currentPage: 1,
            DataLength:5,
            pagesize: 5
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
    gainbody().then((res)=>{
        this.newarr = res.data.data 
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

.bottomma{
    width: 100%;
    min-height:100px;
    display: flex;
    flex-direction: column;
}
.block{
    text-align: right;
}

</style>
