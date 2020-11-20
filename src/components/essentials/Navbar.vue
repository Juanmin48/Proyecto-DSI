<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">

                <router-link to="/" class="navbar-brand" v-on:click.native="notLog">
                    <img src="@/media/logo.png" alt="logo" id="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" v-if="!isLogging" style="z-index: 1030;" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <form id="form" class="form-inline mr-auto">
                                <div class="input-group mx-auto py-1">
                                    <select class="form-control" id="select-categories">
                                        <option selected>Categoria</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <input type="text" class="form-control" id="search-input" placeholder="Buscar"
                                        aria-label="Recipient's username">
                                    <!-- <div class="input-group-append"> -->
                                   <button class="btn form-control btn-light" type="button" id="search-btn"><i
                                            class="fas fa-search" /></button>
                                    <!-- </div> -->
                                </div>
                            </form>
                        </li>
                    </ul>
                    <ul class="navbar-nav">

                        <li class="nav-item" v-if="!isAuthenticated">
                            <router-link to="/login" id="is" class="nav-link btn btn-dark mx-auto">Iniciar Sesión
                            </router-link>
                        </li>
                        <li class="nav-item dropdown" v-else>
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{user.name}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item" to="/user">Ver perfil</router-link>
                                <a class="dropdown-item" href="" @click="logOut">Cerrar sesión</a>
                            </div>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/SignIn" class="nav-link">Sign In</router-link>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="modal" data-target="#cartModal" v-if="isAuthenticated">
                                <i class="fas fa-shopping-cart" style='font-size:27px' />
                            </a>
                            <router-link to="/login" class="nav-link" v-else><i class="fas fa-shopping-cart"
                                    style='font-size:27px' />
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header border-bottom-0">
                    <h5 class="modal-title" id="exampleModalLabel">
                    Carrito de compras
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-image">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.objectId">
                        <td class="w-25">
                            <img :src="item.image.url" class="img-fluid img-thumbnail" alt="Sheep">
                        </td>
                        <td>{{item.Name}}</td>
                        <td>{{item.Price | currency }}</td>
                        <td class="items_quantity">
                                <input type="number"
                                name="quantity"
                                id="quantity"
                                min="1"
                                max="9999"
                                :value="item.quantity + 1"
                                disabled>
                        </td>
                        <td>{{ (item.Price * item.quantity) | currency }}</td>
                        <td>
                            <a href="#" class="btn btn-danger btn-sm" @click.prevent="remove(item)">
                            <i class="fa fa-times"></i>
                            </a>
                        </td>
                        </tr>
                    </tbody>
                    </table> 
                    <div class="d-flex justify-content-end">
                    <h5>Total: <span class="price text-success">{{total}}</span></h5>
                    </div>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success">Ir a pagar</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
     
    props: {
        isAuthenticated: Boolean,
        isLogging      : Boolean
    }, 
    methods: {
        notLog() {
            this.$store.dispatch("NOT_LOGGING")
        },
        logOut() {
            this.$store.dispatch("LOG_OUT")    
        },
        remove(item) {
            this.$store.dispatch("REMOVE_FROM_CART", item)
        }
        
    },
    computed: {
        ...mapState([
            "cart"
        ]),
        user() {
            return this.$store.state.user
        },
        items() {
            return this.$store.state.cart
        },
        total() {
            var total = 0
            for (let i = 0; i < this.cart.length; i++) {
                var item = this.cart[i];
                total += item.Price * item.quantity
            }
            return total
        }
    },
}
</script>

<style scoped>
    .navbar {
        background: rgb(209,188,255);
        padding: 0rem 1rem;
    }
    .navbar-brand{
        padding: 0rem;
        margin-right: 0;
    }
    
    #logo{
        height: 86px;
        padding: 0rem;
    }
    .input-group{
        width: 100%;
    }
    #select-categories{
        background-color: #ffff;
        border-style: none;
        margin: .5em 1px;
        width: 20%;
    }
    #search-input{
        height: 2.5em;
        margin: 0.45em 1px;
        width: 60%;
    }
    #search-btn{
        margin: .5em .5px;
        width: 10%;
    }
    #is{
        /* background: rgb(56,79,79); */
        border-radius: 5px;
        color: #fff;
        width: 100%;
        height: 2.5rem;
    }
    @media (min-width: 992px){
        #is {
            margin-right: 27px;
            width: 130px;
            height: 40px;
        }
         #select-categories{
        background-color: #ffff;
        border-style: none;
        width: 6.9em;
        margin: .5em 1px;
        }
        #search-input{
            width: 20em;
            height: 2.5em;
            margin: 0.45em 1px;
        }
        #search-btn{
            width: 2.5em;
            margin: .5em .5px;
        }
    }
</style>