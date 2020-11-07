<template>
    <div class="container-fluid row">
            <div class="col-12 mx-auto datosP">
                <h3 class="title">Nombre producto</h3>
                <hr><br>
                <img src="@/media/logo.png" class="imagenP" alt="Img-Product">
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
        height: 86px;
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
    @media (min-width: 630px){
        .datosP{
            padding-left: 40%;
        }
        .imagenP{
            position: absolute;
            height: 86px;
            margin-top: 30px;
            left: 12%;
            padding-left: 0px;
        }
        .cant {
            left: -3%;
        }
    }
</style>