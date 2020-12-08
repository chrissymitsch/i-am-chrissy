<template>
    <footer class="footer"
            :class="{ [`footer-${type}`]: type }"
            :data-background-color="backgroundColor">
        <div class="page-footer" :style="headerStyle">
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <router-link to="/impressum">
                                Impressum
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="copyright">
                    &copy; {{ year }}, made with
                    <md-icon>favorite</md-icon>
                    and Vue.js
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    export default {
        props: {
            backgroundColor: String,
            type: String,
            header: {
                type: String,
                /* eslint-disable global-require */
                default: require("@/assets/img/rinde2.jpg")
                /* eslint-enable global-require */
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            },
        },
        data: () => ({
            year: new Date().getFullYear()
        })
    };
</script>
<style></style>
