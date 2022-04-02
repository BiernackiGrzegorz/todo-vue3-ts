<template>
    <div class="jon-list">
        <ul>
            <li v-for="task in tasks" :key="task.id">
                <h2>{{ task.description }}</h2>
            </li>
        </ul>
    </div>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Task from '../types/Task'

export default defineComponent({
   props: {
       tasks: {
           required: true,
           type: Array as PropType<Task[]>
       }
   }
})
</script>
