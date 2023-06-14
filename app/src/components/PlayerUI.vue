<template>
  <div :class="{ 'bg-blue-200': highlightName }" class="player-container w-[90%] h-[20%] rounded-[40px] ml-10 mb-10 relative">
    <h1 class="text-4xl pt-6 pl-16 font-bold">{{ playerName }}</h1>
    <h2 class="player-cash text-[#2F5517] text-3xl">Cash: ${{ playerCash }}</h2>
    <img src="../assets/property.jpg" class="w-[40px] h-[40px] rounded-[40px]">
    <div class="property-owned">Total Property: {{ numberofProperties }}</div>
    <div class="hotels-owned ml-[70%]">Total Hotels: {{ hotelsOwned }}</div>
    <img src="../assets/hotel.jpg" class="w-[40px] h-[40px] rounded-[40px] ml-[75%]">
    <div class="houses-owned ml-[50%]">Total Houses: {{ housesOwned }}</div>
    <img src="../assets/house.jpg" class="w-[40px] h-[40px] rounded-[40px] absolute right-0 bottom-0">
  </div>
</template>

<script>
import { activePlayer } from '../composables/players';

export default {
  name: 'PlayerUI',
  props: [
    'playerName',
    'playerCash',
    'numberofProperties',
    'hotelsOwned',
    'housesOwned',
    'activePlayer',
    'highlightName'
  ],

  setup(props) {
    const currentPlayer = activePlayer;


    return {
      currentPlayer
    };
  },
};
</script>
