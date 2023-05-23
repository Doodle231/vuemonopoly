

<script>
import { ref, computed } from 'vue';
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3 } from "./composables/players";

export default {
  components: {
    GameBoard,
    PlayerUI,
    

  },
  setup() {
    const highlightIndex = ref(0);
    const players = computed(() => [player1, CPUPlayer, CPUPlayer2, CPUPlayer3]);
     highlightIndex.value = 0
    return {
      highlightIndex,
      players,
      player1, 
      CPUPlayer, 
      CPUPlayer2, 
      CPUPlayer3
    };
  },
};
</script>

<template>

  <GameBoard/>

  <div id="uicontainer" class="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
    <PlayerUI v-for="(player, index) in players" :key="index" :highlightName="highlightIndex === index" />
    <RollButton />
  </div>
</template>