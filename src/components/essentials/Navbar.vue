<template>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container">
            
                    <router-link to="/" class="navbar-brand"><img src="@/media/logo.png" alt="logo" id="logo">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style="z-index: 1030;" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <form id="form" class="form-inline mr-auto">
                                <div class="input-group mx-auto py-1">
                                    <select class="form-control" id="select-categories">
                                        <option selected>Categoria</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <input type="text" class="form-control" id="search-input" placeholder="Buscar"
                                        aria-label="Recipient's username">
                                    <!-- <div class="input-group-append"> -->
                                    <button class="btn form-control btn-light" type="button" id="search-btn"><i
                                            class="fas fa-search" /></button>
                                    <!-- </div> -->
                                </div>
                            </form>
                        </li>
                    </ul>
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link to="/login" id="is" class="nav-link btn btn-dark mx-auto">Iniciar Sesión
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                        <router-link to="/SignIn" class="nav-link">Sign In</router-link>
                    </li> -->
                        <li class="nav-item">
                            <router-link to="/kart" class="nav-link"><i class="fas fa-shopping-cart"
                                    style='font-size:27px' />
                            </router-link>
                        </li>
                    </ul>
                </div>
                </div>
           
    </nav>
</template>
<style scoped>
    .navbar {
        background: rgb(209,188,255);
        padding: 0rem 1rem;
    }
    .navbar-brand{
        padding: 0rem;
        margin-right: 0;
    }
    
    #logo{
        height: 86px;
        padding: 0rem;
    }
    .input-group{
        width: 100%;
    }
    #select-categories{
        background-color: #ffff;
        border-style: none;
        margin: .5em 1px;
        width: 20%;
    }
    #search-input{
        height: 2.5em;
        margin: 0.45em 1px;
        width: 60%;
    }
    #search-btn{
        margin: .5em .5px;
        width: 10%;
    }
    #is{
        /* background: rgb(56,79,79); */
        border-radius: 5px;
        color: #fff;
        width: 100%;
        height: 2.5rem;
    }
    @media (min-width: 992px){
        #is {
            margin-right: 27px;
            width: 130px;
            height: 40px;
        }
         #select-categories{
        background-color: #ffff;
        border-style: none;
        width: 6.9em;
        margin: .5em 1px;
        }
        #search-input{
            width: 20em;
            height: 2.5em;
            margin: 0.45em 1px;
        }
        #search-btn{
            width: 2.5em;
            margin: .5em .5px;
        }
    }
</style>