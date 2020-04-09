<template>
  <div class="status">
    <div class="load" v-if="load">
      <img src="../assets/graphics/loader.png" alt="loading icon" />
    </div>
    <h1 v-if="load">Brewing</h1>
    <!-- <p v-if="order.orderNr">Ditt Ordernummer är {{order.orderNr}}</p>
    <img v-if="order.orderNr" src="@/assets/graphics/drone.svg" alt="drone" />
    <h1 v-if="order.orderNr">Din beställning är på väg!</h1>
    <p v-if="order.orderNr">{{order.eta}} minuter</p>-->
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
    load() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style>
</style>