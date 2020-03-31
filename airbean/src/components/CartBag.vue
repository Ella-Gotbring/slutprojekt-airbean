<template>
  <div class="cart-bag">
      <div class="number">{{numberOfOrders}}</div>
 <button>
     <img src="./../assets/graphics/bag.svg" alt="bag">
 </button>
 <Cart v-if='show' />
  </div>
</template>

<script>
import Cart from './Cart'
export default {
 name: 'CartBag',
 components: {
     Cart
 },
 data(){
     return{
         show:false,
     }
 },
 computed:{
     cart(){
         return this.$store.state.cart
     },
     numberOfOrders(){
         let total = 0;
     }
 }

}
</script>

<style>

</style>