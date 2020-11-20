<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 justify-content-center">
                <h3>Ofertas</h3>
            </div>
            <div class="col-12">
                <products-grid :isList="true" :userList="true" :products="items" :numCol="'col-lg-4'"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsGrid from '@/components/Products/ProductsGrid.vue'
import Axios from 'axios'
export default {
    components: {
        ProductsGrid
    }, 
    data() {
        return {
            items: []
        }
    },methods: {
        getProduct() {
            Axios.get(`http://localhost:5000/api/items/getItems`)
            .then((response) => {
                this.items = response.data
                console.log('HOLA')
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

<style scoped>
    .container-fluid {
        margin-top: 30px;
    }
</style>