// In your Pinia store file (e.g., store.js)
import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
  state: () => ({
    count: 0
  }),
  // Your state management methods
});