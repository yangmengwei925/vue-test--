<template>
  <div class="textType">
    <h1>试题分类</h1>
    <div class="typeBox">
      <el-button class="button" type="primary" icon="el-icon-plus">添加类型</el-button>
      <div class="elBox">
        <el-table :data="tableData" style="width: 100%" class="elTable">
          <el-table-column label="类型ID">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.questions_type_id }}</span>
            </template>
          </el-table-column>

          <el-table-column label="类型名称">
            <template slot-scope="scope">
              <p>{{scope.row.questions_type_text}}</p>
            </template>
          </el-table-column>

          <el-table-column label="操作"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { getQuestionsType } from "../../../api/index.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  computed: {},
  methods: {},
  created() {
    getQuestionsType().then(res => {
      console.log(res.data.data);
      this.tableData = res.data.data;
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.textType {
  width: 100%;
  height: 100%;
}
.typeBox {
  width: 96%;
  margin: 0 auto;
  height: 434px;
  background: #fff;
  border-radius: 10px;
}
h1 {
  height: 70px;
  line-height: 70px;
  margin-left: 2%;
  font-size: 23px;
  font-weight: 500;
}
.elTable {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.elBox{
    width:90%;
    margin:10px auto;
}
.button {
  margin: 20px;
  width: 180px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}
</style>