<template>
    <div class="flex items-center border-t border-gray-400">
        <Checkbox :checked="task.completed" @click="toggleTask(task.id)" />
        <div class="ml-2 justify-self-center">{{ task.description }}</div>
    </div>    
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Task from '../../types/Task'
import Checkbox from '../common/Checkbox.vue'
import { useMainStore } from '../../store/index'

export default defineComponent({
    components: { Checkbox },
    props: {
        task: {
            required: true,
            type: Object as PropType<Task>
        }
    },
    setup() {
        const mainStore = useMainStore()

        function toggleTask(id: string) {
            mainStore.toggleTask(id)
        }

        return { toggleTask }
    },
})
</script>
