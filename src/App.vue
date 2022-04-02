<template>
   <div>
     <TasksList :tasks="tasks" />
   </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import TasksList from './components/TasksList.vue'
import Task from './types/Task'

export default defineComponent({
  name: 'App',
  components: { TasksList },
  setup() {
    const tasks = ref<Task[]>([
      {id: '1', description: 'Cook dinnsser', completed: false },
      {id: '2', description: 'Feed dog', completed: false },
      {id: '3', description: 'Visit grandpaxkk', completed: false },
      {id: '4', description: 'Brush teeth', completed: false }
    ])

    return { tasks }
  }

})

</script>

<style>

</style>
