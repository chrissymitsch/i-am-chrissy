<template>
    <div id="main-navbar">
        <md-toolbar
                id="toolbar"
                md-elevation="0"
                class="md-transparent md-absolute"
                :class="extraNavClasses"
                :color-on-scroll="colorOnScroll">
            <div class="md-toolbar-row md-collapse-lateral">
                <div class="md-toolbar-section-start">
                    <md-list>
                        <li class="md-list-item">
                            <a href="javascript:void(0)"
                               class="md-list-item-router md-list-item-container md-button-clean dropdown">
                                <div class="md-list-item-content">

                                    <drop-down direction="down">
                                        <md-button slot="title"
                                                   class="dropdown-toggle md-just-icon md-simple md-sm">
                                            <flag :iso="selectedFlag" v-bind:squared="false"/>
                                        </md-button>

                                        <!-- HOME NAVIGATION -->
                                        <ul class="dropdown-menu dropdown-menu-left">
                                            <li v-for="entry in languages" :key="entry.title">
                                                <a class="dropdown-item" @click="changeLocale(entry)"
                                                   href="javascript:void(0)">
                                                    <flag :iso="entry.flag" v-bind:squared="false"/>
                                                    <span class="flaglabel">{{entry.title}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <!-- END -->
                                    </drop-down>

                                </div>
                            </a>
                        </li>
                    </md-list>
                </div>
                <div class="toolbar-titles toolbar-title">
                    <h3 class="title">Christine Mitsch</h3>
                </div>
                <div class="md-toolbar-section-end">
                    <md-button class="md-just-icon md-simple md-toolbar-toggle"
                               :class="{ 'md-hide': toggledClass }"
                               @click="toggleNavbarMobile()">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </md-button>

                    <div class="md-collapse">
                        <div class="md-collapse-wrapper">
                            <md-button class="md-icon-button md-just-icon md-simple navbar-closer"
                                       @click="toggleNavbarMobile()">
                                <md-icon>keyboard_arrow_left</md-icon>
                            </md-button>

                            <md-list>
                                <li class="md-list-item">
                                    <a href="javascript:void(0)"
                                       class="md-list-item-router md-list-item-container md-button-clean dropdown">
                                        <div class="md-list-item-content">
                                            <drop-down direction="down">
                                                <md-button
                                                        slot="title"
                                                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                                                        data-toggle="dropdown"
                                                >
                                                    <md-icon>explore</md-icon>
                                                    <p>{{$t('explore')}}</p>
                                                </md-button>

                                                <!-- HOME NAVIGATION -->
                                                <ul v-if="menu == 'home'"
                                                    class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('profile')"
                                                           class="dropdown-item">{{$t('profile')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('experience')"
                                                           class="dropdown-item">{{$t('experience')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('knowledge')"
                                                           class="dropdown-item">{{$t('knowledge')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('work')"
                                                           class="dropdown-item">{{$t('work')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('contact')"
                                                           class="dropdown-item">{{$t('contact')}}
                                                        </a>
                                                    </li>
                                                </ul>
                                                <!-- END -->

                                                <!-- PORTFOLIO NAVIGATION -->
                                                <ul v-if="menu == 'portfolio'"
                                                    class="dropdown-menu dropdown-menu-right">
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('app')"
                                                           class="dropdown-item">{{$t('appdevelopment')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('game')"
                                                           class="dropdown-item">{{$t('gamedevelopment')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('motion')"
                                                           class="dropdown-item">{{$t('motiongraphics')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('graphic')"
                                                           class="dropdown-item">{{$t('graphicdesign')}}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:void(0)"
                                                           @click="scrollToElement('contact')"
                                                           class="dropdown-item">{{$t('contact')}}
                                                        </a>
                                                    </li>
                                                </ul>
                                                <!-- END -->
                                            </drop-down>
                                        </div>
                                    </a>
                                </li>

                                <router-link v-if="menu == 'portfolio'" to="/home">
                                    <md-list-item href="#" target="_blank">
                                        <i class="fas fa-home"></i>
                                        <p>{{$t('home')}}</p>
                                    </md-list-item>
                                </router-link>
                                <md-list-item
                                        href="https://www.xing.com/profile/Christine_Mitsch2"
                                        target="_blank">
                                    <i class="fab fa-xing"></i>
                                    <p class="hidden-lg">Xing</p>
                                    <md-tooltip md-direction="bottom">Xing</md-tooltip>
                                </md-list-item>
                                <md-list-item
                                        href="https://www.linkedin.com/in/christinemitsch/"
                                        target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                    <p class="hidden-lg">LinkedIn</p>
                                    <md-tooltip md-direction="bottom">LinkedIn</md-tooltip>
                                </md-list-item>
                                <md-list-item
                                        href="https://github.com/chrissymitsch"
                                        target="_blank">
                                    <i class="fab fa-github"></i>
                                    <p class="hidden-lg">GitHub</p>
                                    <md-tooltip md-direction="bottom">GitHub</md-tooltip>
                                </md-list-item>
                                <md-list-item
                                        href="https://www.grin.com/user/1868641"
                                        target="_blank">
                                    <i class="material-icons">library_books</i>
                                    <p class="hidden-lg">Grin</p>
                                    <md-tooltip md-direction="bottom">Grin Autorenprofil</md-tooltip>
                                </md-list-item>
                            </md-list>
                        </div>
                    </div>
                </div>
            </div>
        </md-toolbar>
    </div>
</template>

<script>

    import i18n from '@/plugins/i18n';
    import DropDown from "../components/Dropdown";

    let resizeTimeout;

    function resizeThrottler(actualResizeHandler) {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(() => {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 66);
        }
    }

    export default {
        components: {
            DropDown
        },
        props: {
            type: {
                type: String,
                default: "white",
                validator(value) {
                    return [
                        "white",
                        "default",
                        "primary",
                        "danger",
                        "success",
                        "warning",
                        "info"
                    ].includes(value);
                }
            },
            colorOnScroll: {
                type: Number,
                default: 0
            },
            menu: {
                type: String,
                default: 'home'
            }
        },
        data: () => ({
            extraNavClasses: "",
            toggledClass: false,
            languages: [
                {flag: 'gb', language: 'en', title: 'English'},
                {flag: 'de', language: 'de', title: 'Deutsch'}
            ],
            selectedFlag: "gb"
        }),
        methods: {
            bodyClick() {
                let bodyClick = document.getElementById("bodyClick");

                if (bodyClick === null) {
                    const body = document.querySelector("body");
                    const elem = document.createElement("div");
                    elem.setAttribute("id", "bodyClick");
                    body.appendChild(elem);

                    bodyClick = document.getElementById("bodyClick");
                    bodyClick.addEventListener("click", this.toggleNavbarMobile);
                } else {
                    bodyClick.remove();
                }
            },
            toggleNavbarMobile() {
                this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
                this.toggledClass = !this.toggledClass;
                this.bodyClick();
            },
            handleScroll() {
                const scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
                const navbarColor = document.getElementById("toolbar");
                if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
                    this.extraNavClasses = `md-${this.type}`;
                    navbarColor.classList.remove("md-transparent");
                } else if (this.extraNavClasses) {
                    this.extraNavClasses = "";
                    navbarColor.classList.add("md-transparent");
                }
            },
            scrollListener() {
                resizeThrottler(this.handleScroll);
            },
            scrollToElement(id) {
                const elementId = document.getElementById(id);
                if (elementId) {
                    elementId.scrollIntoView({block: "end", behavior: "smooth"});
                }
            },
            changeLocale(locale) {
                i18n.locale = locale.language;
                this.selectedFlag = locale.flag;
            }
        },
        mounted() {
            this.toggledClass = this.NavbarStore.showNavbar;
            document.addEventListener("scroll", this.scrollListener);
        },
        beforeDestroy() {
            document.removeEventListener("scroll", this.scrollListener);
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/material-kit/_variables';

    .flaglabel {
        padding-left: 8px;
    }
</style>