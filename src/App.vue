<template>
    <div id="hello-i-am">
        <div :class="{ 'nav-open': NavbarStore.showNavbar }">
            <router-view name="header"/>
            <div>
                <router-view/>
            </div>
            <router-view name="footer"/>
        </div>

        <new-content-available-toastr
                v-if="newContentAvailable"
                class="new-content-available-toastr"
                :refreshing-app="refreshingApp"
                @refresh="serviceWorkerSkipWaiting"
        ></new-content-available-toastr>
        <apple-add-to-home-screen-modal
                v-if="showAddToHomeScreenModalForApple"
                class="apple-add-to-home-screen-modal"
                @close="closeAddToHomeScreenModalForApple(false)"
        >
        </apple-add-to-home-screen-modal>
    </div>
</template>
<script>
  import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
  import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
        components: {NewContentAvailableToastr, AppleAddToHomeScreenModal},
        computed: {
            ...mapGetters('app', ['newContentAvailable']),
            ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
        },
        methods: mapActions('app', [
            'closeAddToHomeScreenModalForApple',
            'serviceWorkerSkipWaiting'
        ])
    }
</script>
