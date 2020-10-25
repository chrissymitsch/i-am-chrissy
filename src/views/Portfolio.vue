<template>
    <div class="wrapper portfolio-page">
        <div class="page-header header-filter" :style="headerStyle">
            <div class="title-welcome">
                <h1 class="title">Portfolio</h1>
            </div>
        </div>
        <div class="main main-raised">
            <div class="section">
                <div class="container">
                    <tabs :tab-name="['App Development', 'Game Design & Development', 'Motion Graphics', 'Graphic Design']"
                          plain
                          color-button="primary">
                        <template slot="tab-pane-1">
                            <h2 class="title text-center">App Development</h2>
                            ...TBD
                        </template>
                        <template slot="tab-pane-2">
                            <h2 class="title text-center">Game Design & Development</h2>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
                                    <div class="iframe-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/cHAKNQiiZkQ"
                                                frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template slot="tab-pane-3">
                            <h2 class="title text-center">Motion Graphics</h2>
                            <div class="iframe-container">
                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/240901556"
                                        width="640"
                                        height="360" frameborder="0" allowfullscreen></iframe>
                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/251237932"
                                        width="640"
                                        height="360" frameborder="0" allowfullscreen></iframe>
                                <iframe title="vimeo-player" src="https://player.vimeo.com/video/244908737"
                                        width="640"
                                        height="360" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </template>
                        <template slot="tab-pane-4">
                            <h2 class="title text-center">Graphic Design</h2>
                            ...TBD
                        </template>
                    </tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Tabs from "../components/Tabs";

    export default {
        components: {Tabs},
        bodyClass: "portfolio-page",
        props: {
            header: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/autumn.jpg")
                /* eslint-enable global-require */
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        }
    };
</script>

<style lang="scss" scoped>
    .section {
        padding: 0;
    }

    .md-card-tabs .md-list {
        flex-flow: wrap !important;
    }
</style>
