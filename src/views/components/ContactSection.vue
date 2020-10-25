<template>
    <div class="wrapper">
        <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                <h3 class="text-center title">{{$t('contact')}}</h3>
                <h5 class="text-center description">
                    {{$t('contact_1')}}
                    <a href="https://www.xing.com/profile/Christine_Mitsch2" target="blank">Xing</a>
                    {{$t('contact_2')}}
                    <a href="https://www.linkedin.com/in/christinemitsch/" target="blank">LinkedIn</a>
                    {{$t('contact_3')}}
                </h5>
                <form class="contact-form">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>Your Name</label>
                                <md-input v-model="name" type="text"></md-input>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-size-50">
                            <md-field>
                                <label>Your Email</label>
                                <md-input v-model="email" type="email"></md-input>
                            </md-field>
                        </div>
                    </div>
                    <md-field maxlength="5">
                        <label>Your Message</label>
                        <md-textarea v-model="message"></md-textarea>
                    </md-field>
                    <div class="md-layout">
                        <div class="md-layout-item md-size-33 mx-auto text-center">
                            <md-button class="md-success">Send Message</md-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            name: null,
            email: null,
            message: null,
        })
    }
</script>