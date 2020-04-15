<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body,html{
  
  width:100%;
  height:100%;
}
*{
  padding:0;
  margin:0;
  text-decoration: none;
}
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-view{
  width:100%;
  height:100%
}
</style>
