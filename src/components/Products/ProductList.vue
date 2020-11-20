<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <products-grid :isList="true" :products="items" :numCol="'col-lg-4'"/>
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
    }, computed: {
        itemname(){
            return this.$route.params.item
        }
    },methods: {
        getProduct() {
            Axios.get(`http://localhost:5000/api/items/getItem/Name/${this.itemname}`)
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