<template>
  <h1 class="text-green-500">{{ name }}'s Counter</h1>
  <p class="text-3xl">{{ count }}</p>

  <button type="button" @click="addOne()" class="btn">Add One</button>
  <button type="button" @click="double()" class="btn">Double</button>
  <button type="button" @click="clearCount()" class="btn">Clear</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
      name: "Kristian",
    };
  },
  methods: {
    addOne: function () {
      this.count++;
    },
    double: function () {
      this.count *= 2;
    },
    clearCount: function () {
      this.count = 0;
    },
  },
};
</script>

<style></style>
