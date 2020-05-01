import Vue from 'vue'
import VueRouter from 'vue-router'

const getComponent = (component) => {

  const COMPONENTS = {
    Home: import(/* webpackChunkName: "Home" */ `../views/Home.vue`),
    About: import(/* webpackChunkName: "About" */ `../views/About.vue`),
    Contact: import(/* webpackChunkName: "Contact" */ `../views/Contact.vue`),
    Products: import(/* webpackChunkName: "Products" */ `../views/Products.vue`),
    NotFound: import(/* webpackChunkName: "NotFound" */ `../views/NotFound.vue`)
  }

  return () => COMPONENTS[component]
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: getComponent('Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: getComponent('About')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: getComponent('Contact')
  },
  {
    path: '/products',
    name: 'Products',
    component: getComponent('Products')
  },
  {
    path: '*',
    name: 'NotFound',
    component: getComponent('NotFound')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
