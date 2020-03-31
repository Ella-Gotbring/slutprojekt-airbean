<template>
  <div class="cart">
      <h1>Din beställning</h1>
      <div v-for='item in cart' :key='item.id'>
        <CartItem :item='item' />
        </div>
      <h2>Total</h2>
      <p>..........................................</p>
      <h2>{{counter}} kr</h2>
      <p>inkl moms + drönarleverans</p>
      <button @click="sendOrder">Take My Money</button>
  </div>
</template>

<script>
import CartItem from './../components/CartItem'
export default {
    name: 'Cart',
    components: {
      CartItem
    },
    computed: {
      cart(){
        return this.$store.state.cart;
      },
      counter(){
        return this.$store.state.counter;
      }
    },
    methods:{
      sendOrder(){
        this.$router.push('/status')
      }
    }

}
</script>

<style>

</style>