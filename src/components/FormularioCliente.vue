<template>
  <form class="order-form">
    <vs-input
      class="form-element"
      size="large"
      label="Nome do tutor:"
      placeholder="Digite o seu nome"
      v-model="nomeTutor"
    />
    <ul class="form-element_radio">
      <label class="form-label_radio" for="possuiComorbidade"
        >Qual espécie do seu pet?</label
      >
      <li>
        <vs-radio v-model="especie" vs-name="raca" vs-value="Cao">Cão</vs-radio>
      </li>
      <li>
        <vs-radio v-model="especie" vs-name="raca" vs-value="Gato"
          >Gato</vs-radio
        >
      </li>
    </ul>
    <vs-select
      v-if="especie == 'Cao'"
      size="large"
      class="form-element-select"
      label="Raças de cães:"
      placeholder="Selecione a raça do seu pet"
      width="100%"
      v-model="racaCao"
    >
      <vs-select-item
        :key="index"
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in racasPetCaes"
      />
    </vs-select>
    <vs-select
      v-if="especie == 'Gato'"
      size="large"
      class="form-element-select"
      label="Raças de gato:"
      placeholder="Selecione a raça do seu pet"
      width="100%"
      v-model="racaGato"
    >
      <vs-select-item
        :key="index"
        :value="item.value"
        :text="item.text"
        v-for="(item, index) in racasPetGatos"
      />
    </vs-select>
    <vs-input
      class="form-element"
      size="large"
      label="Nome do Pet:"
      placeholder="Digite o nome do seu pet"
      v-model="nomePet"
    />
    <vs-input
      class="form-element"
      size="large"
      label="Idade do pet:"
      placeholder="Digite a idade do seu pet"
      v-model="idadePet"
    />
    <vs-input
      class="form-element"
      size="large"
      label="Peso:"
      placeholder="Digite o peso do seu pet"
      v-model="pesoAtual"
    />
    <vs-input
      class="form-element"
      size="large"
      label="Telefone:"
      v-mask="['(##) ####-####', '(##) #####-####']"
      placeholder="Digite o seu telefone"
      v-model="telefone"
    />
    <vs-input
      class="form-element"
      size="large"
      label="Seu melhor email:"
      placeholder="Digite o seu melhor email"
      type="email"
      v-model="email"
    />
    <ul class="form-element_radio">
      <label class="form-label_radio" for="possuiComorbidade"
        >O pet é castrado?</label
      >
      <li>
        <vs-radio v-model="eCastrado" vs-name="eCastrado" :vs-value="true"
          >Sim</vs-radio
        >
      </li>
      <li>
        <vs-radio v-model="eCastrado" vs-name="eCastrado" :vs-value="false"
          >Não</vs-radio
        >
      </li>
    </ul>
    <ul class="form-element_radio">
      <label class="form-label_radio" for="possuiComorbidade"
        >O pet possui comorbidade(s)?</label
      >
      <li>
        <vs-radio
          v-model="possuiComorbidade"
          vs-name="possuiComorbidade"
          :vs-value="true"
          >Sim</vs-radio
        >
      </li>
      <li>
        <vs-radio
          v-model="possuiComorbidade"
          vs-name="possuiComorbidade"
          :vs-value="false"
          >Não</vs-radio
        >
      </li>
    </ul>
    <vs-input
      v-if="possuiComorbidade"
      size="large"
      class="form-element"
      v-model="comorbidades"
      label="Quais comorbidades?"
      placeholder="Por ex.: alergia a banana"
    >
    </vs-input>
    <vs-divider></vs-divider>
    <vs-button
      :disabled="isLoading"
      class="form-element"
      size="large"
      @click="registerOrder()"
      >Solicitar Pedido</vs-button
    >
  </form>
</template>

