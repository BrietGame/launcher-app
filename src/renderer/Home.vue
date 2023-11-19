<script setup lang="ts">
import Card from "./components/Card.vue";
import GameDetail from "./components/GameDetail.vue";
import {ref} from "vue";

defineEmits(['closeGameDetails'])

let modes = [
  {
    year: 1,
    season: 1,
    name: 'Black Ice'
  },
  {
    year: 1,
    season: 2,
    name: 'Dust Line'
  },
  {
    year: 1,
    season: 3,
    name: 'Skull Rain'
  },
  {
    year: 1,
    season: 4,
    name: 'Red Crow'
  },
  {
    year: 2,
    season: 1,
    name: 'Velvet Shell'
  },
  {
    year: 2,
    season: 2,
    name: 'Operation Health'
  },
  {
    year: 2,
    season: 3,
    name: 'Blood Orchid'
  },
  {
    year: 2,
    season: 4,
    name: 'White Noise'
  },
  {
    year: 3,
    season: 1,
    name: 'Operation Chimera'
  },
  {
    year: 3,
    season: 2,
    name: 'Para Bellum'
  },
  {
    year: 3,
    season: 3,
    name: 'Grim Sky'
  },
  {
    year: 3,
    season: 4,
    name: 'Wind Bastion'
  },
]

function formatYearSeason(year: number, season: number, img: boolean) {
  if (img) {
    return "Y" + year + "S" + season;
  } else {
    return "Année " + year + " Saison " + season;
  }
}

const showDetails = ref(false);
let modeSelected;

function openGameDetails(mode: object) {
  modeSelected = mode;
  showDetails.value = true;
  console.log(modeSelected)
}

function closeGameDetails() {
  showDetails.value = false;
}
</script>
<template>
  <div class="p-4 sm:ml-64 relative">
    <div class="p-6">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <Card
            v-for="mode in modes"
            :src-img="formatYearSeason(mode.year, mode.season, true)"
            :title="'Rainbow Six Siege - ' + formatYearSeason(mode.year, mode.season, false)"
            action-name="Jouer"
            @click="openGameDetails(mode)"
        />
      </div>
    </div>
    <GameDetail
        v-show="showDetails"
        :background="formatYearSeason(modeSelected?.year, modeSelected?.season, true)"
        :title="modeSelected?.name"
        :description="formatYearSeason(modeSelected?.year, modeSelected?.season, false)"
        @closeGameDetails="closeGameDetails"
    />
  </div>
</template>