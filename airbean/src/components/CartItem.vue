<template>
  <div class="cart-item">
    <div class="item">
      <h2>
        {{item.title}}
        <span class="dots"></span>
      </h2>
      <!-- <h4>{{item.price}} </h4> -->
    </div>

    <p>.............................................................................................</p>
    <h5 class="total">{{totalamount}}</h5>
    <img src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click="increase" />
    <h3>{{item.quantity}}</h3>
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
      this.item.quantity--;
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-end;
  
}
.cart-item {
  display: flex;
  align-items: center;
  text-align: left;
}
img{
  height: 8px;
  cursor: pointer;
}

</style>