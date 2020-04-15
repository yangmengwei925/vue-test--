<template>
  <div class="awaitClass">
    <h1>待批班级</h1>
    <div class="class_box">
      <div class="classA">
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%"
        >
          <el-table-column label="班级名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.grade_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="课程名">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="阅卷状态">
            <template>
              <span style="margin-left: 10px"></span>
            </template>
          </el-table-column>
          <el-table-column label="课程名称">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.subject_text }}</span>
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
import { addclass } from "../../../api/index";
import { studentList } from "../../../api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 20,
      dataLength: 20
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
    handleEdit(index,row) {
      // console.log(index,row.grade_name)
      let arrsd = row.grade_name
      // console.log(arrsd)
      this.$router.push({path:'/home/AwaitingApprovalClass/detail',query:{arrsd}})
    }
  },
  created() {
    addclass().then(res => {
      // console.log(res.data)
      this.tableData = res.data.data;
      this.dataLength = res.data.data.length;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.awaitClass {
  width: 100%;
  height: 100%;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
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
