<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <Button color="black" text="Add Task" />
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
