import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import {isNil} from 'lodash'
import store from '@/store'
import MainNavbar from "@/layout/MainNavbar";
import MainFooter from "@/layout/MainFooter";

Vue.use(Router);

Vue.use(Head, {
    complement: process.env.VUE_APP_TITLE
});

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            components: {default: Home, header: MainNavbar, footer: MainFooter},
            props: {
                header: {colorOnScroll: 350, menu: 'home'},
                footer: {backgroundColor: 'black'}
            },
            meta: {
                authNotRequired: true
            }
        },
        {
            path: '/check-login',
            name: 'check-login',
            component: CheckLogin,
            meta: {
                authNotRequired: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
            meta: {
                authNotRequired: true
            }
        },
        {path: '*', redirect: '/home'}
    ]
});

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
    if (
        !(to.meta && to.meta.authNotRequired) &&
        isNil(store.state.authentication.user)
    ) {
        const path =
            store.state.authentication.user === null ? '/login' : '/check-login';
        return next(`${path}?redirectUrl=${to.path}`)
    }
    next()
});

export default router
