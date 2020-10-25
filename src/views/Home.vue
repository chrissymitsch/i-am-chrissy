<template>
    <div class="wrapper profile-page">
        <div class="page-header header-filter" :style="headerStyle">
            <div class="title-welcome">
                <h4 class="title">{{$t('welcomeMsg')}}</h4>
            </div>
        </div>
        <div class="main main-raised">
            <div class="section profile-content" id="profile">
                <div class="container">
                    <profile></profile>
                </div>
            </div>
            <div class="section section-experience" id="experience">
                <div class="container">
                    <experience></experience>
                </div>
            </div>
            <div class="section section-knowledge" id="knowledge">
                <div class="container">
                    <knowledge></knowledge>
                </div>
            </div>
            <div class="section section-work" id="work">
                <div class="container">
                    <work></work>
                </div>
            </div>
            <div class="section section-work">
                <div class="md-layout-item text-center">
                    <router-link to="/portfolio">
                        <md-button class="md-success md-lg">{{$t('portfolio_button')}}</md-button>
                    </router-link>
                </div>
            </div>
            <div class="section section-contact" id="contact">
                <div class="container">
                    <contact></contact>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Contact from "./components/ContactSection";
    import Experience from "./components/ExperienceSection";
    import Knowledge from "./components/KnowledgeSection";
    import Profile from "./components/ProfileSection";
    import Work from "./components/WorkSection";

    export default {
        components: {
            Contact,
            Experience,
            Knowledge,
            Profile,
            Work
        },
        name: "index",
        bodyClass: "index-page",
        props: {
            header: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/rinde.jpg")
                /* eslint-enable global-require */
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            },
        }
    };
</script>

<style lang="scss">
    .section-download {
        .md-button + .md-button {
            margin-left: 5px;
        }
    }

    @media all and (min-width: 991px) {
        .btn-container {
            display: flex;
        }
    }
</style>
