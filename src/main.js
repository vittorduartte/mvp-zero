import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
import './styles/fonts.css'
import './styles/main.css'
import VueTheMask from 'vue-the-mask'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueTheMask)
Vue.use(Vuesax, {
  // options here
})
new Vue({
  render: h => h(App),
}).$mount('#app')
