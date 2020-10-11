<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <router-link to="/" class="navbar-brand">Logotipo</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <form class="form-inline my-lg-0">
                            <div class="input-group mx-auto py-1">
                                <select class="form-control" id="select-categories">
                                    <option selected>Categorias</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <input type="text" class="form-control" id="search-input" placeholder="Buscar"
                                    aria-label="Recipient's username">
                                <!-- <div class="input-group-append"> -->
                                    <button class="btn form-control btn-primary" type="button" id="search-btn"><i
                                            class="fas fa-search" /></button>
                                <!-- </div> -->
                            </div>
                        </form>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/kart" class="nav-link"><i class="fas fa-shopping-cart" /></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Log In</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/SignIn" class="nav-link">Sign In</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<style scoped>
    .navbar {
        background-color: #49C8FF;
    }
    #select-categories{
        background-color: #6ad2ff;
        border-style: none;
        width: 7.5em;
    }
    #search-input{
        width: 15em;
    }
    #search-btn{
        width: 3em;
    }
</style>