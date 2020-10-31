<template>
    <div class="container-fluid">
        <h3 class="title">Iniciar sesion</h3>
        <hr>
        <form @submit.prevent="login" class="row">
            <div class="col-12 pt-3 pb-5">
                <div class="form-group">
                    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="email"
                        placeholder="Correo electrónico">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" v-model="password" placeholder="Contraseña">
                </div>
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>
        </form>
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
    
</style>