<script>
import service from "../services";
export default {
  data() {
    return {
      isLoading: false,
      nomeTutor: "",
      nomePet: "",
      idadePet: "",
      email: "",
      telefone: "",
      especie: "",
      racaCao: "",
      racaGato: "",
      racasPetGatos: [
        { text: "Siamês", value: "siamês" },
        { text: "Angorá Turco", value: "angorá_turco" },
        { text: "Himalaio", value: "himalaio" },
        { text: "Azul Russo", value: "azul_russo" },
        { text: "Gato Persa", value: "gato_persa" },
        { text: "Pelo Curto Brasileiro", value: "pelo_curto_brasileiro" },
        { text: "Pelo Curto Americano", value: "pelo_curto_americano" },
        { text: "Snowshoe", value: "snowshoe" },
        { text: "Exótico", value: "exótico" },
      ],
      racasPetCaes: [
        { text: "Akita", value: "akita" },
        { text: "Basset hound", value: "basset_hound" },
        { text: "Beagle", value: "beagle" },
        { text: "Bichon frisé", value: "bichon_frisé" },
        { text: "Boiadeiro australiano", value: "boiadeiro_australiano" },
        { text: "Border collie", value: "border_collie" },
        { text: "Boston terrier", value: "boston_terrier" },
        { text: "Boxer", value: "boxer" },
        { text: "Buldogue francês", value: "buldogue_francês" },
        { text: "Buldogue inglês", value: "buldogue_inglês" },
        { text: "Bull terrier", value: "bull_terrier" },
        { text: "Cane corso", value: "cane_corso" },
        {
          text: "Cavalier king charles spaniel",
          value: "cavalier_king_charles_spaniel",
        },
        { text: "Chihuahua", value: "chihuahua" },
        { text: "Chow chow", value: "chow_chow" },
        { text: "Cocker spaniel inglês", value: "cocker_spaniel_inglês" },
        { text: "Dachshund", value: "dachshund" },
        { text: "Dálmata", value: "dálmata" },
        { text: "Doberman", value: "doberman" },
        { text: "Dogo argentino", value: "dogo_argentino" },
        { text: "Dogue alemão", value: "dogue_alemão" },
        { text: "Fila brasileiro", value: "fila_brasileiro" },
        { text: "Golden retriever", value: "golden_retriever" },
        { text: "Husky siberiano", value: "husky_siberiano" },
        { text: "Jack russell terrier", value: "jack_russell_terrier" },
        { text: "Labrador retriever", value: "labrador_retriever" },
        { text: "Lhasa apso", value: "lhasa_apso" },
        { text: "Lulu da pomerânia", value: "lulu_da_pomerânia" },
        { text: "Maltês", value: "maltês" },
        { text: "Mastiff inglês", value: "mastiff_inglês" },
        { text: "Mastim tibetano", value: "mastim_tibetano" },
        { text: "Pastor alemão", value: "pastor_alemão" },
        { text: "Pastor australiano", value: "pastor_australiano" },
        { text: "Pastor de Shetland", value: "pastor_de_shetland" },
        { text: "Pequinês", value: "pequinês" },
        { text: "Pinscher", value: "pinscher" },
        { text: "Pit bull", value: "pit_bull" },
        { text: "Poodle", value: "poodle" },
        { text: "Pug", value: "pug" },
        { text: "Rottweiler", value: "rottweiler" },
        { text: "Schnauzer", value: "schnauzer" },
        { text: "Shar-pei", value: "shar-pei" },
        { text: "Shiba", value: "shiba" },
        { text: "Shih tzu", value: "shih_tzu" },
        {
          text: "Sem Raça Definida",
          value: "sem_raca_definida",
        },
        {
          text: "Staffordshire bull terrier",
          value: "staffordshire_bull_terrier",
        },
        { text: "Weimaraner", value: "weimaraner" },
        { text: "Yorkshire", value: "yorkshire" },
      ],
      pesoAtual: "",
      possuiComorbidade: false,
      comorbidades: "",
      eCastrado: false,
      alimentoNatural: "",
    };
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data());
    },
    async registerOrder() {
      this.isLoading = true;
      const create_at = new Date();
      const response = await service.postOrder({
        created_at: create_at.toLocaleString(),
        nome_tutor: this.nomeTutor,
        nome_pet: this.nomePet,
        idade_pet: this.idadePet,
        especie_pet: this.especie,
        raca_cao: this.racaCao,
        raca_gato: this.racaGato,
        peso_pet: this.pesoAtual,
        telefone_tutor: this.telefone,
        email_tutor: this.email,
        e_castrado: this.eCastrado,
        e_comorbidade: this.possuiComorbidade,
        comorbidade_nome: this.comorbidades,
      });

      if (response.error) {
        this.$vs.notify({
          time: 4000,
          title: "Ops! Isso não deu certo!",
          text: "Algum problema aconteceu ao solicitar o seu pedido. Tente novamente!",
          color: "danger",
          position: "top-right",
          icon: "pets",
        });
      } else {
        this.$vs.notify({
          time: 4000,
          title: "Parabéns!",
          text: "Você deu o primeiro passo para uma vida mais saudável para seu pet!",
          color: "success",
          position: "top-right",
          icon: "pets",
        });
      }

      this.isLoading = false;
      this.reset();
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
}
li {
  margin: 0 10px;
}
.form-element {
  width: 100%;
  margin: 10px 0px;
}
.order-form {
  margin: 3em 0px;
  border-radius: 10px;
  padding: 2.5em;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: #FFFFFF;
}
.form-element_radio {
  margin: 20px 0px;
}
input {
  height: 45px !important;
}
.form-label_radio {
  font-family: "Montserrat Medium";
}
</style>