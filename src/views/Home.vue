<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Proyecto diseño"/> -->
    <Slider/>
    <div class="col-12 justify-content-center">
      <h3 class="text-uppercase font-weight-bold text-dark">Lo más relevante</h3>
    </div>
    <products-grid :products="items" :numCol="'col-lg-3'" :isList="false"/>
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
        id         : 'AaHSoS6Plj',
        name       : 'Product 1',
        description: 'Product 1',
        price      : '10000'
      }, {
        id         : 2,
        name       : 'Product 2',
        description: 'Product 2',
        price      : '10000'
      }, {
        id         : 3,
        name       : 'Product 3',
        description: 'Product 3',
        price      : '10000'
      }, {
        id         : 4,
        name       : 'Product 4',
        description: 'Product 4',
        price      : '10000'
      }]
    }
  },
}
</script>
