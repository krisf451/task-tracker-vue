<template>
  <div
    :class="[
      task.reminder
        ? 'border-l-8 border-green-500'
        : 'border-l-8 border-gray-500',
      'task',
    ]"
  >
    <h3 class="flex justify-between items-center">
      {{ task.text }} <i class="fa fa-times text-red-500"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
