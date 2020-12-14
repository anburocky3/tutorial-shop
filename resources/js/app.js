require('./bootstrap');

import Vue from "vue";

import Vuex from "vuex"

Vue.use(Vuex)

import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: require('./routes')
})

const store = new Vuex.Store({
    state: {
        categories: []
    },
    mutations: {},
    actions: {
        getCategories({dispatch, commit}){
            // Fetch the categories and attached products from the api
        }
    }
})


const app = new Vue({
    router,
    store,
    el: '#app',
    created(){
        store.dispatch('getCategories')
    }
})
