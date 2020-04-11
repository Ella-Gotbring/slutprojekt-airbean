<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  computed: {
    // beforemount() {
    //   this.$store.dispatch("getlistMenu");
    // }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
 text-align: center;
 box-sizing: border-box;
 max-width: 480px;
 margin: 0;
background-color: rgb(228, 207, 214);
}
</style>
