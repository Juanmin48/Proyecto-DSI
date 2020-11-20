<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-md-9 col-lg-6 mx-auto">
                <h3 class="title">Iniciar Sesión</h3>
                <hr>
            </div>
        </div>
        <form @submit.prevent="login" class="row">
            <div class="col-xs-11 col-md-8 col-lg-5 mx-auto">
                <div class="form-group">
                    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email"
                        placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Contraseña">
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-dark w-100">Ingresar</button>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col-xs-12 col-md-9 col-lg-6 mx-auto">
                <hr>
                <h3 class="subtitle">¿No tienes cuenta?</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-11 col-md-8 col-lg-5 mx-auto">
                <router-link to="/register" id="reg" class="nav-link mx-auto btn btn-dark">Regístrate
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: '',
            go: null,
        }
    },
    methods: {
        login() {
            if(!this.email || this.email.toString().trim() === "" ||
              !this.password || this.password.toString().trim() === "") {
                this.$message({
                    duration: 3000,
                    message : "Asegúrate de rellenar todos los campos.",
                    type    : "error"
                })
            } else {
                Axios.post('http://localhost:5000/api/users/login', {
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    var user = response.data
                    console.log(user)
                    if(user === "Error: 101 Invalid username/password.") {
                        this.$message({
                            duration: 5000,
                            message : "Usuario y contraseña incorrectos",
                            type    : "error"
                        })
                    } else {
                        this.email = ""
                        this.password = ""
                        this.$message({
                            duration: 5000,
                            message : "Inicio sesión correctamente",
                            type    : "success"
                        })
                        this.$store.dispatch("LOG_IN", user)
                        this.$store.dispatch("NOT_LOGGING")
                        this.$router.replace({name: 'Home'})
                    }
                }).catch((error) => console.log(error))
            }
        }
    },
    created() {
        this.$store.dispatch("IS_LOGGING")
    },
}
</script>

<style scoped>
    .title, .subtitle{
        margin-top: 20px;
    }
    .subtitle{
        font-size: 18px !important;
        margin-bottom: 20px;
    }
</style>