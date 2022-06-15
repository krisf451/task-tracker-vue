<template>
  <div class="container">
    <Header title="Task Tracker" @button-click="toggleAddTask" :showAddTask="showAddTask" />
    <CounterSetup />

    <div v-if="showAddTask">
      <AddTask @handle-submit="handleSubmit" />
    </div>

    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CounterSetup from './components/CounterSetup.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    CounterSetup,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    deleteTask(id) {
      console.log('task', id);
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      );
    },
    handleSubmit(task) {
      this.tasks = [...this.tasks, task];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: false,
      },
      {
        id: 2,
        text: 'Learn Vue Composition API',
        day: 'June 13 at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Eat a healthy Dinner',
        day: 'June 13th at 6:30pm',
        reminder: true,
      },
    ];
  },
};
</script>

<style></style>
