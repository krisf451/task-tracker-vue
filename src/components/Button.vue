<template>
  <button class="btn" :style="{ background: color }" @click="handleClick">
    {{ text }}
  </button>
</template>

<script setup>
import { ref, defineProps } from "vue";

const name = ref("Kristian");

const handleClick = () => {
  alert(`Hello ${name.value}`);
};

const props = defineProps({
  color: { type: String },
  text: { type: String, default: "Click Me" },
});

console.log(props);
</script>
