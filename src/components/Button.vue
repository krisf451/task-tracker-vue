<template>
  <button
    class="btn"
    :class="`${color === 'black' ? 'text-white' : ''}`"
    :style="{ background: showAddTask ? color : 'red' }"
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
import { ref, defineProps } from 'vue';

const emit = defineEmits(['button-click']);
// const bools = ref(true);

const handleClick = () => {
  emit('button-click');
};

const props = defineProps({
  color: { type: String },
  text: { type: String, default: 'Click Me' },
  showAddTask: { type: Boolean },
});
</script>
