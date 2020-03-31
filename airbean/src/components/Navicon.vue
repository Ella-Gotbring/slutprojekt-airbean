<template>
  <div class="Navicon">
    <button @click="open">
  <img src="@/assets/graphics/navicon.svg" alt="icon" width="32px"> 
  </button>
  </div>
</template>

<script>
export default {
name: 'Navicon',
nav: Boolean,
methods:{
  open() {
    this.$emit("openNav");
  }
}
};

</script>

<style scoped>
button {
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 40px;
  border: none;
  margin-right:340px;
  margin-top:20px;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>