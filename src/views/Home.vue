<template>
  <div v-if="showAddTask">
    <AddTask @add-task="addTask" />
  </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

const props = defineProps({
  showAddTask: { type: Boolean },
});
const tasks = ref(null);

const fetchTasks = async () => {
  const res = await fetch('api/tasks');
  const data = await res.json();
  return data;
};

const fetchTaskById = async (id) => {
  const res = await fetch(`api/tasks/${id}`);
  const data = await res.json();
  return data;
};

const addTask = async (task) => {
  const res = await fetch('api/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await res.json();
  tasks.value = [...tasks.value, data];
};

const deleteTask = async (id) => {
  if (confirm('Are you sure?')) {
    const res = await fetch(`api/tasks/${id}`, {
      method: 'DELETE',
    });
    res.status === 200
      ? (tasks.value = tasks.value.filter((task) => task.id !== id))
      : alert('Error deleting task');
  }
};

const toggleReminder = async (id) => {
  const taskToToggle = await fetchTaskById(id);
  const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  const res = await fetch(`api/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updatedTask),
  });

  const data = await res.json();

  tasks.value = tasks.value.map((task) =>
    task.id === id ? { ...task, reminder: data.reminder } : task,
  );
};

onMounted(() => {
  fetchTasks().then((res) => (tasks.value = res));
});
</script>
