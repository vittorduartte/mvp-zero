import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import './styles/fonts.css'
import './styles/main.css'
import VueTheMask from 'vue-the-mask'
import Vuex from 'vuex'
// import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueTheMask)
// Vue.use(Vuelidate)
Vue.use(Vuesax, {
  theme: {
    colors: {
      success:'#6A8157',
      danger:'#8D1D09',
      warning:'#EEB506',
      primary:'#E84738',
    }
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
