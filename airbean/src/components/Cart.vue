<template>
  <div class="cart">
      <h1>Din beställning</h1>
      <div class="item" v-for='item in cart' :key='item.id'>
        <CartItem :item='item' />
        </div>
        <div class="price">
      <h2>Total</h2>
      <p>..............................................</p>
      <h2>{{totalamount}} kr</h2>
      </div>
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
      totalamount(){
         let totalamount = 0;
         this.$store.state.cart.forEach(item => {
             totalamount +=item.quantity * item.price;
         })
         return totalamount;
     
      }
    },
    methods:{
      sendOrder(){
        this.$router.push('/status')
      }
    }

}
</script>

<style scoped>
.cart {
  
  background-color: white;
  position: fixed;
  top:85px;
  left: 35px;
  border-radius: 20px;
    }
h1 {
text-align: center;
margin-top:10px;
   }
.price {
  display: flex;
  align-items: flex-end;
  margin-top: 90px;
  }
button {
  width: 90%;
  height: 40px;
  text-align: center;
  background-color: black;
  color: white;
  margin: 2rem 1rem;
  font-size: 20px;
  border-radius: 50px;
  letter-spacing: 3px; 
  justify-content: center;
  align-items: center;          
   }
p {
  text-align: left;
  margin: 5px;
}
h2 {
  display:flex;
  justify-content:center;
  align-items:center;
  margin:5px;
  }
        
</style>