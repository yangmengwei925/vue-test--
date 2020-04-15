<template>
  <div>
      <div class="detail">
    <h1>试题详情</h1>
    <div class="detial_box">
      <div>
        <p>出题人：{{questionAll.user_name}}</p>
        <p>题目信息</p>
        <p>
          <el-tag>{{questionAll.questions_type_text}}</el-tag>
        <el-tag type="success">{{questionAll.subject_text}}</el-tag>
        <el-tag type="warning">{{questionAll.exam_name}}</el-tag>
        </p>
        <p>{{questionAll.title}}</p>
        <div class="box_e">{{questionAll.questions_stem}}</div>
      </div>
      <div>
        <p>答案信息</p>
        <div class="answer">{{questionAll.questions_answer}}</div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {},
  components: {
      questionAll:[]
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {
    this.questionAll = this.$route.query.questionAll.find(item=> item.title == this.$route.query.title)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail {
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
.detial_box {
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-around;
  div {
    background: white;
    border-radius: 10px;
  }
  div:nth-child(1) {
    width: 60%;
    min-height: 500px;
  }
  div:nth-child(2) {
    width: 38%;
    min-height: 500px;
  }
}
p {
  width: 95%;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
}
.answer{
  padding:10px;
}
.el-tag {
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  margin-right: 10px;
}
.box_e {
  width: 95%;
  margin: 0 auto;
}
</style>