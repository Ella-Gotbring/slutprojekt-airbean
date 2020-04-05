import Vue from 'vue'
import Vuex from 'vuex'
import listMenu from '../assets/data/menu.json'

Vue.use(Vuex)


export default new Vuex.Store({

    state: {
        menu: [],
        order: {},
        cart: [],
        // counter: 0
    },
    mutations: {
        displayMenu(state, menu) {
            state.menu = menu
        },
        orderStatus(state, order) {
            state.order = order
        },
        add(state, item) {
            //  state.cart.find(item => item.id == id).quantity++;
            state.cart.push({
                id: item.id,
                price: item.price,
                title: item.title,
                quantity: 1
            })

        },
  
        updateItem(state,id){
            state.cart.find(item => item.id == id).quantity++;
        },
        removeItem(state,id){
            state.cart.find(item => item.id == id);

        },
        emptyCart(state) {
            state.cart = [];
        }

        

    },
    actions: {
        async getlistMenu(context) {

            setTimeout(() => {
                context.commit('displayMenu', listMenu.menu)
            }, 600)
        },
        addToCart(context, item) {
            // context.commit("add", item)
            let checkItem = context.state.cart.filter(check => check.id === item.id)

            if (checkItem.length > 0) {
              context.commit('updateItem', checkItem[0].id)
            } else {
              context.commit('add', item)
            }
        }



    },


})