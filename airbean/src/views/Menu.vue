<template>
  <div class="menu">
    <h1>Meny</h1>
    <Menuitem v-for="item in menu" :key="item.id" :item="item" />
  </div>
</template>

<script>
import Menuitem from "../components/Menuitem.vue";
export default {
  name: "Menu",
  components: {
    Menuitem
  },
  computed: {}
};
</script>

<style>
</style>