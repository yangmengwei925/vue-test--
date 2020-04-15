<template>
  <div id="examAll">
    <div class="examAll_box" v-for="(item,index) in questionAll1" :key='index'
    >
      <div class="examAll_box1" @click="quesDetail(item.title)">
        <p>{{item.title}}</p>
      <p>
        <el-tag>{{item.questions_type_text}}</el-tag>
        <el-tag type="success">{{item.subject_text}}</el-tag>
        <el-tag type="warning">{{item.exam_name}}</el-tag>
      </p>
      <p style="color:blue">{{item.user_name}}发布</p>
      </div>
      <div class="bian" @click="bainji(item.title)">编辑</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    questionAll1: {
      type: Array,
      value: []
    }
  },
  components: {},
  data() {
    return {
      newarr:[]
    };
  },
  computed: {},
  methods: {
    quesDetail(title){
      this.$router.push({
        path:"/home/looktest/detail",
        query:{
          title:title,
          questionAll:this.questionAll1
        }
      })
    },
    bainji(title){
      this.$router.push({
        path:'/home/Looktest/redactText',
        query:{
          title:title,
          questionAll:this.questionAll1
        }
      })
    }
  },
  created() {
      // console.log(this.questionAll)
      // this.$bus.$emit('question_id',this.questionAll.questions_id)
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.examAll_box{
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
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
  padding:6px 0;
}
.examAll_box:hover{
  background:#f3f5ff;
}
.el-tag {
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
  margin-right: 10px;
}
.bian{
  width:100px;
  color:blue;
  text-align: center;
}

</style>