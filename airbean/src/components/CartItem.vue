<template>
  <div class="cart-item">
      <div class="item">
   <h2>{{item.title}}</h2>
   <h4>{{item-price}} kr</h4>
      </div>
     <p>...........................................</p>
   <img src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click='increase'>
   <h3>{{counter}}</h3>
   <img src="./../assets/graphics/arrow-down.svg" alt="arrowdown" @click='decrease'>
   </div>
</template>

<script>
export default {
name: 'CartItem',
computed: {
    counter(){
        return this.$store.state.counter;
    }
,
methods: {
    increase(){
        this.store.state.counter ++;
    },
    decrease(){
        this.store.state.counter --;
    }
}
}
}
</script>

<style>

</style>