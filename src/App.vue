<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 增加监听刷新事件
  mounted(){
    window.addEventListener('unload',this.saveState);
  },
  methods:{
    saveState() {
      sessionStorage.setItem('state',JSON.stringify(this.$store.state));
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
</style>
