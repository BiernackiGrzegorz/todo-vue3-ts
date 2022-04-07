<template>
    <div>
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Task from '../../types/Task'
import TaskItem from './TaskItem.vue'

export default defineComponent({
    name: 'TasksList',
    components: { TaskItem },
    props: {
       tasks: {
           required: true,
           type: Array as PropType<Task[]>
       }
    },
    setup() {
        
    }
})
</script>
