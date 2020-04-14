<template>
  <div class="cart-item">
    <div class="item">
      <h2>
        {{item.title}}
        <span class="dots"></span>
      </h2>
      <!-- <h4>{{item.price}} </h4> -->
    </div>

    <p>.................................</p>
    <h4 class="total">{{totalamount}}</h4>
    <img src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click="increase" />
    <h5>{{item.quantity}}</h5>
    <img src="./../assets/graphics/arrow-down.svg" alt="arrowdown" @click="decrease" />
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    totalamount() {
      return this.item.price * this.item.quantity;
    }
  },
  methods: {
    increase() {
      // this.store.state.counter++;
      this.item.quantity++;
    },
    decrease() {
      // this.store.state.counter--;
      if(this.item.quantity>1){
      this.item.quantity--;
    }else{
      this.$store.commit('removeItem', this.item.id)
    }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-end;
  padding: 10px;
  font-size: 13px;
  
}
.cart-item {
  display: flex;
  align-items: center;
  text-align: left;
}
img{
  height: 6px;
  cursor: pointer;
  margin:1px;
  padding:1px;
}
h4{
  font-size: 15px;
}

</style>