import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

Vue.use(Vuex)


export default ({

    state: {
        menu: [],
        order: {},
    },
    mutations: {
        displayMenu(state, menu) {
            state.menu = menu
        },
        orderStatus(state,order){
            state.order = order
        }

    },
    actions: {
        async getlistMenu(content) {

            setTimeout(() => {
                content.commit('displayMenu', listMenu.menu)
            }, 600)
        }


    },
    // modules

})