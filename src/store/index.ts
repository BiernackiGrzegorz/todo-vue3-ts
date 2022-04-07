import { defineStore } from 'pinia'
import Task from '../types/Task'

export type RootState = {
    tasks: Task[]
}

export const useMainStore = defineStore({
    id: 'mainStore',

    state: () => 
        (
            {
                tasks: []
            } as RootState        
        ),
    
    actions: {
        createNewTask(task: Task) {
            if (!task) return
            
            this.tasks.push(task)
        },

        loadTasks(tasks: Task[]) {
            if (!tasks) return

            this.tasks = [];

            for (let index = 0; index < tasks.length; index++) {
                const task = tasks[index];
                this.tasks.push(task);
            }
        },

        toggleTask(id: string) {
            const index = this.findIndexById(id);
        
            if (index === -1) return;
        
            this.tasks[index].completed = !(this.tasks[index].completed);
        },

        findIndexById(id: string) {
            return this.tasks.findIndex((task) => task.id === id);
        },
    }
})