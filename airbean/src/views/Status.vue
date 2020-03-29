<template>
  <div class="status">
      <p v-if="order.orderNr">Ditt Ordernummer är {{order.orderNr}}</p>
      <img v-if="order.orderNr" src="@/assets/graphics/drone.svg" alt="drone">
      <h1 v-if="order.orderNr">Din beställning är på väg! </h1>
      <p v-if="order.orderNr"> {{order.eta}} minuter</p>
      <a href="#" @click="$router.push('/menu')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
name: "Status",
computed: {
  order(){
    return this.$store.state.order
  }
}
}
</script>

<style>

</style>