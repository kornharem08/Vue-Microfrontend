<!-- App.vue -->
<script lang="ts" setup>
import { useMyStore } from "../stores";
import {  onMounted } from 'vue';
const store = useMyStore()
onMounted(() => {
});
</script>

<template>
  <div>Micro Frontend TEST {{store.name}}</div>
</template>