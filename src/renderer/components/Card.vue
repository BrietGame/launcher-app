<script setup lang="ts">
import Button from "./Button.vue";

defineProps({
  srcImg: String,
  title: String,
  actionName: String,
  action: Function
});
</script>

<template>
  <div class="relative flex items-center justify-center hover:cursor-pointer" @click="action">
    <img class="rounded-2xl cursor-pointer" :src="'./img/posters/' + srcImg + '.jpg'" alt="Background">
    <div class="absolute flex items-center justify-center h-full text-white transition duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 hover:h-full">
      <div class="flex flex-col items-center justify-center space-y-2">
        <h2 class="font-bold text-center">{{ title }}</h2>
        <Button :content="actionName" @click="action" />
      </div>
    </div>
  </div>
</template>