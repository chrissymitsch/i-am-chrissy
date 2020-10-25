<template>
    <div class="wrapper">
        <div id="knowledge" class="features text-center">
            <div class="info">
                <h3>{{$t('work')}}</h3>
            </div>
            <div class="features text-center">
                <div class="md-layout">
                    <div class="md-layout-item md-size-70 mx-auto md-small-size-100">
                        <md-card>
                            <carousel
                                    :per-page="1"
                                    loop
                                    :speed="600"
                                    autoplay
                                    :autoplay-timeout="3000"
                                    :mouse-drag="false"
                            >
                                <slide>
                                    <div class="carousel-caption">
                                        <p>
                                            Game Design & Development
                                        </p>
                                    </div>
                                    <img :src="carousel1" alt="carousel1"/>
                                </slide>
                                <slide>
                                    <div class="carousel-caption">
                                        <p>
                                            Logo Design
                                        </p>
                                    </div>
                                    <img :src="carousel2" alt="carousel2"/>
                                </slide>
                                <slide>
                                    <div class="carousel-caption">
                                        <p>
                                            Motion Graphics
                                        </p>
                                    </div>
                                    <img :src="carousel3" alt="carousel3"/>
                                </slide>
                                <slide>
                                    <div class="carousel-caption">
                                        <p>
                                            App Development
                                        </p>
                                    </div>
                                    <img :src="carousel3" alt="carousel4"/>
                                </slide>
                            </carousel>
                        </md-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                /* eslint-disable global-require */
                carousel1: require("@/assets/img/nature-2.jpg"),
                carousel2: require("@/assets/img/nature.jpg"),
                carousel3: require("@/assets/img/nature-3.jpg"),
                carousel4: require("@/assets/img/nature-3.jpg")
                /* eslint-enable global-require */
            };
        }
    };
</script>
