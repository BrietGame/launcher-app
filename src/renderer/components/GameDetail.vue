<script setup lang="ts">
import Button from "./Button.vue";
import {ref} from "vue";

let isLoading = ref(false);
// Function to toggle variable
const checkUpdate = () => {
  console.log('checkUpdate');
  // set isLoading to true
  isLoading.value = true;
  console.log(isLoading);
  setTimeout(() => {
    console.log('isLoading');
    isLoading.value = false;
  }, 3000);
}
</script>

<template>

  <div class="background fixed top-3 bottom-1.5 flex flex-col items-center bg-gray-700 rounded-lg shadow md:flex-row mr-3">
    <div class="mx-auto px-2 py-5">
      <h2 class="text-6xl font-bold tracking-tight text-white text-center drop-shadow">Retour aux <span class="drop-shadow-[0_5px_5px_rgba(255,255,255,0.3)] text-[#5c0000]">sources</span></h2>
      <p class="mt-6 text-lg leading-8 text-white text-center drop-shadow">Redécouvrez les premières saisons de Rainbow Six Siege sur les anciennes cartes avec les anciens modes de jeu en quelques clics.</p>


      <div class="text-center mt-3">
        <Button :loading="isLoading" content="Installer" @click="checkUpdate" />
      </div>
    </div>
  </div>

</template>

<style>
.background {
  background: url("./img/bg-r6.jpg");
  background-size: cover;
}
</style>