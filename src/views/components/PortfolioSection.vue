<template>
    <div class="wrapper">
        <div id="work">
            <div class="info text-center">
                <h3>{{$t('work')}}</h3>
            </div>
            <div class="md-layout">
                <div class="md-layout-item md-medium-size-100 mx-auto md-small-size-100">
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <md-card>
                                <carousel
                                        :per-page="1"
                                        loop
                                        :speed="600"
                                        :mouse-drag="false"
                                >
                                    <slide>
                                        <img :src="app00" alt="app00"/>
                                    </slide>
                                </carousel>
                            </md-card>
                        </div>
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <h4 class="title">{{$t('app')}}</h4>
                            <h4>{{$t('weebo_title')}}</h4>
                            <p>{{$t('weebo_description')}}</p>
                            <p class="small">Tags: {{$t('weebo_tags')}}</p>

                            <h4>{{$t('doit_title')}}</h4>
                            <p>{{$t('doit_description')}}</p>
                            <p class="small">Tags: {{$t('doit_tags')}}</p>
                        </div>

                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 text-right">
                            <h4 class="title">{{$t('game')}}</h4>
                            <h4>{{$t('ais_title')}}</h4>
                            <p>{{$t('ais_description')}}</p>
                            <p class="small">Tags: {{$t('ais_tags')}}</p>

                            <h4>{{$t('citw_title')}}</h4>
                            <p>{{$t('citw_description')}}</p>
                            <p class="small">Tags: {{$t('citw_tags')}}</p>

                            <p><a href="https://www.youtube.com/watch?v=cHAKNQiiZkQ" target="_blank"><i
                                    class="fab fa-youtube"></i> Youtube</a></p>
                        </div>
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <md-card>
                                <carousel
                                        :per-page="1"
                                        loop
                                        :speed="600"
                                        :mouse-drag="false"
                                >
                                    <slide>
                                        <img :src="game01" alt="game01"/>
                                    </slide>
                                    <slide>
                                        <img :src="gdd02" alt="gdd02"/>
                                    </slide>
                                    <slide>
                                        <img :src="gdd01" alt="gdd01"/>
                                    </slide>
                                    <slide>
                                        <img :src="game03" alt="game03"/>
                                    </slide>
                                </carousel>
                            </md-card>
                        </div>
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <md-card>
                                <carousel
                                        :per-page="1"
                                        loop
                                        :speed="600"
                                        :mouse-drag="false"
                                >
                                    <slide>
                                        <img :src="logo00" alt="logo00"/>
                                    </slide>
                                    <slide>
                                        <img :src="logo01" alt="logo01"/>
                                    </slide>
                                    <slide>
                                        <img :src="logo02" alt="logo02"/>
                                    </slide>
                                </carousel>
                            </md-card>
                        </div>
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <h4 class="title">{{$t('logo')}}</h4>
                            <p>{{$t('logo_description')}}</p>
                            <p class="small">Tags: {{$t('logo_tags')}}</p>
                        </div>

                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 text-right">
                            <h4 class="title">{{$t('motion')}}</h4>
                            <p>{{$t('motion_description')}}</p>
                            <p class="small">Tags: {{$t('motion_tags')}}</p>

                            <p><a href="https://vimeo.com/user73613539" target="_blank"><i
                                    class="fab fa-vimeo-v"></i> Vimeo</a></p>
                        </div>
                        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100">
                            <md-card>
                                <carousel
                                        :per-page="1"
                                        loop
                                        :speed="600"
                                        :mouse-drag="false"
                                >
                                    <slide>
                                        <img :src="motion00" alt="motion00"/>
                                    </slide>
                                    <slide>
                                        <img :src="motion01" alt="motion01"/>
                                    </slide>
                                    <slide>
                                        <img :src="motion02" alt="motion02"/>
                                    </slide>
                                </carousel>
                            </md-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            game01: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/game01.png")
                /* eslint-enable global-require */
            },
            game02: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/game02.png")
                /* eslint-enable global-require */
            },
            game03: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/game03.png")
                /* eslint-enable global-require */
            },
            gdd01: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/gdd01.png")
                /* eslint-enable global-require */
            },
            gdd02: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/gdd02.png")
                /* eslint-enable global-require */
            },
            logo00: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/logo00.jpg")
                /* eslint-enable global-require */
            },
            logo01: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/logo01.jpg")
                /* eslint-enable global-require */
            },
            logo02: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/logo02.jpg")
                /* eslint-enable global-require */
            },
            motion00: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/motion00.gif")
                /* eslint-enable global-require */
            },
            motion01: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/motion01.gif")
                /* eslint-enable global-require */
            },
            motion02: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/motion02.gif")
                /* eslint-enable global-require */
            },
            app00: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/app00.jpg")
                /* eslint-enable global-require */
            },
        },
    };
</script>
