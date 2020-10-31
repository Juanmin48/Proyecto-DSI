<template>
    <div class="container-fluid">
        <h3 class="title">Registrar cuenta</h3>
        <hr>
        <form @subtmi-prevent="signUp" class="row">
            <div class="col-12 pt-3 pb-5">
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
                <button type="submit" class="btn btn-primary">Ingresar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
      return {
        name                : "",
        lastname            : "",
        phone               : "",
        password            : "",
        email               : "",
        passwordConfirmation: ""
      }
    },
    methods: {
        signUp() {
            
        }
    },
}
</script>
