<template>
  <div class="wrapper">
    <div class="addUser">
      <p class="addusercss">
        <span>添加用户</span>
      </p>
      <div class="realpop">
       <Onemodule></Onemodule>
       <Twomodule></Twomodule>
       <Threemodule></Threemodule>
       <Fourmodule></Fourmodule>
       <Fivemodule></Fivemodule>
       <Sixmodule></Sixmodule>
      </div>
    </div>
  </div>
</template>
<script>
import Onemodule from "./sixmodule/onemodule"
import Twomodule from "./sixmodule/twomodule"
import Threemodule from "./sixmodule/threemodule"
import Fourmodule from "./sixmodule/fourmodule"
import Fivemodule from "./sixmodule/fivemodule"
import Sixmodule from "./sixmodule/sixmodule"

export default {
  props: {},
  components: {
      Onemodule,
      Twomodule,
      Threemodule,
      Fourmodule,
      Fivemodule,
      Sixmodule
  },
  data() {
    return {
     
    };
  },
  computed: {},
  methods: {},
  created() {
  },
  mounted() {}
};
</script>
<style>
.wrapper {
  width: 100%;
  height: 100%;
  background: #fff;
}
.addUser {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f0f2f5;
}
.addusercss {
  margin: 30px;
}
.addusercss span {
  font-size: 20px;
}
.realpop {
  width: 94%;
  height: 500px;
  border: 2px solid #ccc;
  margin: 30px 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>