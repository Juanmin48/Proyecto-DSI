<template>
    <div id="card" class="row shadow mx-1 my-2 bg-white rounded" @click.prevent="metodoPrueba">
        <div class="col-12">
            <img :src="product.image.url" class="img-fluid" alt="asdasd" v-if="product.image">
        </div>
        <div class="col-12">
            <h2 class="Product_Name">{{ product.Name }}</h2>
        </div>
        <div class="col-12">
            <div class="Product_Description" v-if="!isList">{{ product.Description }}</div>
        </div>
        <div class="col-12">
            <h1 class="Product_Description">{{ product.Price | currency }}</h1>
        </div>
        <div class="col-12" v-if="userList">
            <a data-toggle="modal" data-target="#Edit" class="btn btn-info">Modificar</a>
            <button type="button" class="btn btn-danger" @click.prevent="deleteItem">Eliminar</button>
        </div>
        <div class="modal fade" id="Edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" v-if="userList">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <h5 class="modal-title" id="exampleModalLabel">Editar producto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- stock -->
                        <div class="form-group">
                            <input type="text" name="stockC" id="stockC" class="form-control" v-model="stock"
                                placeholder="stock">
                        </div>
                        <!-- precio -->
                        <div class="form-group">
                            <input type="text" name="priceC" id="priceC" class="form-control" v-model="price"
                                placeholder="price">
                        </div>
                    </div>
                    <div class="modal-footer border-top-0 d-flex justify-content-between">
                        <button @click.prevent="updateItem" type="button" class="btn btn-dark">Aceptar</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    props: {
        product: Object,
        isList: Boolean,
        userList: Boolean
    },
    data() {
        return {
            stock: "",
            price: "",
            itemid: this.product.objectId
        }
    },
    methods: {
        metodoPrueba() {
            if(!this.userList) {
                this.$router.push(`/product/${this.product.objectId}`)
            }
        }, 
        updateItem() {
                    Axios.put(`http://localhost:5000/api/items/update/${this.product.objectId}`, {
                            stock: this.stock,
                            price: this.price
                            
                        }).then(() => {
                            alert('Producto modificado con exito')
                        }).catch((error) => {
                            alert('Error al modificar el producto', error.toString())
                        })
        },
        deleteItem() {
                     Axios.delete(`http://localhost:5000/api/items/delete/${this.product.objectId}`, {
                         
                        }).then(() => {
                            alert('Prodcuto eliminado con exito')
                        }).catch((error) => {
                            alert('Error al eliminar el producto', error.toString())
                        })
        }
    }
}
</script>

<style scoped>

    #card {
        overflow:hidden;
        height: 100%;
    }

    .btn {
        margin-right: 10px;
    }

    .Product_Name, 
    .Product_Description, 
    .Product_Description {
        user-select: none;
    }

    .col-6 .Product_Name {
        font-size: 15px;
        margin: .75rem auto;
    }
    .col-6 .Product_Description {
        display           : -webkit-box;
        overflow          : hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .col-6 .Product_Price {
        font-size: 16px !important;
        margin-top: .5rem;
    }
  .Product_Name {
    color         : var(--cr-yellow);
    font-weight   : 700;
    margin        : 1.5rem auto;
    text-transform: uppercase;
  }
  .Product_Price {
    color      : var(--cr-black--text);
    font-weight: 700;
    margin-top : 1rem;
  }
</style>