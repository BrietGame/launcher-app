<script setup lang="ts">
import Card from "./components/Card.vue";
import GameDetail from "./components/GameDetail.vue";
import {onMounted, ref} from "vue";
import {store} from "./store";

let search = ref('');
let gameList = ref([]);
let loading = ref(false);

function searchGame() {
  loading.value = true;
  store.dispatch('addSearchList', {
    accessToken: store.getters.getAccessToken,
    search: search.value
  }).then((res) => {
    if (res.status === 200) {
      loading.value = false;
      gameList.value = store.getters.getSearchList
    }
  })
}

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
let gameSelected;

function openGameDetails(mode: object) {
  gameSelected = mode;
  showDetails.value = true;
  console.log(gameSelected)
}

function closeGameDetails() {
  showDetails.value = false;
}
</script>
<template>
  <div class="p-4 sm:ml-64 relative">
    <form class="space-y-4 md:space-y-6" @submit.prevent="searchGame">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search game</label>
        <input v-model="search" type="text" name="search" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
      </div>
    </form>
    <div class="p-6">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div v-show="loading" role="status">
          <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
        <Card
            v-for="game in gameList"
            :game="game"
            action-name="Jouer"
            @click="openGameDetails(game)"
        />
      </div>
    </div>
    <GameDetail
        v-show="showDetails"
        :game="gameSelected"
        @closeGameDetails="closeGameDetails"
    />
  </div>
</template>