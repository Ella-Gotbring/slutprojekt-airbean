<template>
  <div class="menu">
    <!-- <img src="../assets/graphics/graphics-header.svg" alt="header" class="head" /> -->
    <header>
      <Navicon v-bind:nav="visible" v-on:openNav="navOpen" />
      <CartBag @click.native="show" />
    </header>
    <main>
      <MenuList v-bind:nav="visible" v-on:closeNav="navClose" />
      <Cart v-if="cartStatus" />
    </main>

    <h1>Meny</h1>
    <!-- <Menuitem /> -->

    <Menuitem v-for="item in items" :key="item.id" :item="item" />
    <!-- <img src="../assets/graphics/graphics-footer.svg" alt="footer" class="foot" /> -->

    <!-- <Menuitem v-for="item in items" :key="item.id" :item="item" /> -->


    <!-- <li v-for="item in items" :key="item.id" :item="item" /> -->
    <!-- <li v-for="item in menu" :key="item.id" :item="item">{{menu}}</li> -->

    <!-- this line of code writes out the whole menu string -->
    <!-- <li v-for="item in items" :key="item.id">{{items}}</li> -->
  </div>
</template>

<script>
import menu from "../assets/data/menu.json";
import Menuitem from "../components/Menuitem";
import Navicon from "../components/Navicon";
import MenuList from "../components/MenuList";
import CartBag from "../components/CartBag";
import Cart from "../components/Cart";

export default {
  name: "Menu",
  data() {
    return {
      items: menu,
      visible: true,
      cartStatus: false
    };
  },
  components: {
    Menuitem,
    Navicon,
    MenuList,
    CartBag,
    Cart
  },
  computed: {
    menu(){
      return this.$store.state.menu;
    },
  },
  methods: {
    navOpen() {
      this.visible = false;
      this.cartStatus = false;
    },
    navClose() {
      this.visible = true;
    },

    show() {
      this.cartStatus = !this.cartStatus;
    }
  }
};
</script>

<style scoped>
/* .cart {
  border: 2px solid black;
  margin-right: 25px;
  padding: 5px 20px;
} */
.menu {
  height: 130vh;
  width: 100%;
  padding: 1rem 1rem;
  box-sizing: border-box;
  background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
  background-repeat: no-repeat,no-repeat;
  background-position: top center , bottom center;
  background-size: 100%, 100%;
  
}
h1{
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
