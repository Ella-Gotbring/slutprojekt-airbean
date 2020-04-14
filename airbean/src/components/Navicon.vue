<template>
  <div class="Navicon">
    <button @click="open">
  <img src="@/assets/graphics/navicon.svg" alt="icon" width="20px"> 
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
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 40px;
  border: none;
  margin-left:30px;
  margin-top:50px;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>