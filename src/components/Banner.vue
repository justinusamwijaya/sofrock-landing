<template>
  <div id="banner-wrapper">
      <div id="banner-default">
          <img id="logo-banner-default" src="../assets/logo-white.png" alt="">
          <h1>{{ sentences[lang].welcome }}</h1>
          <h3><span :id="id"></span><span id="type-cursor">.</span></h3>
      </div>
  </div>
</template>

<script>

import { Sentences } from '../assets/js/nationalities.js'
import { mapState } from 'vuex'

export default {
  name: 'Banner',
  data() {
      return {
          id: 'sl' + parseInt(Math.random() * 99999) + 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'.charAt((Math.random() * 52) - 1),
          sentences: Sentences,
          writeTimeout: null,
          deleteTimeout: null
      }
  },
  props: {
  },
  computed: {
    ...mapState([
      'lang'
    ])
  },
  mounted() {
      this.startTyping()
  },
  destroyed() {
  },
  methods: {
      startTyping: function() {

        document.getElementById(this.id).innerHTML = ''
        let id = this.id

        let slogans = this.sentences[this.lang].slogans

        let sloganNum = 0
        let i = 0
        let typeSpeed = 30
        this.writeTimeout = setTimeout(writingSlogan, 50)

        function writingSlogan() {
            if (i < slogans[sloganNum].length) {
                document.getElementById(id).innerHTML += slogans[sloganNum].charAt(i)
                i++
                this.writeTimeout = setTimeout(writingSlogan, typeSpeed)
            } else {
                clearTimeout(this.writeTimeout)
                this.deleteTimeout = setTimeout(deleteSlogan, 3000)
                if(sloganNum == slogans.length - 1) {
                    sloganNum = 0
                } else {
                    sloganNum++
                }
            }
        }

        function deleteSlogan() {
            if(i > 0) {
                document.getElementById(id).innerHTML = document.getElementById(id).innerHTML.split('').slice(0, document.getElementById(id).innerHTML.length-1).join('')
                i--
                this.deleteTimeout = setTimeout(deleteSlogan, typeSpeed)
            } else {
                clearTimeout(this.deleteTimeout)
                this.writeTimeout = setTimeout(writingSlogan, typeSpeed)
            }
        }
      }
  }
}
</script>

<style lang="scss" scoped>
    $secondary-color: #B73030;
    #banner-wrapper {
        width: 100%;
        height: calc(100vh - 10rem);
        color: white;
        
        h1 {
            width: 100%;
            text-align: center;
            font-size: 6.5rem;
            margin-bottom: 0;
        }

        h3 {
            margin-top: 0;
            font-size: 4.6rem;
            height: 5.6rem;
            min-width: 10%;
            text-align: center;
            font-weight: 100;
        }

        span {
            font-size: 4.6rem;
            margin-bottom: 4.6rem;
        }

        #banner-default {
            padding: 2rem;
            background: $secondary-color;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;         /* Opera/IE 8+ */

            #logo-banner-default {
                width: 30rem;
                height: 30rem;
            }

            #type-cursor {
                color: rgba(0, 0, 0, 0);
                margin-left: .3rem;
                display: inline-block;
                width: .3rem;
                border-radius: .1rem;
                animation: blink 1s infinite;
            }
        }
    }

    @media only screen and (max-width: 900px) {
        #banner-wrapper {
            h1 {
                font-size: 5.6rem;
            }

            span {
                font-size: 4.5rem;
            }

            #banner-default {

                #logo-banner-default {
                    width: 20rem;
                    height: 20rem;
                }
            }
        }
    }

    @media only screen and (max-width: 670px) {
        #banner-wrapper {
            h1 {
                font-size: 4.5rem;
                margin-top: 0;
            }

            h3 {
                margin-top: 0;
                margin-bottom: 10rem;    
            }

            span {
                font-size: 3rem;
            }

            #banner-default {

                #logo-banner-default {
                    width: 15rem;
                    height: 15rem;
                }
            }
        }
    }

    @keyframes blink {
        0% {
            background: white;
        }

        50% {
            background: transparent;
        }

        100% {
            background: white;
        }
    }
</style>