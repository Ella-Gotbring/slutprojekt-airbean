<template>
  <div class="order">
    <h1 v-if="loading">Brewing</h1>
    <div class="loading" v-if="loading">
      <img src="../assets/graphics/loader.png" alt="loading icon" />
    </div>

    <h1 class="orderNumber" v-if="order.orderNr">
      Ordernumber:
      <strong>#{{order.orderNr}}</strong>
    </h1>
    <div class="drone" v-if="order.orderNr">
      <img src="../assets/graphics/drone.svg" alt="drone svg" />
      <h1>Din beställning är påväg!</h1>
    </div>

    <div class="eta" v-if="order.orderNr">
      <p>{{order.eta}} minuter</p>
    </div>

    <a href="#" class="button" @click="$router.push('/menu')">OK, Cool!</a>
  </div>
</template>

<script>
export default {
  name: "Status",
  computed: {
    order() {
      return this.$store.state.activeOrder;
    },
    loading() {
      return this.$store.state.load;
    }
  }
};
</script>

<style lang="scss">
.order {
  text-align: center;
  padding: 1.5rem;
  color: white;
  background: orange;

  .drone {
    img {
      width: 300px;
      animation: hover 4s linear infinite;
      padding-top: 25px;
    }
    @keyframes hover {
      0% {
        transform: translateY(0) rotateZ(0deg);
      }
      25% {
        transform: translateY(0.25rem) rotateZ(1deg);
      }
      50% {
        transform: translateY(0.5rem) rotateZ(0deg);
      }
      75% {
        transform: translateY(0.25rem) rotateZ(-1deg);
      }
      100% {
        transform: translateY(0) rotateZ(0deg);
      }
    }
    h1 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 30px;
      color: white;
    }
  }
  .eta {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .button {
    font-family: Georgia, "Times New Roman", Times, serif;
    display: flex;
    max-width: 14rem;
    width: 100%;
    font-size: 1rem;
    text-decoration: underline;
    height: 4rem;
    margin: auto;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 99rem;
  }
}
.loading {
  padding-top: 250px;
  animation: none;

  img {
    width: 100px;
    padding-top: 25px;
  }
}
.orderNumber {
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  padding-top: 22px;
}
</style>