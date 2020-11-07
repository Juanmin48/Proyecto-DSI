<template>
  <div id="app">
    <navbar/>
    <SubNavbar/>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/essentials/Navbar.vue'
import SubNavbar from '@/components/essentials/SubNavbar.vue'
export default {
  components:{
    Navbar,
    SubNavbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap%27');
body{
  background: rgb(249,243,243)
}
#app {
  font-family: Amaranth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(249,243,243)
}

#content {
  padding: 120px 0;
  margin-top: 0px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
