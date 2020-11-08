<template>
    <div class="container-fluid">
        <div class="row py-4">
            <div :class="numCol" class="col-xs-12 col-md-6" v-for="(product, key) in products" v-bind:key="key">
                <product-card :product="product" :isList="isList" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue'
export default {
    props: {
        products: Array,
        numCol  : String,
        isList  : Boolean
    },
    components: {
        ProductCard
    }
}
</script>