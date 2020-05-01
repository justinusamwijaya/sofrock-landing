<template>
  <div id="contact-body">
    <div id="title-banner">
      <h1>{{contactSentences.title}}</h1>
      <div id="title-img-wrap">
        <div id="overlay"></div>
        <img src="../assets/img/contact/contact.jpg" alt="">
      </div>
    </div>
    <div id="contacts">
      <div v-for="(contact, i) in contactSentences.contacts" :key="i" class="contact-sec">
        <div class="text-sec">
          <p class="addr">{{contact.address}}</p>
          <p class="num">{{contact.number}}</p>
          <p class="em">{{contact.email}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Sentences } from '../assets/js/nationalities.js'

export default {
  name: 'Contact',
  data() {
    return {
      contactSentences: Sentences
    }
  },
  computed: {
      ...mapState([
          'lang',
      ])
  },
  mounted() {
      this.contactSentences = Sentences[this.lang].contact
      window.scrollTo(0, 0);
  },
  watch: {
      lang() {
        this.contactSentences = Sentences[this.lang].contact
      }
  },
}
</script>

<style lang="scss" scoped>
  #contact-body {
    width: 100%;

    #title-banner {
      position: relative;
      width: 100%;
      height: 40rem;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        color: white;
        position: relative;
        font-size: 5rem;
        z-index: 90;
      }

      #title-img-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        top: 0;
        left: 0;
        z-index: 1;

        #overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, .5);
        }

        img {
        }
      }
    }

    .contact-sec {
      padding: 5rem;
      font-size: 2rem;
      
      .text-sec {
        width: 50%;

        .addr {
          font-weight: bold;
        }

        .num {

        }

        .em {
          font-weight: bold;
        }
      }
    }
  }

  @media only screen and (max-width: 670px) {
    #contact-body {
      .contact-sec {
        
        .text-sec {
          width: 100%;

          .addr {
          }

          .num {

          }

          .em {
          }
        }
      }
    }
  }
</style>