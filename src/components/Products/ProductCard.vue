<template>
    <div id="card" class="row shadow mx-1 my-2 bg-white rounded" v-on:click="metodoPrueba">
        <div class="col-12">
            <img src="https://windigitalpc.com/wp-content/uploads/2020/01/LD0005368493_2.jpg" class="img-fluid" alt="asdasd">
        </div>
        <div class="col-12">
            <h2 class="Product_Name">{{ product.name }}</h2>
        </div>
        <div class="col-12">
            <div class="Product_Description">{{ product.description }}</div>
        </div>
        <div class="col-12">
            <h1 class="Product_Description">{{ product.price | currency }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        metodoPrueba() {
            console.log('Click en producto')
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