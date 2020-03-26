<template>
  <div class="menulist" @click="hidden" :class="{ close : nav }">
    <button>
      <img  src="@/assets/graphics/close.svg" alt="close" width="32px">
      </button>
    <router-link class="link" to="/menu">Meny</router-link>
    <hr />
    <router-link class="link" to="/about">Vårt Kaffe</router-link>
    <hr />
    <router-link class="link" to="/status">OrderStatus</router-link>

  </div>
</template>

<script>


export default {
name: 'MenuList',
props:{
  nav : Boolean
},
methods: {
  hidden() {
    this.$emit("closeNav");
  }
}
};

</script>

<style>
.menulist {
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size:40px;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: black;
   width: 520px;
   margin-left: 350px;
}
button{
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 40px;
  border: none;
  margin-left:45px;
  margin-top:30px;
}
.link{
text-decoration: none;
margin-top:50px;
color: white;
}
hr{
  color:rgb(207, 191, 191);
  width: 70px;

}
.close {
  display: none;
}


</style>