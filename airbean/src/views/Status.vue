<template>
  <div class="status">
      <p>Ditt Ordernummer är #12DV231F43SH4</p>
      <img src="@/assets/graphics/drone.svg" alt="drone">
      <h1>Din beställning är på väg! </h1>
      <p>13 minuter</p>
      <a href="#" @click="router.push('/menu')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
name: "Status",
}
</script>

<style>

</style>