// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://121.36.7.55:8080/NumberSelection/'
// axios.defaults.baseURL = 'http://10.10.5.10:8086/'

import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(Vuex);

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h => h(App),
  router,
  store
})
