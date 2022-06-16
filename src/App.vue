<template>
  <div class="container">
    <Header title="Task Tracker" @button-click="toggleAddTask" :showAddTask="showAddTask" />
    <router-view :showAddTask="showAddTask"></router-view>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const showAddTask = ref(false);

const toggleAddTask = () => {
  showAddTask.value = !showAddTask.value;
};
</script>
