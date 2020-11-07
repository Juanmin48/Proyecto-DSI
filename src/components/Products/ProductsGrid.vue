<template>
    <div class="container-fluid">
        <div class="row py-4">
            <div class="col-12 justify-content-center">
                <h3 class="text-uppercase font-weight-bold text-dark">Lo más relevante</h3>
            </div>
            <div class="col-3" v-for="(product, key) in products" v-bind:key="key">
                <product-card v-bind:product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue'
export default {
    props: {
        products: Array
    },
    components: {
        ProductCard
    }
}
</script>