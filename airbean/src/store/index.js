import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

Vue.use(Vuex)


export default ({

    state: {
        menu: [],

    },
    mutations: {
        displayMenu(state, menu) {
            state.menu = menu
        }

    },
    actions: {
        async getlistMenu(content) {

            setTimeout(() => {
                content.commit('displayMenu', listMenu.menu)
            }, 600)
        }


    },
    modules

})