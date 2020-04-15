<template>
  <div class="textType">
    <h1>查看试题</h1>
    <div class="elBox">
      <div class="classType">
        <p>课程类型：</p>
        <div>
          <span @click="allSubject" :class="flag?'active':''">All</span>
          <span
            v-for="(item,index) in tableData"
            :key="index"
            @click="dianji(index,item.subject_id)"
            :class="index==oSpan?'active':''||flag?'active':''"
          >{{item.subject_text}}</span>
        </div>
      </div>
      <div class="textT">
        <p>考试类型：</p>
        <el-select v-model="value1" placeholder class="elSelect" size="small">
          <el-option
            v-for="item in options1"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          ></el-option>
        </el-select>

        <p>题目类型：</p>
        <el-select v-model="value2" placeholder size="small">
          <el-option
            v-for="item in options2"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_id"
          ></el-option>
        </el-select>
        <el-button class="button" type="primary" icon="el-icon-search" @click="handlesearch">查询</el-button>
      </div>
    </div>
    <div class="textList">
      <div class="textList_box">
        <examAll :questionAll1="questionAll1"></examAll>
      </div>
    </div>
  </div>
</template>
<script>
import { subject } from "../../../api/index.js";
import { examType } from "../../../api/index.js";
import { getQuestionsType } from "../../../api/index.js";
import { question } from "../../../api/index.js";
import { conditions } from "../../../api/index.js";
import examAll from "../../../components/examAll.vue";
export default {
  props: {},
  components: {
    examAll
  },
  data() {
    return {
      tableData: [],
      options1: [],
      options2: [],
      value1: "",
      value2: "",
      questionAll: [],
      oSpan: "",
      spanValue: "",
      questions_id: "",
      flag: false
    };
  },
  computed: {
    questionAll1:function(){
      return this.questionAll.sort((x,y)=>{
        return x['user_name'].localeCompare(y['user_name'])
      })
    }
  },
  methods: {
    dianji(index, value) {
      console.log(value);
      this.oSpan = index;
      this.spanValue = value;
    },
    allSubject() {
      this.flag = !this.flag;
      // this.spanValue = ""
    },
    handlesearch() {
      console.log(this.flag)
      if (this.flag == true) {
        question().then(res => {
          this.questionAll = res.data.data;
        });
      }else{
      if (this.spanValue == "" && this.value1 == "" && this.value2 == "") {
        getQuestionsType().then(res => {
          this.options2 = res.data.data;
        });
      }
      var query = {
        subject_id: this.spanValue,
        exam_id: this.value1,
        questions_type_id: this.value2
      };
      conditions(query).then(res => {
        this.questionAll = res.data.data;
      });

      }
    }
  },
  created() {},
  mounted() {
    subject().then(res => {
      this.tableData = res.data.data;
    });
    examType().then(res => {
      this.options1 = res.data.data;
    });
    getQuestionsType().then(res => {
      // console.log(res)
      this.options2 = res.data.data;
    });
    question().then(res => {
      this.questionAll = res.data.data;
      console.log(this.questionAll);
    });
    // this.$bus.$on('question_id',(data)=>{
    //   console.log(data)
    // })
  }
};
</script>
<style scoped lang="scss">
.textType {
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
.elTable {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.elBox {
  width: 100%;
  margin: 10px auto;
  height: 223px;
  background: white;
  border-radius: 10px;
}
.textList {
  width: 100%;
  height: 100%;
  margin: 10px auto;
  background: white;
  border-radius: 10px;
}
.button {
  margin: 20px;
  width: 130px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}
.classType {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  p {
    width: 10%;
  }
  div {
    width: 100%;
    span {
      display: inline-block;
      padding: 4px;
      font-size: 13px;
      margin: 4px;
    }
  }
}
.textT {
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin: 0 auto;
}
.el-select--small {
  width: 200px;
  margin-right: 20px;
}
.textList_box {
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding-top: 30px;
}
.active {
  color: #fff;
  background: blue;
}
.examAll_box {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.examAll_box1 {
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding: 6px 0;
}
.examAll_box:hover {
  background: #f3f5ff;
}
.el-tag {
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  margin-right: 10px;
}
.bian {
  width: 100px;
  color: blue;
  text-align: center;
}
</style>