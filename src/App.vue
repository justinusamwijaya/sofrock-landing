<template>
  <div id="app">
    <Navbar :menus="menus"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="body-wrap">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/main/Navbar.vue'
  import Footer from '@/components/main/Footer.vue'
  import { mapState } from 'vuex'
  import { Sentences } from './assets/js/nationalities.js'

  export default {
    name: 'App',
    data() {
      return {
        menus: []
      }
    },
    components: {
      Navbar,
      Footer,
    },
    mounted() {
      this.renderMenu()
    },
    computed: {
      ...mapState([
        'lang'
      ])
    },
    watch: {
      lang() {
        this.renderMenu()
        window.scrollTo(0, 0);
      }
    },
    methods: {
      renderMenu() {
        this.menus = [
          { id: 'about', href: '/about', name: Sentences[this.lang].menus.about }, 
          // { id: 'products', href: '/products', name: Sentences[this.lang].menus.products }, 
          { id: 'contact', href: '/contact', name: Sentences[this.lang].menus.contact }
        ]
      },
    }
  }
</script>

<style lang="scss">
  #body-wrap {
    margin-top: 10rem;
  }
</style>
