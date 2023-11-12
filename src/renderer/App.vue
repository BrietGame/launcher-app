<script setup lang="ts">

import NavBar from "./components/NavBar.vue";
import Button from "./components/Button.vue";
import {ref} from "vue";

window.electronAPI.sendMessage('Hello from App.vue!');

// Set variable boolean
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
  <NavBar />
  <div class="mx-auto max-w-8xl px-2 py-5">
    <h2 class="text-6xl font-bold tracking-tight text-white text-center drop-shadow">Retour aux <span class="drop-shadow-[0_5px_5px_rgba(255,255,255,0.3)] text-[#5c0000]">sources</span></h2>
    <p class="mt-6 text-lg leading-8 text-white text-center drop-shadow">Redécouvrez les premières saisons de Rainbow Six Siege sur les anciennes cartes avec les anciens modes de jeu en quelques clics.</p>


    <div class="mx-auto max-w-8xl py-12 sm:px-6 sm:py-12 lg:px-6">
      <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-4 shadow-2xl sm:rounded-3xl sm:px-6 md:pt-4 lg:flex lg:gap-x-4 lg:px-6 lg:pt-0">
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-5 lg:text-left">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Jouer dès maintenant</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Cliques sur le bouton suivant afin d'installer la version du jeu adéquate si celle-ci n'est pas présente ou pour la mettre à jour.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button :loading="isLoading" content="Installer" @click="checkUpdate" />
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8">
          <img src="./img/R6-operator-frost.webp" alt="App screenshot">
        </div>
      </div>
    </div>
<!--    <Toast type="success" content="test" />-->
  </div>
</template>
