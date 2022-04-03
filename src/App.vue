<template>
  <div id="app">
    <MenuCliente />
    <div class="container">
      <vs-row vs-w="12">
        <vs-col
          vs-type="flex"
          vs-align="center"
          vs-justify="center"
          vs-sm="12"
          vs-w="5"
        >
          <img
            class="main-brand"
            src="./assets/images/logo-main-5.svg"
            alt="Food Care - Alimentação natural para pets"
          />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-sm="12" vs-w="5">
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
  background-color: #8d1d09;
}
.container {
  max-width: 1440px;
  margin: 0px auto;
}

.main-brand {
  width: 25em;
  height: 20em;
}

@media (max-width: 768px) {
  .main-brand {
    width: 15em;
    height: 10em;
  }
}
</style>
