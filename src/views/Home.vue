<template>
  <div class="home">
    <!-- <img class="logo" alt="Sofrock logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Sofrock"/> -->
    <Banner :key="bannerKey"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Banner
  },
  data() {
    return {
      bannerKey: 0
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState([
      'lang'
    ])
  },
  watch: {
      lang() {
          this.bannerKey ++
      }
  },
}
</script>

<style lang="scss" scoped>
  .logo {
    max-width: 250px;
    max-height: 250px;
  }
</style>
