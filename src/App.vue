<template>
  <div class="container">
    <Header title="Task Tracker" />
    <Counter />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Counter from "./components/Counter.vue";

export default {
  name: "App",
  components: {
    Header,
    Counter,
  },
};
</script>

<style></style>
