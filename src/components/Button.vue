<template>
  <button type="button" class="btn" :style="[`background-color:${color}`]">
    Add Task
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
  },
};
</script>

<style></style>
