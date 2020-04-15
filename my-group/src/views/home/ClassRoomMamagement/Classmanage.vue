<template>
  <div class="classRoom">
    <h1>班级管理</h1>
    <div class="box">
      <el-button class="button" type="primary" icon="el-icon-plus" @click="addclassFn">添加班级</el-button>
      <div>
        <el-table :data="tableData" style="width: 100%" class="elTable">
          <el-table-column label="班级名">
            <template slot-scope="scope">
              <p>{{ scope.row.grade_name }}</p>
            </template>
          </el-table-column>

          <el-table-column label="课程名">
            <template slot-scope="scope">
              <p>{{ scope.row.subject_text }}</p>
            </template>
          </el-table-column>

          <el-table-column label="教室号">
            <template slot-scope="scope">
              <p>{{ scope.row.room_text }}</p>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="open(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="popout" v-show="flag">
      <div class="popout2">
        <p class="addnewcss">
          <span>添加班级</span>
          <span @click="cancel">X</span>
        </p>
        <div class="classname">
          <p class="active">
            <span>*</span>
            <span>班级名:</span>
          </p>
          <p>
            <el-input v-model="input1" placeholder="班级名"></el-input>
          </p>
        </div>
        <div class="jiaoshi2">
          <p class="active">
            <span>*</span>
            <span>教室号:</span>
          </p>
          <el-select v-model="room_id" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.room_id"
              :label="item.room_text"
              :value="item.room_id"
            ></el-option>
          </el-select>
        </div>
        <div class="cname">
          <p class="active">
            <span>*</span>
            <span>课程名:</span>
          </p>
          <el-select v-model="subject_id" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>

        <p class="subdele2">
          <button @click="cancel">取消</button>
          <el-button type="primary" @click="submitFn">提交</el-button>
        </p>
      </div>
    </div>

    <div class="changePopout" v-show="flag2">
      <div class="changePopout2">
        <p class="addnewcss">
          <span>添加班级</span>
          <span @click="cancelChange">X</span>
        </p>
        <div class="classname">
          <p class="active">
            <span>*</span>
            <span>班级名:</span>
          </p>
          <p>
            <el-input v-model="haveValue" disabled="disabled" placeholder="班级名" class="stopipt"></el-input>
          </p>
        </div>
        <div class="jiaoshi2">
          <p class="active">
            <span>*</span>
            <span>教室号:</span>
          </p>
          <el-select v-model="room_id" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.room_id"
              :label="item.room_text"
              :value="item.room_id"
            ></el-option>
          </el-select>
        </div>
        <div class="cname">
          <p class="active">
            <span>*</span>
            <span>课程名:</span>
          </p>
          <el-select v-model="subject_id" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>

        <p class="subdele2">
          <button @click="cancelChange">取消</button>
          <el-button class='updatebtn' type="primary" @click="newsubmit">提交</el-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { addclass } from "../../../api/index.js";
import { newAddclass } from "../../../api/index.js";
import { Deleteclass } from "../../../api/index.js";
import { GainFn } from "../../../api/index.js";
import { subject } from "../../../api/index.js";
import { Gainaddclass } from "../../../api/index.js";
import { ChangeclassMessage } from "../../../api/index.js";

export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: [],
      dialog: true,
      flag: false,
      input1: "",
      options: [],
      options2: [],
      room_id: "",
      subject_id: "",
      haveValue: "",
      flag2: false,
      classid: ""
    };
  },
  computed: {},
  methods: {
    open(index,row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            Deleteclass(row.grade_id).then(res => {
        if (res.data.code === 1) {
          addclass().then(res => {
            this.tableData = res.data.data;
          });
        }
          });
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
    cancelChange() {
      this.flag2 = false;
    },
    newsubmit() {
      ChangeclassMessage(
        this.classid,
        this.haveValue,
        this.subject_id,
        this.room_id
      ).then(res => {
        if (res.data.code === 1) {
          addclass().then(res => {
            this.tableData = res.data.data;
          });
        }
      });
      this.flag2 = false;
    },
    submitFn() {
      newAddclass(this.input1, this.room_id, this.subject_id).then(res => {
        if (res.data.code === 1) {
          addclass().then(res => {
            this.tableData = res.data.data;
          });
        }
      });
      this.flag = false;
    },
    cancel() {
      this.flag = false;
    },
    addclassFn() {
      this.flag = true;
    },
    handleEdit(index, row) {
      // console.log(index, row,'qweqwe');
      Gainaddclass().then(res => {
        this.classid = res.data.data[index].grade_id;
        this.haveValue = res.data.data[index].grade_name;
      });
      this.flag2 = true;
    },
  },
  created(){
    addclass().then(res => {
      this.tableData = res.data.data;
    });
    GainFn().then(res => {
      this.options = res.data.data;
    }),
      subject().then(res => {
        console.log(res);
        this.options2 = res.data.data;
      });
  },
  mounted() {}
};
</script>

<style>
.updatebtn{
  height: 42px;
  line-height: 20px;
}
.addnewcss {
  width: 90%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.stopipt {
  background: #ccc;
}
.classname {
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}
.jiaoshi2 {
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}
.cname {
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
}
.changePopout {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
.changePopout2 {
  position: absolute;
  left: 35%;
  top: 150px;
  width: 500px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.popout {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
.popout2 {
  position: absolute;
  left: 35%;
  top: 150px;
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
.subdele2 {
  margin: 0 auto;
}
.active {
  margin-bottom: 10px;
}
.active span:nth-child(1) {
  color: red;
  font-size: 20px;
}
.subdele2 button:nth-child(1) {
  width: 50px;
  height: 40px;
  background: #fff;
  border: 1px solid #ccc;
  margin-right: 10px;
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
.box {
  width: 96%;
  margin: 0 auto;
  height: 100%;
  background: #fff;
  border-radius: 10px;
}
.button {
  margin: 20px;
  width: 150px;
  padding: 7px 0;
  height: 40px;
}
.tankuang {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}
.modleBox {
  width: 50%;
  height: 540px;
  background: white;
  margin: 60px auto;
}
.elTable {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>