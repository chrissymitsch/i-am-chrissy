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
                    <md-button class="md-success md-lg" @click="openPortfolioSection">{{$t('portfolio_button')}}</md-button>
                </div>
            </div>
            <div class="section section-work" id="portfolio" :class="{ 'md-hide': toggledPortfolioSection }">
                <div class="container text-center">
                    PORTFOLIO

                    <md-tabs class="md-primary" md-alignment="centered">
                        <md-tab id="tab-apps" md-label="Apps">
                            TBD
                        </md-tab>

                        <md-tab id="tab-games" md-label="Games">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/cHAKNQiiZkQ"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                        </md-tab>

                        <md-tab id="tab-design" md-label="Design">
                            TBD
                        </md-tab>

                        <md-tab id="tab-etc" md-label="etc.">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/240901556"
                                    width="640"
                                    height="360" frameborder="0" allowfullscreen></iframe>
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/251237932"
                                    width="640"
                                    height="360" frameborder="0" allowfullscreen></iframe>
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/244908737"
                                    width="640"
                                    height="360" frameborder="0" allowfullscreen></iframe>
                        </md-tab>
                    </md-tabs>

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
                default: require("@/assets/img/efeu.jpg")
                /* eslint-enable global-require */
            }
        },
        data: () => ({
            toggledPortfolioSection: true
        }),
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        },
        methods: {
            openPortfolioSection() {
                this.toggledPortfolioSection = !this.toggledPortfolioSection;
            }
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
