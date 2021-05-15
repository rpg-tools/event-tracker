import Vue from 'vue'
import App from './App.vue'

import {time_store} from './store/time_store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: time_store
}).$mount('#app')
