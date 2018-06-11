import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('common/image/default.png'),
  attempt: 1
})
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
