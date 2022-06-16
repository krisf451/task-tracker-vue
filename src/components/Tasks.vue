<template>
  <h1>Tasks</h1>
  <div class="flex flex-wrap" v-for="task in tasks" :key="task.id">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import Task from './Task.vue';

defineProps({
  tasks: Array,
});

const emit = defineEmits(['toggle-reminder', 'delete-task']);
</script>
