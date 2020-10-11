<template>
  <div id="app">
    <navbar/>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/essentials/Navbar.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&display=swap%27');

#app {
  font-family: Amaranth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
  padding: 60px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
