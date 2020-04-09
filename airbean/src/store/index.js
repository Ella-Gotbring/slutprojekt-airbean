import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

import axios from 'axios'
const API = 'http://localhost:5000/api/beans'
Vue.use(Vuex)


export default new Vuex.Store({

    state: {
        menu: [],
        activeOrder: {},
        order: {},
        cart: [],
        loading: true,
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
            state.cart.push({
                id: item.id,
                price: item.price,
                title: item.title,
                quantity: 1
            })

        },

        updateItem(state, id) {
            state.cart.find(item => item.id == id).quantity++;
        },
        removeItem(state, id) {
            state.cart.find(item => item.id == id).quantity--;

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
        async makeOrder(context) {
            console.log('brewing')
            let order = {
                items: context.state.cart
            }
            try {
                context.state.load = true
                let resp = await axios.post(`${API}/order/`, order)
                console.log(resp)
                context.state.load = false
                context.commit('orderStatus', resp.data)
            } catch (err) {
                console.log(err)
                console.log('something went wrong')
            }
        }



    },
    // modules

})