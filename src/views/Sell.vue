<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
                <h3 class="title">Ingresar un producto</h3>
                <hr>
            </div>
        </div>
        <form @subtmi-prevent="insertP" class="row">
            <div class="col-5 pt-3 pb-5 mx-auto">
                <!-- Product name -->
                <div class="form-group">
                    <input type="text" name="ProductName" id="ProductName" class="form-control" v-model="ProductName" placeholder="Nombre de Producto">
                </div>
                <!-- Image -->
                <div class="form-group">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="Image" lang="es" style="display:none;">
                        <label class="custom-file-label" for="Image" style="text-align:left; color:gray;">Seleccionar Imagen</label>
                    </div>
                </div>
                <!-- Categoria -->
                <div class="form-group">
                    <select class="form-control" style="color:gray;" id="select-categories" v-model="Category">
                        <option selected>Categoria</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <!-- Price -->
                <div class="form-group">
                    <input type="text" name="Price" id="Price" class="form-control" v-model="Price"
                        placeholder="Precio">
                </div>
                <!-- Description -->
                <div class="form-group">
                    <textarea class="form-control" name="Description" id="Description" cols="63" rows="10" placeholder="Descripción" v-model="Description"></textarea>
                </div>
                <!-- Quantity -->
                <div class="form-group">
                    <input type="text" name="Quantity" id="Quantity" class="form-control" v-model="Quantity" placeholder="Cantidad">
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
        ProductName         : "",
        Price               : "",
        Quantity            : "",
        Category: "",
        Description: ""
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
    /* #Image{
        width: 87%;
        background-color: white;
        height: 38px;
        border-color: gray;
    } */
</style>