<template>
  <div class="examDetail">
      <h1>试卷详情</h1>
      <div class="detial_box">
      <div class="box_left">
        <div class="box" v-for="(item,index) in tableData.questions" :key="index">
            <p>{{item.title}}</p>
            <div>{{item.questions_stem}}</div>
        </div>
      </div>
      <div class="box_right">
        
      </div>
    </div>
  </div>
</template>
<script>
import { examDetail } from "../../../../api/index";
export default {
  props: {},
  components: {},
  data() {
    return {
        tableData:[]
    };
  },
  computed: {},
  methods: {},
  created() {
    examDetail(this.$route.query.id).then(res => {
      this.tableData = res.data.data
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.examDetail{
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
.detial_box{
    width:100%;
    display:flex;
    justify-content: space-around;
}
.box_left{
    width:55%;
    min-height:500px;
    background:#fff;
    border-radius: 10px;
}
.box_right{
    width: 35%;
    min-height:500px;
    background:#fff;
    border-radius: 10px;
}
.box{
    width:90%;
    min-height: 200px;
    margin: 20px auto 10px;
    padding:10px;
    border:1px solid #ccc;
}
</style>