import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { WebCam } from "vue-web-cam";
Vue.use(WebCam);
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VueSimpleAlert);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
