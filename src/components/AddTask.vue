<template>
  <div>
    <form
      @submit="handleSubmit"
      class="flex flex-col justify-center items-start"
    >
      <div class="my-4 w-full flex items-center">
        <label for="taskName" class="mr-2">Task:</label>
        <input
          type="text"
          class="border pl-2 focus:outline-none h-8 rounded-md w-full"
          id="taskName"
          v-model="taskName"
        />
      </div>
      <div class="mb-4 w-full flex items-center">
        <label for="day" class="mr-2">Time&Day:</label>
        <input
          type="text"
          class="border pl-2 focus:outline-none h-8 rounded-md w-full"
          id="day"
          v-model="day"
        />
      </div>
      <div class="mb-4">
        <label for="reminder" class="mr-2">Set Reminder</label>
        <input type="checkbox" id="reminder" v-model="reminder" />
      </div>

      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onUpdated, defineEmits } from "vue";

const emit = defineEmits(["handle-submit"]);

const reminder = ref(false);
const day = ref("");
const taskName = ref("");

const handleSubmit = (e) => {
  e.preventDefault();

  if (!taskName.value) {
    alert("Please add a task");
    return;
  }
  const newTask = {
    id: Math.floor(Math.random() * 100000),
    text: taskName.value,
    day: day.value,
    reminder: reminder.value,
  };

  day.value = "";
  taskName.value = "";
  reminder.value = false;

  emit("handle-submit", newTask);
};

onUpdated(() => {
  console.log(reminder.value, day.value, taskName.value);
});
</script>

<style></style>
