<template>
    <div class="wrapper">
        <div class="md-layout">
            <div class="md-layout-item md-size-70 mx-auto">
                <div class="avatar">
                    <img :src="img"
                         alt="Circle Image"
                         class="img-raised rounded-circle img-fluid"
                    />
                </div>
                <div class="profile">
                    <div class="name">
                        <h2 class="title">Christine Mitsch</h2>
                        <md-button
                                href="javascript:void(0)"
                                class="md-simple md-dribbble"
                        ><i class="fas fa-map-marker-alt"></i
                        >{{$t('city')}}
                        </md-button>
                        <md-button
                                href="javascript:void(0)"
                                class="md-simple md-dribbble"
                        ><i class="fas fa-user"></i
                        >Senior Developer
                        </md-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="description text-center">
            <p>{{$t('bioTxt')}}</p>
        </div>
        <div class="description">
            <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100">
                    <div class="md-layout md-gutter md-alignment-center">
                        <div class="md-layout-item md-size-30"><p><strong>{{$t('experience')}}:</strong></p></div>
                        <div class="md-layout-item md-size-70"><p>{{calculateExperience}} {{$t('years')}}</p></div>
                        <div class="md-layout-item md-size-30"><p><strong>{{$t('degree')}}:</strong></p></div>
                        <div class="md-layout-item md-size-70"><p>{{$t('education1')}}</p></div>
                        <div class="md-layout-item md-size-30"><p><strong>{{$t('birthday_label')}}:</strong></p></div>
                        <div class="md-layout-item md-size-70"><p>{{$t('birthday')}} ({{calculateAge}}
                            {{$t('years')}})</p></div>
                        <div class="md-layout-item md-size-30"><p><strong>{{$t('location_label')}}:</strong></p></div>
                        <div class="md-layout-item md-size-70"><p>{{$t('location')}}</p></div>
                    </div>
                </div>
                <div class="md-layout-item md-size-50 md-small-size-100">
                    <div class="md-layout md-gutter md-alignment-top-left">
                        <div class="md-layout-item md-size-100">
                            <vue-word-cloud
                                    style="height: 200px; width: 250px;"
                                    :words="[
                                        ['agile', 20],
                                        ['diversive', 5],
                                        ['creative', 5],
                                        ['adaptable', 5],
                                        ['Angular', 10],
                                        ['Java', 10],
                                        ['Gamification', 8],
                                        ['Webdesign', 6],
                                        ]"
                                    :color="([, weight]) => weight > 19 ? '#00bcd4' : weight > 9 ? '#9c27b0' : weight > 7 ? '#4caf50' : weight > 5 ? '#ff9800' : '#e91e63'"
                                    font-family="Roboto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import VueWordCloud from 'vuewordcloud';

    export default {
        name: "profile",
        components: {VueWordCloud},
        props: {
            img: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/faces/chrissy2.jpg")
                /* eslint-enable global-require */
            }
        },
        data: () => ({}),
        computed: {
            calculateExperience: () => {
                const currentDate = new Date();
                const expDate = new Date("2013/03/15");
                const difference = currentDate - expDate;
                return Math.floor(difference / 31557600000);
            },
            calculateAge: () => {
                const currentDate = new Date();
                const birthDate = new Date("1988/10/02");
                const difference = currentDate - birthDate;
                return Math.floor(difference / 31557600000);
            }
        }
    };
</script>
