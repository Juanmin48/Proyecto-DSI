<template>
    <div class="container-fluid row">
            <div class="col-12 mx-auto datosP">
                <h3 class="title">{{product.Name}}</h3>
                <hr><br>
                <img :src="product.image.url" class="imagenP img-fluid" alt="Img-Product" v-if="product.image">
                <br>
                <h1>{{product.Price | currency}}</h1>
                <br><br>
                <div class="row">
                    <div class="col-10 mx-auto">
                        <h4 class="title">Descripción</h4>
                        <p>{{product.Description}}</p>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-6">
                        <h4 class="label">Stock:</h4>
                        <br>
                        <h4 class="label">Cantidad:</h4>
                    </div>
                    <div class="col-6">
                        <h5 class="result">{{product.Stock}}</h5>
                        <br>
                        <input class="cant" type="number" min='1' v-model="quantity">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-7 mx-auto" v-if="isAuthenticated">
                        <button @click.prevent="addToCart" type="submit" style="margin-bottom:20px" class="btn btn-dark w-100">Agregar al carrito</button>
                    </div>
                    <div class="col-7 mx-auto" v-else>
                        <button @click.prevent="logIn" style="margin-bottom:20px" class="btn btn-dark w-100">Iniciar sesión para agregar</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            product: {},
            quantity: 1
        }
    },
    computed: {
        itemId(){
            return this.$route.params.id
        },
        isAuthenticated() {
            return this.$store.state.user != null
        }
    },
    methods: {
        getProduct() {
            Axios.get(`http://localhost:5000/api/items/getItem/${this.itemId}`)
            .then((response) => {
                this.product = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },
        logIn() {
            this.$router.push({name: 'Login'})
        },
        addToCart() {
            let product = this.product
            product.quantity = this.quantity
            this.$store.dispatch("ADD_TO_CART", this.product)
            this.$message({
                    duration: 3000,
                    message : "Producto agregado al carrito",
                    type    : "success"
                })
            this.$router.replace({name: 'Home'})
        }
    },
    created() {
        this.getProduct()
    }
}
</script>

<style scoped>
    .container-fluid {
        margin-top: 40px;
        width: 100%;
    }
    .imagenP{
        height: 220px;
        width: 250px;
    }
    .imagenP img{
        height: 100%;
        width: 100%;
        margin-bottom: 30px;
    }
    .datosP{
        position: absolute;
    }
    .label {
        margin-right: 8px;
        margin-top: -3px;
        text-align: right;
    }

    .result {
        text-align: left;
        margin-left: -30px;
    }

    .cant {
        position: absolute;
        margin-top: -5px;
        left: -5%;
        width: 30%;
    }
    @media (min-width: 440px){
        .imagenP{
            height: 250px;
            width: 280px;
        }
    }
    @media (min-width: 480px){
        .imagenP{
            height: 280px;
            width: 310px;
        }
    }
    @media (min-width: 520px){
        .imagenP{
            height: 310px;
            width: 340px;
        }
    }
    @media (min-width: 560px){
        .imagenP{
            height: 340px;
            width: 370px;
        }
    }
    @media (min-width: 600px){
        .imagenP{
            height: 370px;
            width: 400px;
        }
    }
    @media (min-width: 840px){
        .datosP{
            padding-left: 40%;
        }
        .imagenP{
            position: absolute;
            height: 250px;
            width: 280px;
            margin-top: -25px;
            left: 5%;
            padding-left: 0px;
        }
        .cant {
            left: -3%;
        }
    }
     @media (min-width: 960px){
        .imagenP{
            height: 280px;
            width: 310px;
        }
    }
    @media (min-width: 1080px){
        .imagenP{
            height: 310px;
            width: 340px;
        }
    }
    @media (min-width: 1200px){
        .imagenP{
            height: 340px;
            width: 370px;
        }
    }
    @media (min-width: 1320px){
        .imagenP{
            height: 370px;
            width: 400px;
        }
    }
</style>