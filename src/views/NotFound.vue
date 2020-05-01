<template>
  <div id="not-found-body">
    <div id="emote">
      :(
    </div>
    <div id="other-half">
      <div id="code">
        404
      </div>
      <div id="msg">
        {{notFoundSentences.msg}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Sentences } from '../assets/js/nationalities.js'

export default {
  name: 'Not Found',
  data() {
    return {
      notFoundSentences: Sentences
    }
  },
  computed: {
      ...mapState([
          'lang',
      ])
  },
  mounted() {
      this.notFoundSentences = Sentences[this.lang].notFound
      window.scrollTo(0, 0);
  },
  watch: {
      lang() {
        this.notFoundSentences = Sentences[this.lang].notFound
      }
  },
}
</script>

<style lang="scss" scoped>
  $primary-color: #B73030;

  #not-found-body {
    width: 100%;
    padding: 20rem;
    box-sizing: border-box;
    color: $primary-color;
    display: flex;
    justify-content: center;
    align-items: center;

    #emote {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      font-size: 25rem;
    }

    #other-half {
      width: 50%;

      #code {
        font-size: 5rem;
      }

      #msg {
        font-size: 3rem;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    #not-found-body {
      flex-wrap: wrap;
      padding: 10rem;

      #emote {
        width: 100%;
        font-size: 15rem;
      }

      #other-half {
        width: 100%;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-align: center;

        #code {
          font-size: 5rem;
          width: 100%;
        }

        #msg {
          font-size: 3rem;
          width: 100%;
        }
      }
    }
  }
</style>