<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <Button @toggle-add-task="$emit('toggle-add-task')" color="blue" text="Toggle Add Task" />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: String,
  },
  components: {
    Button,
  },
};
</script>
