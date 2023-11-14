<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <Sidebar />
  <router-view></router-view>
</template>
