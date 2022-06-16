<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'border-l-8 border-green-500' : '', 'task']"
    class="animate-slideleft"
  >
    <h3 class="flex justify-between items-center">
      {{ task.text }}
      <i
        @click="$emit('delete-task', task.id)"
        class="fa fa-times text-red-500 transition-transform duration-300 ease-in-out hover:scale-125"
      ></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script setup>
defineProps({
  task: Object,
});
</script>
