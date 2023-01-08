import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMask from 'v-mask'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
Vue.use(Toast)
Vue.use(VueMask)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
