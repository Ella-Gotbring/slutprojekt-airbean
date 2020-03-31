<template>
  <div class="menuitem">
    <div class="add" @click="add">
      <button>
        <img src="../assets/graphics/add.svg" alt="add" />
      </button>
    </div>
    <h2 class="itemtitle">
      {{ item.title }}
      <span class="dotted-line"></span>
    </h2>
    <p class="itemdesc">{{ item.desc }}</p>
    <h2 class="itemprice">{{ item.price}} kr</h2>
  </div>
</template>

<script>
export default {
  name: "Menuitem",
  props: {
    item: Object
  },
  methods: {
    add() {
      this.$store.dispatch("additemTocart", this.item);
    }
  }
};
</script>

<style lang ="scss">
.menuitem {
  display: grid;
  grid-template-rows: 1.5 rem 1.5 rem;
  grid-template-columns: 3rem 1fr 4rem;
  margin: 2rem 0 2rem 0;

  .add {
    display: flex;
    grid-column: 1/2;
    grid-row: 1/2;

    button {
      background: black;
      border-radius: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      height: 3rem;
      width: 3rem;
    }
    img {
      width: 25px;
    }
  }

  .itemtitle {
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    margin: 0;
    padding: 0;

    .dotted-line {
      display: flex;
      flex: 1;
      border-bottom: 2px dotted darkgray;
    }
  }
  .itemdesc {
    display: flex;
    font-size: 20px;
    grid-row: 2/3;
    grid-column: 2/3;
    padding: 0;
    margin: 0;
  }
  .itemprice {
    display: flex;
    font-size: 25px;
    grid-row: 1/2;
    grid-column: 3/4;
    padding: 0;
    margin: 0;
    font-weight: bold;
  }
}
</style>