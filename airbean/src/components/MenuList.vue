<template>
  <div class="menulist">
    <router-link to="/menu">Meny</router-link>
    <router-link to="/about">Vårt Kaffe</router-link>
    <router-link to="/status">OrderStatus</router-link>

  </div>
</template>

<script>
import Navicon from "./../components/Navicon"
export default {
name: 'MenuList',
components : {
    Navicon
}
}
</script>

<style>

</style>