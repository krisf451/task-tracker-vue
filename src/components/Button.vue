<template>
  <button
    class="btn animate-slidedown"
    :style="showAddTask ? { background: 'red' } : { background: 'green' }"
    @click="handleClick"
    type="button"
  >
    {{ text }}
  </button>
  <!-- an example on how to setup conditional tailwind classes -->
  <!-- There is a bug with the way vue works with tailwind, look into the proper way how to implement the below code-->
  <!-- <button type="button" :class="[`${bools ? `bg-${color}-500` : ''}`]">{{ text }}</button> -->
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['button-click']);
// const bools = ref(true);

const handleClick = () => {
  emit('button-click');
};

const props = defineProps({
  text: { type: String, default: 'Click Me' },
  showAddTask: { type: Boolean },
});
</script>
