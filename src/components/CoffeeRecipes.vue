<template>
  <div>
    <h2>Рецепты</h2>
    <ul>
      <li>Эспрессо</li>
      <li>Капучино</li>
      <li>Латте</li>
    </ul>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./Footer.vue";

export default {
  name: "CoffeeRecipes",
  components: {
    FooterComponent,
  },
};
</script>