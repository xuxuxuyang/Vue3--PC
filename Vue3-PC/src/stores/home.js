
import { defineStore } from 'pinia'

export const usehomestore = defineStore('home', {
  state: () => ({
    id: 123
  }),
  getters: {
    getid: (state) => state.id
  },
  actions: {
    changeid(id) {
      this.id = id
    }
  }
})
