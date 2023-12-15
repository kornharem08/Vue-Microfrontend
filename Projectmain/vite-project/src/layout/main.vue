<script setup lang="ts">
import {  initGlobalState } from "qiankun";
const { setGlobalState } = initGlobalState();

function setNew(){
  setGlobalState({
  color: "Blue",
  user: {
    name: "NEW",
  },
});
}


</script>

<template>
    <div>
      <header>
        <h1>My App</h1>
        <button @click="setNew">sdasdasd</button>
      </header>
  
      <main>
        <slot></slot>
      </main>
  
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
</template>
  
  <style scoped>
    /* Add some styling for your layout if needed */
    div {
      max-width: 100%;
      margin: 0 auto;
    }
  
    header {
      background-color: #4CAF50;
      color: white;
      padding: 1em;
      text-align: center;
      width: 100%;
    }
  
    footer {
      background-color: #4CAF50;
      color: white;
      padding: 1em;
      text-align: center;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
  