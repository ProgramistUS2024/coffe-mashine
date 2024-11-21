import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/CoffeeHome.vue";
import CoffeeRecipes from "../components/CoffeeRecipes.vue";
import CoffeeMachineSettings from "../components/CoffeeMachineSettings.vue";

const routes = [
  { path: "/", name: "CoffeHome", component: Home },
  { path: "/recipes", name: "CoffeeRecipes", component: CoffeeRecipes },
  { path: "/settings", name: "CoffeeMachineSettings", component: CoffeeMachineSettings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;