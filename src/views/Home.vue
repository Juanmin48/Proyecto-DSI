<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Proyecto diseño"/>
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Products/ProductSlider.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Slider
  }
}
</script>
