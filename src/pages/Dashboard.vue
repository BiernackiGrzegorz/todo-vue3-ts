<template>
   <div>   
     <TasksList :tasks="tasks" />
   </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import TasksList from '../components/tasks/TasksList.vue'
import Task from '../types/Task'
import { useMainStore } from '../store/index'

export default defineComponent({
  name: 'Dasboard',

  components: { TasksList },

  setup() {
    const tasks = ref<Task[]>([]);

    const mainStore = useMainStore();

    onMounted(() => {
      const fetchedTasks : Task[] = [
        {id: '1', description: 'Cook dinnserd', completed: false },
        {id: '2', description: 'Feed dog', completed: false },
        {id: '3', description: 'Visit grandpa', completed: true },
        {id: '4', description: 'Brush teeth', completed: false }
      ]

      mainStore.loadTasks(fetchedTasks)

      tasks.value = mainStore.tasks
    });

    return { tasks }
  }

})

</script>

<style>

</style>
