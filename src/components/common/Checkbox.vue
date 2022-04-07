<template>
    <div class="w-8 h-8 m-3 border border-gray-500 rounded-full cursor-pointer flex items-center hover:border-2 hover:text-red-900 transition-all">
        <font-awesome-icon v-if="checked"  icon="check" class="w-full text-xl"></font-awesome-icon>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'Checkbox',
    
    props: {
        checked: {
            required: true,
            type: Boolean
        }
    },
})
</script>
