<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
                <h3 class="title">Iniciar Sesión</h3>
                <hr>
            </div>
        </div>
        <form @submit.prevent="login" class="row">
            <div class="col-5 pt-3 pb-5 mx-auto">
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
            <div class="col-6 mx-auto">
                <hr>
                <h3 class="subtitle">¿No tienes cuenta?</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-5 mx-auto">
                <router-link to="/register" id="reg" class="nav-link mx-auto btn btn-dark">Registrate</router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            console.log('Hola :D')
        }
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