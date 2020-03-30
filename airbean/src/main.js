import Vue from 'vue'
import App from './App.vue'
import router from './router'
import json from "./assets/data/menu.json";
import store from "./store"

Vue.config.productionTip = false

new Vue({
  router,
  data:

    () => ({
      menu: json.menu
    }),

  methods: {

  },



 store,
  render: h => h(App)
}).$mount('#app')
