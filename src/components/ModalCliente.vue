<template>
  <vs-popup
    title="Recebemos o seu pedido!"
    :active.sync="popupOrder"
  >
    <h2>Parabéns, {{ order.name }}! 🎉🎊</h2>
    <p>
      Você já está a um passo de dar uma alimentação mais saudável
      e contribuir com a longevidade do(a) {{ order.pet }}!
      Ele também agradece por isso 🐶😺💕
    </p>
    <p>
      Estamos analizando os dados do seu amiguinho e preparando o
      cardápio especial para ele. 🤖 Em breve nossa equipe de vendas
      entrará em contato com todos os detalhes e ofertas.
    </p>
  </vs-popup>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("Order", ["openPopupOrder"]),
  },
  computed: {
    ...mapState("Order", ["order", "popupOrder"]),
    popupOrder: {
        get(){
            return this.popupOrder
        },
        set(){
            this.openPopupOrder()
        }
    }
  },
};
</script>

<style scoped>
</style>