import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import Main from './templates/Main'
import Products from './templates/Products'
import Add from './templates/Add'
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/main',
      component: Main,
      name: 'main',
      alias: '/'
    },
    {
      path: '/products',
      component: Products,
      name: 'Products'
    },
    {
      path: '/add',
      component: Add,
      name: 'Add product'
    }
  ]
})

const store = new Vuex.Store({
  state: {
    products: []
  },
  getters: {
  },
  mutations: {
    addProduct(state,product){
      state.products.push({
        name: product.name,
        price: product.price
      });      
    },
    removeProduct(state,id){
      state.products.splice(id,1);
    }
  },
  actions: {
  }
})

new Vue({
  el: '#app',
  router: router,
  store,
  template: '<App/>',
  components: { App, Main, Products, Add }
}).$mount('#app')
