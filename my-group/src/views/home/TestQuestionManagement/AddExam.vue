<template>
  <div class="addBox">
    <h1>添加试题</h1>
    <div class="box">
      <div>
        <div class="onemeng">
          <span class="h3one">题目信息</span>
          <h3 class="h3two">题干</h3>
        </div>
        <el-input class="iptvalue" v-model="input2" placeholder="请输入题目标题,不超过20个字"></el-input>
      </div>
      <div class="theme">
        <div>
          <span>题目主题</span>
        </div>
          <div class="iptzhi">
        <mavon-editor v-model="title2"/>
      </div>
        <!-- <div>
          <textarea class="iptzhi" v-model="title2" name id cols="30" rows="10"></textarea>
        </div> -->
      </div>
      <div class="selectTheme">
        <div class="testType">
          <p>
            <span>请选择考试类型:</span>
          </p>
          <el-select v-model="exam_name" placeholder="请选择" class="downcss">
            <el-option
              v-for="item in options"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </div>
        <div class="classType">
          <p>
            <span>请选择课程类型:</span>
          </p>
          <el-select v-model="subject_text" placeholder="请选择" class="downcss">
            <el-option
              v-for="item in options2"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>
        <div class="topicType">
          <p>
            <span>请选择题目类型:</span>
          </p>
          <el-select v-model="questions_type_text" placeholder="请选择" class="downcss">
            <el-option
              v-for="item in options3"
              :key="item.questions_type_id"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
        </div>
        <div class="answer">
          <div>
            <span>答案信息</span>
          </div>
          
          <div class="iptzhi">
            <mavon-editor v-model="iptanswer"/>
            <!-- <textarea  v-model="iptanswer" name id cols="30" rows="10"></textarea> -->
          </div>
        </div>
        <div class="submit">
          <el-button type="primary" @click="submitTest">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { examType } from "../../../api/index.js";
import { subject } from "../../../api/index.js";
import { getQuestionsType } from "../../../api/index.js";
import { addtestquestions } from "../../../api/index.js";
import {yonghuid} from '../../../api/index.js'
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import {updatetest} from '../../../api/index.js'
export default {
  components:{
    mavonEditor
  },
  data() {
    return {
        user_id: "",//用户id
        input2: "",//试题的标题
        title2: "",//题干
        iptanswer: "",//题目答案
        options: [],
        options2: [],
        options3: [],
        exam_name: "",//考试类型id
        subject_text: "",//课程id
        questions_type_text: "",//试题类型id,
        // type:'addQuestions/addQuestions',
    };
  },
  
  methods: {
    submitTest() {
      addtestquestions(
        // this.type,
        this.questions_type_text,
        this.title2,
        this.subject_text,
        this.exam_name,
        this.user_id,
        this.iptanswer,
        this.input2
      ).then(res => {
        console.log(res);
        if (res.data.code === 1) {
          this.$message("试题添加成功");
        }
      });
    }
  },
  created() {
    // this.user_id = localStorage.getItem("loginname");
    examType().then(res => {
      console.log(res)
      this.options = res.data.data;
    });
    subject().then(res => {
      console.log(res)
      this.options2 = res.data.data;
    });
    getQuestionsType().then(res => {
      console.log(res)
      this.options3 = res.data.data;
    });
    yonghuid().then((res)=>{
      // console.log(res.data.data)
      res.data.data.map((item,index)=>{
        // console.log(item.user_id)
        this.user_id = item.user_id
      })
    })
  }
};
</script>

<style>
.el-main {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
.submit {
  padding: 20px;
}
.addBox {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.box {
  width: 96%;
  margin-left: 15px;
  height: 100%;
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
.iptzhi {
  width: 100%;
  height: 100%;
  margin-top: 10px;
}
.theme {
  padding: 20px;
}
.answer {
  padding: 20px;
}
.iptvalue {
  width: 30%;
  margin-left: 20px;
}
.onemeng {
  padding: 20px;
}
.h3one {
  font-size: 17px;
}
.h3two {
  margin-top: 10px;
}
h3 {
  font-size: 17px;
  font-weight: 500;
}
.downcss {
  margin-top: 10px;
}

.testType {
  padding: 20px;
}
.classType {
  padding: 20px;
}

.topicType {
  padding: 20px;
}
</style>
