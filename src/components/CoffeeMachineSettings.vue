<template>
  <div>
    <h2>Настройки Кава-машини</h2>
    <form>
      <label>
        Температура води:
        <input type="number" v-model="temperature" />
      </label>
      <label>
        Кількість молока:
        <input type="range" v-model="milk" />
      </label>
      <button type="button" @click="saveSettings">Зберегти</button>
    </form>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./Footer.vue";

export default {
  name: "CoffeeMachineSettings",
  components: {
    FooterComponent,
  },
  data() {
    return {
      temperature: 90,
      milk: 50,
    };
  },
  methods: {
    saveSettings() {
      alert(`Температура: ${this.temperature}°C, Молоко: ${this.milk}%`);
    },
  },
};
</script>