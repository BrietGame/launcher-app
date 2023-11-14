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
  <div class="relative flex items-center justify-center h-24 bg-gray-50 dark:bg-gray-800">
    <img class="rounded-lg cursor-pointer" :src="srcImg" alt="Background">
    <div class="absolute flex items-center justify-center w-full h-full text-white transition duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 hover:h-full">
      <div class="flex flex-col items-center justify-center space-y-2">
        <h2 class="font-bold">{{ title }}</h2>
        <Button :content="actionName" @click="action" />
      </div>
    </div>
  </div>
</template>