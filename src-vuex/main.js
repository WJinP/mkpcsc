// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import Layout from './components/layout'
import router from './router'
import VueResource from 'vue-resource'
//import axios from 'axios'
Vue.config.productionTip = false
Vue.use(VueResource)

//Vue.prototype.$http=axios;


import  store from './store';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components:{Layout},
  template:'<Layout/>'
  //components: { App },
  //template: '<App/>'
})
