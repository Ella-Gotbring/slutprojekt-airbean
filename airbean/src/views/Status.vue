<template>
  <div class="status">
    <img v-if="loading" src="../assets/graphics/loader.png" alt="loading icon" />

    <h1 v-if="loading">Brewing</h1>

    <h1 class="orderNumber" v-if="order.orderNr">
      Ordernumber:
      <strong>#{{order.orderNr}}</strong>
    </h1>
    <div class="drone" v-if="order.orderNr">
      <img src="../assets/graphics/drone.svg" alt="drone svg" />
      <h1>Din beställning är påväg!</h1>
    </div>

    <div class="eta" v-if="order.orderNr">
      <p>{{order.eta}} minuter</p>
    </div>

    <a href="#" class="button" @click="$router.push('/menu')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
  name: "Status",
  computed: {
    order() {
      return this.$store.state.activeOrder;
    },
    loading() {
      return this.$store.state.load;
    }
  }
};
</script>

<style>
</style>