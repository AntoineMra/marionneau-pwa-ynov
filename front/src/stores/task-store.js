import { defineStore } from 'pinia'
import { api } from "../boot/axios";

export const useTaskStore = defineStore('task', {
  state: () => {
    return {tasks: []}
  },
  actions: {
    addTask(task) {
      api.post("/task",task).then(res => this.taskLists.push(res.data))
    },
    changeTaskStatus(task) {
      task.done = !task.done
      api.put(`/tasks/${task.id}`,{done: task.done}).then(res => res.status === 200 ?? new Error(res.status))
    },
  },
})
