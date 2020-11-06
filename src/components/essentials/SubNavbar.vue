<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container mx-auto">
            <div class="row mx-auto">
                <div class="col-3">
                    <router-link to="/" class="nav-link"><i class="fas fa-map-marker-alt"/><span class="opt"> Dirección de envío</span></router-link>
                </div>
                <div class="col-3">
                    <router-link to="/" class="nav-link"><i class="fas fa-star"/><span class="opt"> Ofertas</span></router-link>
                </div>
                <div class="col-3">
                    <router-link to="/" class="nav-link"><i class="fas fa-info-circle"/><span class="opt"> Servicio al cliente</span></router-link>
                </div>
                <div class="col-3">
                    <router-link to="/" class="nav-link"><i class="	fas fa-dollar-sign"/><span class="opt"> Vender</span></router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
    .navbar {
        background: #d4d9f2;
        padding: 0rem 1rem;
        margin-top: 85px;
        z-index: 1000;
        vertical-align: middle;
    }
    .row{
        width: 100%;
    }
    .nav-link{
        color: black;
    }

    .opt{
            display: none;
        }
    @media (min-width: 992px){
        .opt{
            display: inline;
        }
    }
</style>