import { defineStore } from 'pinia'
import { api } from "../boot/axios";

export const useListStore = defineStore('list', {
  state: () => {
    return {taskLists: []}
  },
  actions: {
    addList(title) {
      api.post("/lists",{title: title}).then(res => this.taskLists.push(res.data))
    },
    completeListTasks(listId) {
      const tasks = this.fetchTasks(listId)
      tasks.map(task => {
        task.done = true
        api.put(`/tasks/${task.id}`,{done: task.done}).then(res => res.status !== 200 ?? new Error(res.status))
      })
    },
  },
})
