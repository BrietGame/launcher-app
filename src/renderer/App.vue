<script setup lang="ts">
import Sidebar from "./components/Sidebar.vue";
import {onMounted} from "vue";
import {store} from "./store";
import {useRouter} from "vue-router";
const router = useRouter();

window.electronAPI.sendMessage('Hello from App.vue!');

let isConnected = store.getters.isConnected;
onMounted(() => {
  if (!isConnected) {
    router.push('/login')
  }
})
</script>

<template>
  <Sidebar />
  <router-view></router-view>
</template>
