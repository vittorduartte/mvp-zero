<template>
  <vs-navbar
    class="petcare-navmenu"
    color="warning"
    text-color="rgba(255,255,255,.6)"
    active-text-color="rgba(255,255,255,1)"
  >
    <div slot="title">
      <img class="nav-brand" src="../assets/images/logo-horizontal-branco.svg" alt="logo-foodcare">
    </div>
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
.nav-brand {
  width: 10em;
  margin-left: 2em;
}
</style>