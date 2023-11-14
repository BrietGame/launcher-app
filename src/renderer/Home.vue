<script setup lang="ts">
import Card from "./components/Card.vue";
import GameDetail from "./components/GameDetail.vue";
</script>
<template>
  <div class="p-4 sm:ml-64 relative">
    <div class="p-6">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <Card
            src-img="https://i.pinimg.com/originals/18/75/19/187519a4719ca8baead7eba222787ef1.jpg"
            title="Rainbow Six Siege"
            action-name="Jouer"
            :action="null"
        />
      </div>
    </div>
    <GameDetail />
  </div>
</template>