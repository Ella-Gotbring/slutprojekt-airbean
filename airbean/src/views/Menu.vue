<template>
  <div class="menu">
    <h1>Meny</h1>
    <button v-on:click=" cart +=1">add to cart</button>
    <div class="cart">
      <p>Cart{{cart}}</p>
    </div>
    <ul>
      <!-- <li v-for="item in menu" :key="item.id" :item="item">{{menu}}</li> -->
      <li v-for="item in items" :key="item.id">{{items.menu}}</li>
    </ul>
  </div>
</template>

<script>
import menu from "../assets/data/menu.json";
// import Menuitem from "../components/Menuitem";

export default {
  name: "Menu",
  data() {
    return {
      items: menu
    };
  },
  components: {
    // Menuitem
  },
  computed: {}
};
</script>

<style>
.cart {
  border: 2px solid black;
  margin-right: 25px;
  padding: 5px 20px;
}
</style>