<template>
  <div class="students">
    <h1>学生管理</h1>
    <div class="checked">
      <el-input v-model="studentName" placeholder="输入学生姓名"></el-input>
      <el-select v-model="roomName" placeholder="请选择教室号">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.room_text"
          :value="item.room_text"
        ></el-option>
      </el-select>

      <el-select v-model="gradeName" placeholder="请选择班级名">
        <el-option
          v-for="(item,index) in options"
          :key="index"
          :label="item.grade_name"
          :value="item.grade_name"
        ></el-option>
      </el-select>
      <el-button type="primary" class='searchcss' @click="handlesearch">搜索</el-button>
      <el-button type="primary" class='searchcss' @click="chongzhi">重置</el-button>
    </div>
    <div class="list">
      <el-table
        class="elTable"
        :data="tableData20"
        style="width: 100%"
      >
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.student_name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="学号">
          <template slot-scope="scope">
            <p>{{scope.row.student_id}}</p>
          </template>
        </el-table-column>

        <el-table-column label="班级">
          <template slot-scope="scope">
            <p>{{scope.row.grade_name}}</p>
          </template>
        </el-table-column>

        <el-table-column label="教室">
          <template slot-scope="scope">
            <p>{{scope.row.room_text}}</p>
          </template>
        </el-table-column>

        <el-table-column label="密码">
          <template slot-scope="scope">
            <p>{{scope.row.student_pwd}}</p>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              class="delete"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

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
import { studentM } from "../../../api/index.js";
import { classAll } from "../../../api/index.js";
import { deleteStudent } from "../../../api/index.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      tableData20: [],
      options: [],
      studentName: "",
      roomName: "",
      gradeName: "",
      currentPage: 1,
      DataLength: 20,
      pagesize: 20
    };
  },
  computed: {},
  methods: {
    handleDelete(index, row) {
      deleteStudent(row.student_id).then(res => {
        studentM().then(res => {
          this.tableData = res.data.data;
          this.DataLength = res.data.data.length;
        });
      });
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pagesize = val;
      this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
    },
    handlesearch() {
      // console.log(this.tableData);
      if (
        this.studentName == "" &&
        this.roomName == "" &&
        this.gradeName == ""
      ) {
        studentM().then(res => {
          this.tableData = res.data.data;
          this.DataLength = res.data.data.length;
          this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
        });
      }else{
        studentM().then(res => {
        // console.log(res.data.data);
        this.tableData = res.data.data;
        this.DataLength = res.data.data.length;
        this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
        this.tableData20 = this.tableData.filter(item => {
                if (
                    (this.roomName === '' ? true : item.room_text === this.roomName) &&
                    (this.gradeName === '' ? true : item.grade_name === this.gradeName) &&
                    (this.studentName === '' ? true : item.student_name === this.studentName)
                ) {
                  this.DataLength = this.tableData20.length;
                    return item
                }
            });

      });
      }
    },
    chongzhi() {
      studentM().then(res => {//重置的话 重新渲染全部数据并清空input里的值
        this.tableData = res.data.data;
        this.DataLength = res.data.data.length;
        this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
        this.studentName = "";
        this.roomName = "";
        this.gradeName = "";
      });
    }
  },
  created() {
    //学生管理-添加学生（获取全部数据）
    studentM().then(res => {
      // console.log(res.data.data);
      this.tableData = res.data.data;
      this.DataLength = res.data.data.length;
      this.tableData20 = this.tableData.slice((this.currentPage-1)*this.pagesize,this.currentPage*this.pagesize)
    });
    //学生管理-获取全部班级
    classAll().then(res => {
      // console.log(res.data.data);
      this.options = res.data.data;
    });
  },
  mounted() {}
};
</script>

<style>
.students {
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
.checked {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.el-input {
  width: 200px;
  height: 32px;
}
.el-input__inner {
  height: 32px;
}
.el-button--primary {
  width: 111px;
  height: 32px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}
.list {
  margin-top: 20px;
}
.block {
  text-align: right;
}
.elTable {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.searchcss{
  width: 100px;
  height: 35px;
line-height: 7px;
}
</style>