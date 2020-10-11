<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Proyecto diseño"/> -->
    <Slider/>
    <products-grid v-bind:products="items"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductsGrid from '@/components/Products/ProductsGrid.vue'
import Slider from '@/components/Products/ProductSlider.vue'

export default {
  name: 'Home',
  components: {
    ProductsGrid,
    Slider
}
</script>
