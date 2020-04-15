<template>
  <div class="addBox">
    <h1>编辑试题</h1>
    <div class="box">
      <div>
        <div class="onemeng">
          <span class="h3one">题目信息</span>
          <h3 class="h3two">题干</h3>
        </div>
        <el-input class="iptvalue" v-model="title" placeholder="请输入题目标题,不超过20个字"></el-input>
      </div>
      <div class="theme">
        <div>
          <span>题目主题</span>
        </div>
        <div>
          <textarea class="iptzhi" v-model="questions_stem" name id cols="30" rows="10"></textarea>
        </div>
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
              :value="item.exam_name"
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
              :value="item.subject_text"
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
              :value="item.questions_type_text"
            ></el-option>
          </el-select>
        </div>
        <div class="answer">
          <div>
            <span>答案信息</span>
          </div>
          <div>
            <textarea class="iptzhi" v-model="questions_answer" name id cols="30" rows="10"></textarea>
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
import { examType } from "../../../../api/index.js";
import { subject } from "../../../../api/index.js";
import { getQuestionsType } from "../../../../api/index.js";
import { upData } from "../../../../api/index.js";
export default {
  data() {
    return {
      user_name: "w916peach",
      options: [],
      options2: [],
      options3: [],
      exam_id: "",
      exam_name: "",
      questions_answer: "",
      questions_id: "",
      questions_stem: "",
      questions_type_id: "",
      questions_type_text: "",
      subject_id: "",
      subject_text: "",
      title: "",
    };
  },
  methods: {
    submitTest() {
      upData(
          this.questions_id,
          this.title,
          this.questions_stem,
          this.questions_answer,
          this.subject_id,
          this.questions_type_id,
          this.exam_id
          ).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    examType().then(res => {
      this.options = res.data.data;
    });
    subject().then(res => {
      this.options2 = res.data.data;
    });
    getQuestionsType().then(res => {
      this.options3 = res.data.data;
    });
    console.log(this.$route.query);
    var query = this.$route.query.questionAll.find(
      item => this.$route.query.title == item.title
    );
    console.log(query);
    this.title = query.title;
    this.questions_stem = query.questions_stem;
    this.exam_name = query.exam_name;
    this.subject_text = query.subject_text;
    this.questions_type_text = query.questions_type_text;
    this.questions_answer = query.questions_answer;
    this.questions_id = query.questions_id;
    this.subject_id = query.subject_id
    this.questions_type_id = query.questions_type_id
    this.exam_id = query.exam_id
  }
};
</script>

<style>
.el-main {
  width: 100%;
  height: 1300px;
  background: #f8f8f8;
}
.submit {
  padding: 20px;
}
.addBox {
  width: 100%;
  height: 1200px;
  border-radius: 10px;
}
.box {
  width: 96%;
  margin-left: 15px;
  height: 1130px;
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
  width: 80%;
  height: 200px;
  border: 1px solid #ccc;
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
