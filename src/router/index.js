import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import MainNavbar from "@/layout/MainNavbar";
import MainFooter from "@/layout/MainFooter";
import Impressum from "@/views/Impressum";

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
        },
        {
            path: '/impressum',
            name: 'impressum',
            components: {default: Impressum, footer: MainFooter},
            props: {
                footer: {backgroundColor: 'black'}
            },
        },
        {path: '*', redirect: '/home'}
    ]
});

export default router
