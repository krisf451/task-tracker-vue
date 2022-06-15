<template>
  <div class="container">
    <Header title="Task Tracker" />
    <CounterSetup />
    <AddTask @handle-submit="handleSubmit" />
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CounterSetup from "./components/CounterSetup.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    CounterSetup,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      console.log("task", id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
    handleSubmit(task) {
      this.tasks = [...this.tasks, task];
    },
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
