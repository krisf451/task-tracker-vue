<template>
  <h1 class="text-green-500">{{ name }}'s Counter</h1>
  <p class="text-3xl">{{ count }}</p>

  <div class="flex gap-2 mb-2">
    <button type="button" @click="addOne" class="btn bg-black text-white">+</button>
    <button type="button" @click="minusOne" class="btn bg-black text-white">-</button>
  </div>
  <div class="flex gap-2">
    <button type="button" @click="double" class="btn bg-black text-white">Double</button>
    <button type="button" @click="clearCount" class="btn bg-black text-white">Clear</button>
  </div>
  <div class="mt-4">
    <label for="name" class="mr-2">Name:</label>
    <input type="text" class="border pl-2 focus:outline-none h-8 rounded-md" ref="input" />
    <button type="button" class="btn ml-2 bg-black text-white" @click="changeName">
      Change Name
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const count = ref(0);
const input = ref('');
const name = ref('Kristian');

//kind of like componentDidMount or UseEffect with an empty dependency array
onMounted(() => {
  console.log('Mounting');
});

//kind of like componentDidUpdate or UseEffect tracking certain state changes
onUpdated(() => {
  console.log('Updating');
});

const addOne = () => {
  count.value++;
};
const minusOne = () => {
  count.value--;
};
const double = () => {
  count.value *= 2;
};
const clearCount = () => {
  count.value = 0;
};
const changeName = () => {
  name.value = input.value.value;
  input.value.value = '';
};
</script>
