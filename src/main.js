import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes';
import {store} from './store/store.js';

export const eventBus = new Vue({
  data:{
    showModal:false
  },
  methods:{

  }
})


const router = new VueRouter({
  routes,

  mode:'history'
});

Vue.use(VueRouter);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
