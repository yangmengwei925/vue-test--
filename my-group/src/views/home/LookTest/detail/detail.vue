<template>
  <div class="awaitClass">
    <div class="class_box">
      <div class="classA">
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
        >
          <el-table-column label="班级名">
            <template>
              <span style="margin-left: 10px">{{ this.newclass }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.student_name }}</span>
            </template>
          </el-table-column>
            <el-table-column label="阅卷状态">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.status ==='0'?'已阅':'未阅' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="开始时间">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="结束时间">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.end_time }}</span>
            </template>
          </el-table-column>
           <el-table-column label="成材率">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.room_text }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">批卷</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <el-pagination
          class="block"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :current-page="currentPage"
          layout="total,prev, pager,next,sizes,jumper"
          :page-size="pagesize"
          :page-sizes="[5, 10, 20, 50,100]"
          :total="dataLength"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { studentList } from "../../../../api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 10,
      dataLength:10,
      newclass:''
    };
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    handleEdit() {}
  },
  created() {
    // addclass().then(res => {
    //   this.tableData = res.data.data;
    //   this.dataLength = res.data.data.length;
    // });
     studentList().then(res=>{
      this.tableData =res.data.exam;
      console.log(this.tableData)
      this.dataLength = res.data.exam.length;
      })
    //  console.log(this.$route.query.arrsd)
     this.newclass = this.$route.query.arrsd
  },
  
  mounted() {
  }
};


</script>
<style scoped lang="scss">
.awaitClass {
  width: 100%;
  height: 100%;
}
.class_box {
  width: 94%;
  min-height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background: white;
}
.classA {
  width: 94%;
  min-height: 500px;
  margin: 0 auto;
  border-radius: 10px;
  background: white;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
}
.block {
  text-align: right;
  margin: 20px 0;
}
</style>
