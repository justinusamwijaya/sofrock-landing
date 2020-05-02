<template>
  <div id="footer-wrapper">
      <div id="footer-menu">
          <div class="footer-menu-unit" v-for="(menu, i) in footerMenu.menuList" :key="i">
              <h3>{{ footerMenu[menu].name }}</h3>
              <ul>
                  <li v-for="(listUnit, i) in footerMenu[menu].children" :key="i">
                      <router-link v-if="listUnit.href" :to="listUnit.href">{{ listUnit.name }}</router-link>
                      {{ listUnit.href ? '' : listUnit.name }}
                  </li>
              </ul>
          </div>
      </div>
      <img id="footer-logo" src="../../assets/logo-footer.png" alt="">
      <p id="footer-copyright">© Copyright Sofrock 2020. All Rights Reserved.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Sentences } from '../../assets/js/nationalities.js'

export default {
    name: 'Footer',
    data () {
        return {
            footerMenu: Sentences
        }
    },
    computed: {
        ...mapState([
            'lang',
        ])
    },
    mounted() {
        this.footerMenu = Sentences[this.lang].footerMenu
    },
    watch: {
        lang() {
            this.footerMenu = Sentences[this.lang].footerMenu
        }
    }
}
</script>

<style lang="scss" scoped>
    $primary-color: #2B2B2B;
    $secondary-color: #B73030;
    $footer-title-color: #A3A3A3;

    #footer-wrapper {
        width: 100%;
        min-height: 30rem;
        position: relative;
        background: $primary-color;
        z-index: 1;

        #footer-menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;

            .footer-menu-unit {
                width: 30%;
                padding-right: 5rem;

                h3 {
                    color: $footer-title-color;
                    font-size: 3rem;
                    font-weight: normal;
                    margin-right: 3rem;
                    margin-bottom: 2rem;
                }

                ul {
                    list-style: none;
                    padding: 0;

                    li {
                        color: white;
                        font-size: 1.6rem;
                        padding-bottom: 1rem;

                        a {
                            color: white;
                            text-decoration: none;
                        }

                        a:hover {
                            color: $secondary-color;
                            transition: all .3s;
                        }
                    }
                }
            }
        }

        #footer-logo {
            width: 25rem;
            position: absolute;
            bottom: 5rem;
            left: 4rem;
        }

        #footer-copyright {
            position: absolute;
            bottom: 3rem;
            right: 3rem;
            color: white;
            font-size: 1.4rem;
        }
    }

    @media only screen and (max-width: 900px) {
        #footer-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            
            
            #footer-menu {
                .footer-menu-unit {
                    width: 100%;
                    padding: 5%;
                }
            }

            #footer-logo {
                height: 5.2050rem;
                width: 20rem;
                position: initial;
            }

            #footer-copyright {
                width: 100%;
                text-align: center;
                position: initial;
                font-size: 1.4rem;
                margin-top: 3rem;
                padding-top: 2rem;
                border-top: 1px $secondary-color solid;   
            }
        }
    }

    @media only screen and (max-width: 670px) {
    }
</style>