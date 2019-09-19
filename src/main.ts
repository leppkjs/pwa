import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import BaseLayout from './layouts/BaseLayout.vue';
import router from './router';

import './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(BaseLayout),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app');
