// In your Pinia store file (e.g., store.js)
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    name : 'test'
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    changeName(newValue :string) {
      this.name = newValue
    },
  },
  // Your state management methods
});