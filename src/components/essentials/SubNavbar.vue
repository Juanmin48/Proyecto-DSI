<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" v-if="!isLogging">
        <div class="container mx-auto">
            <div class="row mx-auto">
                <div class="col-3">
                    <a class="nav-link" data-toggle="modal" data-target="#EditDir"><i class="fas fa-map-marker-alt"/><span class="opt">Dirección de envío</span></a>
                </div>
                <div class="col-3">
                    <router-link to="/sales" class="nav-link"><i class="fas fa-star"/><span class="opt"> Ofertas</span></router-link>
                </div>
                <div class="col-3">
                    <router-link to="/contact-us" class="nav-link"><i class="fas fa-info-circle"/><span class="opt"> Servicio al cliente</span></router-link>
                </div>
                <div class="col-3">
                    <router-link to="/sell" class="nav-link"><i class="	fas fa-dollar-sign"/><span class="opt"> Vender</span></router-link>
                </div>
            </div>
        </div>
        
    </nav>
    <div class="modal fade" id="EditDir" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel">Editar dirección de envío</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Dirección -->
                        <div class="form-group">
                            <input type="text" name="address" id="address" class="form-control" v-model="address"
                                :placeholder="this.$store.state.user ? this.$store.state.user.address : ''" >
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 d-flex justify-content-between">
                        <button type="button" @click.prevent="updateAddress" class="btn btn-dark">Aceptar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Axios from 'axios'
export default {
    props: {
        isLogging: Boolean,
        isAuthenticated: Boolean
    },
    data() {
        return {
            address: null
        }
    },methods: {
        updateAddress() {
                     Axios.put('http://localhost:5000/api/users/update', {
                         address: this.address,
                         cell: this.$store.state.user.telephone,
                         password: this.$store.state.user.password,
                         userid: this.$store.state.user.objectId
                     }).then(() => {
                            alert('Direccion modificada')
                     }).catch((error) => {
                            alert('Error al modificar la dirección', error.toString())
                     }) 
        } 
    }, 
    created() {
        this.address = this.$store.state.user ? this.$store.state.user.address :null
    },
}
</script>

<style scoped>
    .navbar {
        background: #d4d9f2;
        padding: 0rem 1rem;
        margin-top: 85px;
        z-index: 1000;
        vertical-align: middle;
    }
    .row{
        width: 100%;
    }
    .nav-link{
        color: black;
    }
    a{
        cursor: pointer;
    }
    .opt{
            display: none;
        }
    @media (min-width: 992px){
        .opt{
            display: inline;
        }
    }
</style>