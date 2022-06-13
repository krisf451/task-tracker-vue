<template>
  <button class="btn" :style="{ background: color }" @click="handleClick()">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "Button",
  data() {
    return {
      name: "Kristian",
    };
  },
  props: {
    color: String,
    text: {
      type: String,
      default: "Click Me",
    },
  },
  methods: {
    handleClick: function () {
      alert(`Hello ${this.name}`);
    },
  },
};
</script>
