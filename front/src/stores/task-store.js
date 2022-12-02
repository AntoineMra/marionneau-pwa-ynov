import { defineStore } from 'pinia'
import { api } from "../boot/axios";

export const useTaskStore = defineStore('task', {
  state: () => {
    return {tasks: []}
  },
  actions: {
    addTask(task) {
      api.post("/tasks",task).then(res => this.taskLists.push(res.data))
    },
    changeTaskStatus(task) {
      api.put(`/tasks/${task._id}`,{
        title: task.title,
        list: task.list,
        done: !task.done})
      .then(res => res.status === 200 ?? new Error(res.status))
      const newTask = this.tasks.findIndex((t => t._id == task._id));
      this.tasks[newTask].done = !task.done
    },
  },
})
