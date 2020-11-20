<template>
    <div class="container-fluid row">
        <div class="col-xs-12 col-md-5 col-lg-5 max-auto">
            <img src="@/media/User.png" class="imagenU" alt="Img-Product">
            <br>
            <h3 class="title">{{this.$store.state.user.name}}</h3>
            <h3 class="title">{{this.$store.state.user.lastname}}</h3>
            <br>
        </div>
        <div class="col-xs-12 col-md-7 col-lg-7 mx-auto datosU">
            <div class="row">
                <div class="col-10 mx-auto">
                    <div class="row">
                        <div class="col-9">
                            <h5 style="text-align:left;">Datos Personales</h5>
                        </div>
                        <div class="col-3">
                            <a id="Editbtn" data-toggle="modal" data-target="#Edit">Editar</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr style="margin-top:-5px;">
            <div class="PersonalData row">
                <div class="col-12 mx-auto">
                    <div class="row">
                        <div class="col-5" style="text-align:right;">
                            <h5 class="label">Dirección:</h5>
                            <h5 class="label">Teléfono:</h5>
                            <h5 class="label">Email:</h5>
                            <h5 class="label">Usuario:</h5>
                        </div>
                        <div class="col-7" style="text-align:left; margin-bottom:-10px;">
                            <p class="result">{{this.address}}</p>
                            <p class="result">{{this.phone}}</p>
                            <p class="result">{{this.email}}</p>
                            <p class="result">{{this.username}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-10 mx-auto">
                    <button type="submit" class="btn btn-dark w-100" v-on:click="goToProducts">Ver productos en venta</button>
                </div>
            </div>
        </div>
        <div class="modal fade" id="Edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel">Editar Datos personales</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Dirección -->
                        <div class="form-group">
                            <input type="text" name="address" id="address" class="form-control" v-model="address"
                                placeholder="Dirección">
                        </div>
                        <!-- Phone number -->
                        <div class="form-group">
                            <input type="text" name="phoneNumber" id="phoneNumber" class="form-control" v-model="phone"
                                placeholder="Celular">
                        </div>
                        <!-- E-mail -->
                        <div class="form-group">
                            <input type="text" name="email" id="email" class="form-control" v-model="email"
                                placeholder="Correo electrónico">
                        </div>
                        <!-- Password -->
                        <div class="form-group">
                            <input type="password" name="password" id="password" class="form-control" v-model="password"
                                placeholder="Contraseña">
                        </div>
                        <!-- Password confirmation -->
                        <div class="form-group">
                            <input type="password" name="passwordConfirmation" id="passwordConfirmation"
                                class="form-control" v-model="passwordConfirmation" placeholder="Confirmar contraseña">
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 d-flex justify-content-between">
                        <button @click.prevent="updateUser" type="button" class="btn btn-dark">Aceptar</button>
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
    data() {
        return {
            address: this.$store.state.user.address,
            phone: this.$store.state.user.telephone,
            email: this.$store.state.user.email,
            username: this.$store.state.user.username,
            password: "",
            passwordConfirmation: "",

        }
    },
    methods: {
        goToProducts() {
            this.$router.push({name: "ProductListUser"})
        },
        updateUser() {
             if (this.password === this.passwordConfirmation) {
                        Axios.put('http://localhost:5000/api/users/update', {
                            address: this.address,
                            cell: this.telephone,
                            password: this.password,
                            userid: this.$store.state.user.objectId
            
                        }).then(() => {
                            alert('Usuario modificado')
                        }).catch((error) => {
                            alert('Error al modificar el usuario', error.toString())
                        })
                    } else {
                        alert('Las contraseñas deben coincidir')
                    }
        }
    },
}
</script>

<style scoped>
    .container-fluid {
        margin-top: 40px;
        width: 100%;
    }
    .container-fluid .row{
        margin-left: 0;
        margin-right: 0;
    }
    #Editbtn{
        cursor: pointer;
        color: rgb(116, 91, 170);
        text-decoration: underline;
    }
    .modal-footer button{
        margin:0;
    }
    .imagenU{
        height: 120px;
        margin-bottom: 30px;
    }
    .label {
        margin-bottom: 9px;
    }
    .result {
        margin-bottom: 10px;
    }
    .btn{
            margin-bottom:20px
        }
    @media (min-width: 630px){
        .imagenU{
            height: 55%;
            margin-bottom: 25px;
        } 
        .PersonalData{
            margin-top: 30px;
        }
        .btn{
            margin-top: 80px;
        }
    }
</style>