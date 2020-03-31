<template>
  <div class="cart-bag">
      <div class="number">{{numberOfOrders}}</div>
 <button>
     <img src="./../assets/graphics/bag.svg" alt="bag">
 </button>
 <!-- <Cart v-if='cartStatus' /> -->
  </div>
</template>

<script>
// import Cart from './Cart'
export default {
 name: 'CartBag',
 components: {
    //  Cart
 },
 computed:{
     cart(){
         return this.$store.state.cart
     },
     numberOfOrders(){
         let total = 0;
         this.$store.state.cart.forEach(item => {
             total +=item.quantity;
         });
         return total;
     }
 },


}
</script>

<style scoped>
button {
  height: 70px;
  width: 70px;
  background-color: black;
  border-radius: 40px;
  border: none;
  margin-top:-70px;
  margin-left:350px;
  display: flex;
  justify-content: center;
  align-items: center;

}
.number{
    background-color: orange;
    width: 40px;
    height: 30px;
    color: white;
    border-radius: 50px;
    padding-top:10px;
    margin-left:410px;
    position: absolute;
}
</style>