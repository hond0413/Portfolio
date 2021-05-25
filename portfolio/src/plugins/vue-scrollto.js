import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 1000,
  easing: "ease",
  offset: -40
})

export default new Vue({
});
