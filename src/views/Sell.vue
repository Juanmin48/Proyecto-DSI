<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-md-9 col-lg-6 mx-auto">
        <h3 class="title">Ingresar un producto</h3>
        <hr />
      </div>
    </div>
    <form @submit.prevent="insertP" class="row">
      <div class="col-xs-11 col-md-8 col-lg-5 pt-3 pb-5 mx-auto">
        <!-- Product name -->
        <div class="form-group">
          <input
            type="text"
            name="ProductName"
            id="ProductName"
            class="form-control"
            v-model="ProductName"
            placeholder="Nombre de Producto"
          />
        </div>
        <!-- Categoria -->
        <div class="form-group">
          <select
            class="form-control"
            style="color: gray"
            id="select-categories"
            v-model="Category"
          >
            <option selected>Categoria</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <!-- Price -->
        <div class="form-group">
          <input
            type="text"
            name="Price"
            id="Price"
            class="form-control"
            v-model="Price"
            placeholder="Precio"
          />
        </div>
        <!-- Description -->
        <div class="form-group">
          <textarea
            class="form-control"
            name="Description"
            id="Description"
            cols="63"
            rows="10"
            placeholder="Descripción"
            v-model="Description"
          ></textarea>
        </div>
        <!-- Quantity -->
        <div class="form-group">
          <input
            type="text"
            name="Quantity"
            id="Quantity"
            class="form-control"
            v-model="Quantity"
            placeholder="Cantidad"
          />
        </div>
        <!-- Image -->
        <div class="form-group">
          <file-pond
            class="mb-4 input-group--file"
            name="ocdocument"
            ref="fileoc"
            accepted-file-types="image/jpeg, image/png"
            label-idle="Arrastre y suelte la imagen del producto"
            :instantUpload="false"
            allow-multiple="false"
            max-files="1"
            v-on:init="handleFilePondInit"
            :files="myFiles"
          />
        </div>
        <button type="submit" class="btn btn-dark w-100">Aceptar</button>
      </div>
    </form>
  </div>
</template>

<script>
// import Axios from 'axios'
import Parse from "parse";
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  components: {
    FilePond,
  },
  data() {
    return {
      ProductName: "",
      Price: "",
      Quantity: "",
      Category: "Categoria",
      Description: "",
      userId: "",
      myFiles: [],
    };
  },

  methods: {
    async insertP() {
      if (!this.$refs.fileoc.getFile()) {
        console.log("ponga un pinche archivo chingada madre");
      } else {
        console.log(this.$refs.fileoc.getFile());
        var typeFile = this.$refs.fileoc.getFile().file.type;
        var format = "";
        if (typeFile === "image/jpeg" || typeFile === "image/jpg") {
          format = "ItemImg.jpg";
        } else if (typeFile === "image/png") {
          format = "ItemImg.png";
        }
        var file = await new Parse.File(
          format,
          this.$refs.fileoc.getFile().file
        );
      }

      try {
        const items = Parse.Object.extend("Items");
        const item = new items({
          Name: this.ProductName,
          Description: this.Description,
          Price: parseInt(this.Price),
          Stock: parseInt(this.Quantity),
          category: this.Category,
          UserId: this.userId,
          image: file,
        });
        await item.save().then(() => {
          this.$message({
            duration: 5000,
            message: "El producto se agregó correctamente",
            type: "success",
          });
          this.$router.replace({name: 'Home'})
        });
      } catch (error) {
        console.log(error);
      }
    },
    handleFilePondInit: function () {
      console.log("FilePond has initialized");
    },
  },

  created() {
    this.userId = this.$store.state.user.objectId;
  },
};
</script>
<style scoped>
.title {
  margin-top: 20px;
}

.filepond--root .filepond--drop-label {
  border: 1px solid #ced4da !important;
  background-color: white !important;
}

.filepond--drop-label.filepond--drop-label label {
  font-family: Amaranth !important;
}
/* #Image{
        width: 87%;
        background-color: white;
        height: 38px;
        border-color: gray;
    } */
</style>