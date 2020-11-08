<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
                <h3 class="title">Registrar cuenta</h3>
                <hr>
            </div>
        </div>
        <form @submit.prevent="signUp" class="row">
            <div class="col-5 pt-3 pb-5 mx-auto">

                <div class="form-group">
                    <input type="text" name="username" id="username" class="form-control" v-model="username" placeholder="Nombre de usuario">
                </div>

                <div class="form-group">
                    <input type="text" name="name" id="name" class="form-control" v-model="name" placeholder="Nombre">
                </div>
                <!-- Last name -->
                <div class="form-group">
                    <input type="text" name="lastName" id="lastName" class="form-control" v-model="lastname" placeholder="Apellidos">
                </div>
                <!-- Phone number -->
                <div class="form-group">
                    <input type="text" name="phoneNumber" id="phoneNumber" class="form-control" v-model="phone" placeholder="Celular">
                </div>
                <!-- Dirección -->
                <div class="form-group">
                    <input type="text" name="address" id="address" class="form-control" v-model="address" placeholder="Dirección">
                </div>
                <!-- E-mail -->
                <div class="form-group">
                    <input type="text" name="email" id="email" class="form-control" v-model="email" placeholder="Correo electrónico">
                </div>
                <!-- Password -->
                <div class="form-group">
                    <input type="password" name="password" id="password" class="form-control" v-model="password" placeholder="Contraseña">
                </div>
                <!-- Password confirmation -->
                <div class="form-group">
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" class="form-control"
                        v-model="passwordConfirmation" placeholder="Confirmar contraseña">
                </div>
                <button type="submit" class="btn btn-dark w-100">Aceptar</button>
            </div>
        </form>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
      return {
        username            : "",
        name                : "",
        lastname            : "",
        phone               : "",
        address             : "",
        password            : "",
        email               : "",
        passwordConfirmation: ""
      }
    },
    methods: {
        signUp() {
            if (!this.name || this.name.toString().trim() === "" || 
                !this.lastname || this.lastname.toString().trim() === "" || 
                !this.phone || this.phone.toString().trim() === "" ||
                !this.address || this.address.toString().trim() === "" ||
                !this.password || this.password.toString().trim() === "" ||
                !this.email || this.email.toString().trim() === "" ||
                !this.passwordConfirmation || this.passwordConfirmation.toString().trim() === "") {
                    alert('Asegurese de rellenar todos los campos')
                } else {
                    if (this.password === this.passwordConfirmation) {
                        Axios.post('http://localhost:5000/api/users/register', {
                            username: this.username,
                            name: this.name,
                            lastname: this.lastname,
                            cell: this.phone,
                            email: this.email,
                            password: this.password,
                            address: this.address
                        }).then(() => {
                            this.username = ""
                            this.name = ""
                            this.lastname = ""
                            this.phone = ""
                            this.email = ""
                            this.password = ""
                            this.address = ""
                            alert('Usuario creado con éxito')
                            this.$router.push({name: 'Login'})
                        }).catch((error) => {
                            alert('Error al crear el usuario', error.toString())
                        })
                    } else {
                        alert('Las contraseñas deben coincidir')
                    }
                }
        }
    },
    destroyed() {
        this.$store.dispatch("NOT_LOGGING")
    },
}
</script>
<style scoped>
    .title{
        margin-top: 20px;
    }
</style>