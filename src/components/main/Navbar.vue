<template>
  <div id="main-nav-wrap" class="test">
      <div id="main-nav">
        <div id="main-nav-logo-wrap">
            <router-link @click.native="mobileMenuModal = false" style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;" to="/">
                <img id="main-nav-logo" src="../../assets/logo-n-text.png" alt="">
            </router-link>
        </div>

        <!-- menu desktop section -->
        <div id="menu-section">
            <div class="menu show-desktop" v-for="menu in menus" :key="menu.id">
                <router-link :to="menu.href">{{ menu.name }}</router-link>
            </div>
        </div>

        <!-- nationality desktop section  -->
        <div id="lang-btn" class="show-desktop" @mouseover="nationModal = true" @mouseleave="nationModal = false">
            <button>
                <img :src="getNationalityImg(lang)" alt=""> <div>{{ nations[lang].label }}</div>
            </button>
            <transition name="fade">
                <div v-if="nationModal" id="lang-list-wrap">
                    <ul>
                        <li v-for="(nation, i) in nations.options" :key='i'>
                            <a class="nation-option" @click="changeLanguage(nation)">
                                <img :src="getNationalityImg(nation)" alt="">
                                <div>{{ nations[nation].label }}</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>

        <!-- menu hamburger section -->
        <div @click="mobileMenuModal = !mobileMenuModal" id="menu-ham" class="hide-desktop">
            <div class="section-ham"></div>
            <div class="section-ham"></div>
            <div class="section-ham"></div>
        </div>   
      </div>

      <!-- menu and nationality non desktop section -->
      <transition name="scroll">
        <div v-if="mobileMenuModal" id="mobile-menu-modal" class="hide-desktop">
            <div class="mobile-menu-unit">
                <button @click="mobileNationModal = !mobileNationModal" id="mobile-nat">
                    <div>{{ nations[lang].label }}</div> <img :src="getNationalityImg(lang)" alt="">
                </button>
                <transition name="fade">
                    <div v-if="mobileNationModal" id="lang-list-wrap-mobile">
                        <ul>
                            <li v-for="(nation, i) in nations.options" :key='i'>
                                <a class="nation-option" @click="changeLanguage(nation);">
                                    <img :src="getNationalityImg(nation)" alt="">
                                    <div>{{ nations[nation].label }}</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
            <div v-for="menu in menus" :key="menu.id" class="mobile-menu-unit">
                <router-link @click.native="mobileMenuModal = false" :to="menu.href">
                    <div>
                        {{ menu.name }}
                    </div>
                </router-link>
            </div>
        </div>
      </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Nations } from '../../assets/js/nationalities.js'

export default {
    name: 'Navbar',
    data() {
        return {
            nations: Nations,
            nationModal: false,
            mobileMenuModal: false,
            mobileNationModal: false,
        }
    },
    props: {
        menus: Array,
    },
    computed: {
        ...mapState([
            'lang',
        ])
    },
    methods: {
        ...mapActions([
            'changeLang',
        ]),
        changeLanguage(val) {
            if(val !== this.lang) {
                this.changeLang(val)
                this.mobileMenuModal = false
            }
            this.mobileNationModal = false
        },
        getNationalityImg(nat) {
            var images = require.context('../../assets/flags/', false, /\.svg$/)
            return images('./' + nat + ".svg")
        },
        testing() {
            this.$emit('test', 'HI THERE')
        },
    }
}
</script>

