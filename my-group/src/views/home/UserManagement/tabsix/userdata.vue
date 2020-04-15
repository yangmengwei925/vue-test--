<template>
  <div class="userdatacss">
    <p class="ziticss">
      <span>用户数据</span>
    </p>
    <div class="userBox">
      <el-table
        class="bottomma"
        :data="newarr.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        width="100%"
      >
        <el-table-column label="用户名">
            <template slot-scope="scope">
                <div>
                    {{scope.row.user_name}}
                </div>
            </template>
        </el-table-column>

        <el-table-column label="密码">
            <template slot-scope="scope">
                <div>
                    {{scope.row.user_pwd}}
                </div>
            </template>
        </el-table-column>

        <el-table-column label="身份">
            <template slot-scope="scope">
                <div>
                    {{scope.row.identity_text}}
                </div>
            </template>
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
  </div>
</template>

<script>
import { zhanshi } from "../../../../api/index.js";
export default {
  data() {
    return {
      newarr: [],
      currentPage: 1,
      DataLength: 6,
      pagesize: 6
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  created() {
    zhanshi().then(res => {
      this.newarr = res.data.data;
      this.DataLength = res.data.data.length;
    });
  }
};
</script>

<style scoped>
.userdatacss {
  width: 100%;
  height: 100%;
}
.ziticss span {
    height:50px;
  font-size: 27px;
  /* cursor: pointer; */
}
.userBox{
    width:100%;
    height:100%;
}
.bottomma {
    width:100%;
    min-height:100px;
}
.block {
  width: 100%;
  height: 50px;
  text-align: right;
}
</style>
