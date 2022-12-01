import { defineStore } from 'pinia'
import { api } from "../boot/axios";

export const useListStore = defineStore('list', {
  state: () => {
    return {taskLists: []}
  },
  actions: {
    addList(title) {
      console.log(title);
      api.post("/lists",{title: title}).then(res => this.taskLists.push(res.data))
    },
  },
})
