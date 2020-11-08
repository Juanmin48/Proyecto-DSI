<template>
    <div class="container-fluid row">
            <div class="col-12 mx-auto datosP">
                <h3 class="title">Nombre producto</h3>
                <hr><br>
                <div class="imagenP mx-auto">
                    <img src="@/media/logo.png" alt="Img-Product">
                </div>
                <br>
                <h1>Precio</h1>
                <br><br>
                <div class="row">
                    <div class="col-10 mx-auto">
                        <h4 class="title">Descripción</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni quis at laudantium excepturi tenetur aperiam quo consequuntur doloremque id temporibus quidem voluptatum vel minus iure nulla, nesciunt facere impedit.</p>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="col-6">
                        <h4 class="label">Stock:</h4>
                        <br>
                        <h4 class="label">Cantidad:</h4>
                    </div>
                    <div class="col-6">
                        <h5 class="result">Disponible</h5>
                        <br>
                        <input class="cant" type="number" min='1'>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-7 mx-auto">
                        <button type="submit" style="margin-bottom:20px" class="btn btn-dark w-100">Agregar al carrito</button>
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
    .imagenP{
        height: 220px;
        width: 250px;
    }
    .imagenP img{
        height: 100%;
        width: 100%;
        margin-bottom: 30px;
    }
    .datosP{
        position: absolute;
    }
    .label {
        margin-right: 8px;
        margin-top: -3px;
        text-align: right;
    }

    .result {
        text-align: left;
        margin-left: -30px;
    }

    .cant {
        position: absolute;
        margin-top: -5px;
        left: -5%;
        width: 30%;
    }
    @media (min-width: 440px){
        .imagenP{
            height: 250px;
            width: 280px;
        }
    }
    @media (min-width: 480px){
        .imagenP{
            height: 280px;
            width: 310px;
        }
    }
    @media (min-width: 520px){
        .imagenP{
            height: 310px;
            width: 340px;
        }
    }
    @media (min-width: 560px){
        .imagenP{
            height: 340px;
            width: 370px;
        }
    }
    @media (min-width: 600px){
        .imagenP{
            height: 370px;
            width: 400px;
        }
    }
    @media (min-width: 840px){
        .datosP{
            padding-left: 40%;
        }
        .imagenP{
            position: absolute;
            height: 250px;
            width: 280px;
            margin-top: -25px;
            left: 5%;
            padding-left: 0px;
        }
        .cant {
            left: -3%;
        }
    }
     @media (min-width: 960px){
        .imagenP{
            height: 280px;
            width: 310px;
        }
    }
    @media (min-width: 1080px){
        .imagenP{
            height: 310px;
            width: 340px;
        }
    }
    @media (min-width: 1200px){
        .imagenP{
            height: 340px;
            width: 370px;
        }
    }
    @media (min-width: 1320px){
        .imagenP{
            height: 370px;
            width: 400px;
        }
    }
</style>