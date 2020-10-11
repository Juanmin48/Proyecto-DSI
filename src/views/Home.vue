<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Proyecto diseño"/> -->
    <products-grid v-bind:products="items"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductsGrid from '@/components/Products/ProductsGrid.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    ProductsGrid
  },
  data() {
    return {
      items: [{
        name: 'Product 1',
        description: 'Product 1',
        price: 10000,
      }, {
        name: 'Product 2',
        description: 'Product 1',
        price: 10000,
      }, {
        name: 'Product 3',
        description: 'Product 1',
        price: 10000,
      }, {
        name: 'Product 4',
        description: 'Product 1',
        price: 10000,
      },]
    }
  },
}
</script>
