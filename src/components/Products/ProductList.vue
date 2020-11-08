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
export default {
    components: {
        ProductsGrid
    }, 
    data() {
        return {
            items: [{
                id         : 1,
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