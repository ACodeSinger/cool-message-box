import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import MessageBox from './components/messageBox/index';

Vue.config.productionTip = false;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$alert.config = {
  confirmButtonText: '知道了',
  confirmButtonTextColor: 'green',
};
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$confirm.config = {};

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
