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
                                <a href="#">Editar</a>
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