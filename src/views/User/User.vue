<template>
    <div class="container-fluid row">
        <div class="col-xs-12 col-md-5 col-lg-5 max-auto">
            <img src="@/media/User.png" class="imagenU" alt="Img-Product">
            <br>
            <h3 class="title">Nombre Usuario</h3>
            <h3 class="title">Apellido Usuario</h3>
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
                            <p class="result">Address here</p>
                            <p class="result">Telephone here</p>
                            <p class="result">E-mail here</p>
                            <p class="result">Username here</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-10 mx-auto">
                    <button type="submit" class="btn btn-dark w-100">Ver productos en venta</button>
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
                        <button type="button" class="btn btn-dark">Aceptar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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