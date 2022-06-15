<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <Button
      @button-click="$emit('button-click')"
      color="blue"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :showAddTask="showAddTask"
    />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
};
</script>
