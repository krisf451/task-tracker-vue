<template>
  <header class="header">
    <h1 class="animate-slidedown">{{ title }}</h1>
    <Button
      v-show="homePage"
      @button-click="$emit('button-click')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :showAddTask="showAddTask"
    />
  </header>
</template>

<script setup>
import Button from './Button.vue';
defineProps({
  title: { type: String },
  showAddTask: { type: Boolean },
});
</script>

<script>
export default {
  name: 'Header',
  computed: {
    homePage() {
      return this.$route.path === '/';
    },
  },
};
</script>
