<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <Button color="black" />
  </header>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>
