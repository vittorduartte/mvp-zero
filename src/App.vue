<template>
  <div id="app">
    <MenuCliente />
    <div class="container">
      <vs-row vs-w="12">
        <vs-col vs-offset="6" vs-w="5">
          <FomularioCliente />
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
import FomularioCliente from "./components/FormularioCliente.vue";
import MenuCliente from "./components/MenuCliente.vue";

export default {
  name: "App",
  components: {
    FomularioCliente,
    MenuCliente,
  },
};
</script>
  
<style>
#app {
  background-color: rgb(240, 240, 240);
}
.container {
  max-width: 1440px;
  margin: 0px auto;
}
</style>
