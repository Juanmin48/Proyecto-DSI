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
import Axios from 'axios'

export default {
  name: 'Home',
  components: {
    ProductsGrid,
    Slider
  },
  data() {
    return {
      items: []
    }
  },methods: {
        getProduct() {
            Axios.get(`http://localhost:5000/api/items/getItems/random`)
            .then((response) => {
                this.items = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    created() {
        this.getProduct()
    }
}
</script>