<style lang="scss" scoped>
    $secondary-color: #B73030;
    #main-nav-wrap {
        height: 10rem;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        #main-nav {
            height: 100%;
            width: 100%;
            z-index: 9999;
            border-bottom:.1rem solid #DCDCDC;
            background: white;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;

            #main-nav-logo-wrap {
                width: 30%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: .3rem;
                z-index: 999;

                #main-nav-logo {
                    max-width: 50%;
                    max-height: 50%;
                }
            }

            #menu-section {
                width: 60%;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .menu {
                    font-weight: bold;
                    font-size: 1.3rem;
                    min-width: 9rem;
                    width: 10%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
            
                    :hover {
                        color: $secondary-color;
                        transition: all .3s;
                    }

                    a {
                        text-decoration: none;  
                        color: rgba(.4, .4, .4, 1);
                    }
                }
            }

            #lang-btn {
                width: 10%;
                position: relative;
                display: flex;
                justify-content: flex-start;
                padding-left: 1rem;

                #lang-list-wrap {
                    width: 10rem;
                    background: white;
                    position: absolute;
                    bottom: -10rem;
                    left: 2rem;
                    border-radius: .4rem;
                    -webkit-box-shadow: 0 .2rem .5rem 0 rgba(0,0,0,.4);
                    -moz-box-shadow: 0 .2rem .5rem 0 rgba(0,0,0,.4);
                    box-shadow: 0 .2rem .5rem 0 rgba(0,0,0,.4);

                    ul {
                        padding: 0;

                        li {
                            list-style: none;
                            cursor: pointer;

                            :hover {
                                background: $secondary-color;
                                color: rgb(204, 204, 204);
                                transition: all .3s;
                            }

                            .nation-option {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                padding: 1rem;
                                font-weight: bold;

                                img {
                                    width: 2rem;
                                    height: 2rem;
                                    margin-right: 1rem;
                                }

                                div {
                                    font-size: 1.2rem;
                                }
                            }
                        }
                    }
                }

                button {
                    border: 0;
                    background: rgba(0, 0, 0, 0);
                    outline: none;
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    div {
                        margin-left: 1rem;
                        font-weight: bold;
                        font-size: 1.3rem;
                    }

                    img {
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }

            #menu-ham {
                width: 4.5rem;
                height: 3rem;
                background: rgba(0, 0, 0, 0);
                border-radius: 1rem;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                position: relative;
                z-index: 999;

                .section-ham {
                    height: .5rem;
                    width: 100%;
                    background: $secondary-color;
                }
            }
        }

        #mobile-menu-modal {
            position: fixed;
            top: 10rem;
            height: calc(100vh);
            width: 100%;
            background: rgba(250, 250, 250, .9);
            z-index: 0;
            padding: 1%;
            border-bottom-left-radius: 5rem;
            border-bottom-right-radius: 5rem;
            -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
            -moz-box-sizing: border-box;    /* Firefox, other Gecko */
            box-sizing: border-box;         /* Opera/IE 8+ */

            .mobile-menu-unit {
                width: 98%;
                margin-left: 1%;
                margin-right: 1%;
                padding: 2rem;
                border-bottom: solid rgba(0,0,0,.1) .1rem;
                -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
                -moz-box-sizing: border-box;    /* Firefox, other Gecko */
                box-sizing: border-box;         /* Opera/IE 8+ */

                #mobile-nat {
                    width: 100%;
                    background: none;
                    border: 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    :active, :focus {
                        outline: none;
                    }

                    img {
                        width: 3rem;
                        height: 3rem;
                    }
                    
                    div {
                        font-weight: bold;
                    }
                }

                #lang-list-wrap-mobile {
                    ul {
                        padding: 0;

                        li {
                            list-style: none;
                            cursor: pointer;

                            :hover {
                                background: $secondary-color;
                                color: rgb(204, 204, 204);
                                transition: all .3s;
                            }

                            .nation-option {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                padding: 1rem;
                                font-weight: bold;

                                img {
                                    width: 2rem;
                                    height: 2rem;
                                    margin-right: 1rem;
                                }

                                div {
                                    font-size: 1.2rem;
                                }
                            }
                        }
                    }
                }

                a {
                    text-decoration: none;
                    font-size: 1.4rem;
                    font-weight: bold;
                    color: black;

                    :focus, :active {
                        outline: none;
                        background: none;
                    }

                    div {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        
    }

    @media only screen and (max-width: 900px) {
        #main-nav-wrap {

        }
    }

    @media only screen and (max-width: 670px) {
        #main-nav-wrap {
            #main-nav {
                #main-nav-logo-wrap {
                    width: 40%;
                    #main-nav-logo {
                        max-width: 70%;
                        max-height: 70%;
                    }
                }

                #menu-section {
                    width: 40%;
                }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .scroll-enter-active {
        transition: all .5s ease;
    }

    .scroll-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .scroll-enter, .scroll-leave-to {
        transform: translateY(-60rem);
        opacity: 0;
    }
</style>
