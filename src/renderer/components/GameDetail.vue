<script setup lang="ts">
import Button from "./Button.vue";
import {ref} from "vue";
import Game from "../models/Game";

defineEmits(['closeGameDetails'])

defineProps({
  gameSelected: {
    type: Game,
    required: true,
  }
})

let isLoading = ref(false);
// Function to toggle variable
const checkUpdate = () => {
  // set isLoading to true
  isLoading.value = true;
  console.log(isLoading);
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>

<template>

  <div class="fixed top-3 bottom-3 left-3 right-3 z-10 flex flex-col items-center rounded-lg shadow md:flex-row mr-3">
    <div class="mx-auto px-2 py-5">
      <img class="fixed top-0 bottom-0 left-0 right-0 rounded-lg brightness-75" :src="gameSelected.thumb" alt="Background">
      <h2 class="text-6xl font-bold tracking-tight text-white text-center drop-shadow" v-html="gameSelected.titre"></h2>
      <img class="rounded-lg brightness-75 h-12" :src="gameSelected.devLogo" alt="Dev logo">
      <p class="mt-6 text-lg leading-8 text-white text-center drop-shadow">{{ gameSelected.dev }}</p>
      
      <div class="mt-6 text-lg leading-8 text-white text-center drop-shadow">
        <Button :loading="isLoading" content="Installer" @click="checkUpdate" />
        <Button type="danger" content="Fermer" @click="$emit('closeGameDetails')" />
      </div>
    </div>
  </div>

</template>

<style>
.background {
  background-size: cover;
}
</style>