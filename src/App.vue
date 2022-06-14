<template>
  <div class="container">
    <Header title="Task Tracker" />
    <CounterSetup />
    <Tasks :tasks="tasks" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CounterSetup from "./components/CounterSetup.vue";
import Tasks from "./components/Tasks.vue";

export default {
  name: "App",
  components: {
    Header,
    CounterSetup,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: false,
      },
      {
        id: 2,
        text: "Learn Vue Composition API",
        day: "June 13 at 2:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Eat a healthy Dinner",
        day: "June 13th at 6:30pm",
        reminder: true,
      },
    ];
  },
};
</script>

<style></style>
