<template>
  <vs-navbar
    class="petcare-navmenu"
    :color="menuColor"
    text-color="rgba(255,255,255,.6)"
    active-text-color="rgba(255,255,255,1)"
  >
    <div slot="title">
      <h3>PetCare - Alimentação saudável</h3>
    </div>
    <vs-navbar-item index="1">
      <a href="#" style="font-size: 18px">Novidades</a>
    </vs-navbar-item>
    <vs-navbar-item index="2">
      <a href="#" style="font-size: 18px">Sobre Nós</a>
    </vs-navbar-item>
  </vs-navbar>
</template>

<script>
export default {
  data() {
    return {
      menuColor: "#000000",
    };
  },
};
</script>

<style scoped>
h3 {
  color: #ffffff;
}
a {
  font-family: "MontSerrat Medium";
  font-size: 18px;
}
</style>