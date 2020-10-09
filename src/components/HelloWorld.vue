<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="mensaje" v-if="mostrar">
    <button v-on:click.prevent="addUser">Enviar</button>
    <h2> {{ mensaje }} </h2>
    <ul v-for="(fruta, key) in lista" v-bind:key="key">
      <li>{{fruta}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      mensaje: '',
      mostrar: true,
      lista: ['pera', 'manzana', 'banano', 'piña', 'Mango']
    }
  },
  methods: {
    addUser() {
      this.$store.state.user = this.mensaje
    }
  },
  created() {
    console.log(this.$store.state.user)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
