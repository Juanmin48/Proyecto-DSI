<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-md-9 col-lg-6 mx-auto">
                <h3 class="title">Servicio al cliente</h3>
                <hr>
            </div>
        </div>
        <form @subtmi-prevent="insertP" class="row">
            <div class="col-xs-11 col-md-8 col-lg-5 pt-3 pb-5 mx-auto">
                <!-- FullName-->
                <div class="form-group">
                    <input type="text" name="FullName" id="FullName" class="form-control" v-model="Name" placeholder="Nombre Completo">
                </div>
                <!-- Email -->
                <div class="form-group">
                    <input type="text" name="Email" id="Email" class="form-control" v-model="Email" placeholder="E-Mail">
                </div>
                <!-- Telephone -->
                <div class="form-group">
                    <input type="text" name="Telephone" id="Telephone" class="form-control" v-model="Telephone" placeholder="Teléfono">
                </div>
                <!-- Subject -->
                <div class="form-group">
                    <input type="text" name="Subject" id="Subject" class="form-control" v-model="Subject" placeholder="Asunto">
                </div>
                <!-- Message -->
                <div class="form-group">
                    <textarea class="form-control" name="Message" id="Message" cols="63" rows="10" placeholder="Mensaje"></textarea>
                </div>
                <button type="submit" class="btn btn-dark w-100">Aceptar</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
      return {
        FullName            : "",
        Email               : "",
        Telephone           : "",
        Subject             : "",
        Message             : ""
      }
    },
    methods: {
        insertP() {
            
        }
    },
}
</script>
<style scoped>
    .title{
        margin-top: 20px;
    }
</style>