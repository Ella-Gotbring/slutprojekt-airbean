<template>
  <div class="home" @click="$router.push('/menu')">
    <img src="@/assets/graphics/airbean-landing.svg" alt="logo" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
<style scoped>
.home {
  height: 594px;
  width: 500px;
  background-image: url("./../assets/graphics/intro-graphic-left.svg"),
    url("./../assets/graphics/intro-graphic-right.svg");
  background-color: rgb(75, 158, 133);
  background-repeat: no-repeat;
  background-position: top left, top right;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 350px;
}
</style>
