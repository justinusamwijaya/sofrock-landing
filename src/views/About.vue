<template>
  <div id="about-body">
    <div>
      <div v-for="(about, i) in aboutSentences" :key="i" class="about-us-sect">
        <div class="text">
          <h3 :style="about.imgName ? {} : {color: 'black'}" v-if="about.title">{{about.title}}</h3>
          <p :style="about.imgName ? {} : {color: 'black'}">{{about.content}}</p>
        </div>
        <div v-if="about.imgName" class="img-wrap">
          <div class="overlay"></div>
          <img :src="getAboutImg(about.imgName)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Sentences } from '../assets/js/nationalities.js'

export default {
  name: 'About',
  data() {
    return {
      aboutSentences: Sentences
    }
  },
  computed: {
      ...mapState([
          'lang',
      ])
  },
  mounted() {
      this.aboutSentences = Sentences[this.lang].aboutUs
      window.scrollTo(0, 0);
  },
  methods: {
    getAboutImg(imgName) {
        var images = require.context('../assets/img/about', false)
        return images('./' + imgName)

    }
  },
  watch: {
      lang() {
        this.aboutSentences = Sentences[this.lang].aboutUs
      }
  },
}
</script>

<style lang="scss" scoped>
  #about-body {
    width: 100%;

    .about-us-sect {
      width: 100%;
      position: relative;
      overflow: hidden;

      .text {
        width: 100%;
        height: 100%;
        z-index: 999;
        padding: 10rem;
        position: relative;
        box-sizing: border-box;
        
        h3 {
          color: white;
          font-size: 3rem;
          text-align: center;
        }
        
        p {
          color: white;
          font-size: 2.4rem;
          text-align: center;
          width: 80%;
          margin-left: 10%;
        }
      }

      .img-wrap {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position:absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

        .overlay {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, .6);
          position: absolute;
          top: 0;
          left: 0;
        }
      }

    }
  }

  @media only screen and (min-width: 1000px) {
    #about-body {
      .about-us-sect {
        .img-wrap {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 670px) {
    #about-body {
      .about-us-sect {
        .text {
          padding: 3rem;
        }
        .img-wrap {
          img {
            
          }
        }
      }
    }
  }
</style>