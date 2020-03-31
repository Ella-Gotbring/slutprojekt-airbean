<template>
  <div class="menuitem">
    <div class="add" @click="add">
      <button>
        <img src="add.svg" alt="add" />
      </button>
    </div>
    <h2 class="itemtitle">
      {{ item.title }}
      <span class="dotted-line"></span>
    </h2>
    <p class="itemdesc">{{ item.desc }}</p>
    <h2 class="itemprice">{{ item.price}}</h2>
  </div>
</template>

<script>
export default {
  name: "Menuitem",
  props: {
    item: Array
  },
  methods: {
    add() {
      this.$store.dispatch("additemTocart", this.item);
    }
  }
};
</script>

<style scoped>
.button {
  background-color: black;
}
</style>