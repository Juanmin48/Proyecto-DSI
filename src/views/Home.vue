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
  },
  data() {
    return {
      items: [{
        name       : 'Product 1',
        description: 'Product 1',
        price      : '10000'
      }, {
        name       : 'Product 2',
        description: 'Product 2',
        price      : '10000'
      }, {
        name       : 'Product 3',
        description: 'Product 3',
        price      : '10000'
      }, {
        name       : 'Product 4',
        description: 'Product 4',
        price      : '10000'
      }]
    }
  },
}
</script>
