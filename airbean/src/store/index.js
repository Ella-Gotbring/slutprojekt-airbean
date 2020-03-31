import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

Vue.use(Vuex)


export default new Vuex.Store({

    state: {
        menu: [],
        order: {},
        cart: [],
        counter: 0
    },
    mutations: {
        displayMenu(state, menu) {
            state.menu = menu
        },
        orderStatus(state, order) {
            state.order = order
        },
        add(state, item) {
            state.cart.push(item);
        }

    },
    actions: {
        async getlistMenu(content) {

            setTimeout(() => {
                content.commit('displayMenu', listMenu.menu)
            }, 600)
        },
        // additemTocart(context, item) {
        //     context.commit("add", item)
        // }



    },
    // modules

})