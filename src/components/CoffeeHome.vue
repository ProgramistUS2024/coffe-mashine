<template>
  <div>
    <h2>Добро пожаловать в Кава-машину</h2>
    <p>Всё, что нужно для идеального кофе дома!</p>
    <img src="https://st4.depositphotos.com/14743238/24280/i/450/depositphotos_242809568-stock-photo-a-cup-of-hot-coffee.jpg" alt="Coffee Machine" />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./Footer.vue";

export default {
  name: "CoffeeHome",
  components: {
    FooterComponent,
  },
};
</script>