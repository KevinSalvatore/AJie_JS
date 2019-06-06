<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      导航：
      <router-link to="/">首页</router-link>&nbsp;|
      <router-link to="/look">看看</router-link>&nbsp;|
      <!-- <router-link to="/look/lookOne">l1</router-link>&nbsp;|&nbsp; -->
      <span @click="go">l1</span>&nbsp;|
      <!-- <router-link to="/look/lookTwo">l2</router-link> -->
      <router-link :to="{name: 'LookTwo', params: {id: 123}}">l2</router-link>&nbsp;|
      <router-link to="/detail">detail</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    go() {
      this.$router.push({ name: "LookOne", params: { id: 456 } });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
