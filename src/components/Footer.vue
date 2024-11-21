<template>
  <footer class="footer">
    <p>© 2024 Кава-машина. Всі права захищені.</p>
    <p>
      Контакти:
      <a href="mailto:contact@coffee-machine.com">contact@coffee-machine.com</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style>
.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
.footer a {
  color: #f8c291;
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline;
}
</style>