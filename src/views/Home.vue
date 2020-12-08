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
            <div class="section section-work" id="portfolio">
                <div class="container">
                    <portfolio></portfolio>
                </div>
            </div>
            <div class="section section-certification" id="certification">
                <div class="container">
                    <certification></certification>
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
    import Portfolio from "./components/PortfolioSection";
    import Certification from "./components/CertificationSection";

    export default {
        components: {
            Contact,
            Experience,
            Knowledge,
            Profile,
            Portfolio,
            Certification
        },
        name: "index",
        bodyClass: "index-page",
        props: {
            header: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/efeu.jpg")
                /* eslint-enable global-require */
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        },
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
