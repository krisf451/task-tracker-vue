<template>
  <header class="header">
    <h1 class="animate-slidedown">{{ title }}</h1>
    <Button
      @button-click="$emit('button-click')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :showAddTask="showAddTask"
    />
  </header>
</template>

<script setup>
import { computed } from 'vue';
import Button from './Button.vue';

defineProps({
  title: { type: String },
  showAddTask: { type: Boolean },
});

const test = computed(() => {
  console.log(this.$router.path);
});
</script>
