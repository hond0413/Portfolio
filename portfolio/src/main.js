import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vuescrollto from './plugins/vue-scrollto'
import vuecarousel from './plugins/vue-carousel'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vuescrollto,
  vuecarousel,
  render: h => h(App)
}).$mount('#app')
