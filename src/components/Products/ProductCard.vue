<template>
    <div id="card" class="row shadow mx-1 my-2 bg-white rounded" v-on:click="metodoPrueba">
        <div class="col-12">
            <img :src="product.image.url" class="img-fluid" alt="asdasd" v-if="product.image">
        </div>
        <div class="col-12">
            <h2 class="Product_Name">{{ product.Name }}</h2>
        </div>
        <div class="col-12">
            <div class="Product_Description" v-if="!isList">{{ product.Description }}</div>
        </div>
        <div class="col-12">
            <h1 class="Product_Description">{{ product.Price | currency }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object,
        isList: Boolean
    },
    methods: {
        metodoPrueba() {
            this.$router.push(`/product/${this.product.objectId}`)
        }
    }
}
</script>

<style scoped>

    #card {overflow:hidden;}

    .Product_Name, 
    .Product_Description, 
    .Product_Description {
        user-select: none;
    }

    .col-6 .Product_Name {
        font-size: 15px;
        margin: .75rem auto;
    }
    .col-6 .Product_Description {
        display           : -webkit-box;
        overflow          : hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .col-6 .Product_Price {
        font-size: 16px !important;
        margin-top: .5rem;
    }
  .Product_Name {
    color         : var(--cr-yellow);
    font-weight   : 700;
    margin        : 1.5rem auto;
    text-transform: uppercase;
  }
  .Product_Price {
    color      : var(--cr-black--text);
    font-weight: 700;
    margin-top : 1rem;
  }
</style>