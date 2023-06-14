<script>
import { computed, reactive, ref } from 'vue';
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3, activePlayer, switchPlayer } from "./composables/players";
import PlayerHistory from './components/PlayerHistory.vue';

export default {
  components: {
    GameBoard,
    PlayerUI,
    PlayerHistory,
  },

  setup() {
    const Player1diceRolled = ref('');
    const player1StatusMessage = ref(' this is a status message ')
    function newIndex() {
      highlightIndex.value++;
    }

    function rollDice() {
     // diceRolled.value = Math.floor(Math.random() * 12);
     Player1diceRolled.value = 9
    }

    const testPlayer = ref(player1)
     
    const highlightIndex = ref(0);

    function switchActivePlayer() {
      
      switchPlayer();
     
      testPlayer.value = activePlayer
     

      testPlayer.value = activePlayer

      highlightIndex.value +=1 ; 
      console.log(highlightIndex.value)
   
    }

  

    const players = computed(() => [
      { name: player1.name, cash: player1.cash, propertyOwned: player1.numberofProperties },
      { name: CPUPlayer.name, cash: CPUPlayer.cash, propertyOwned: CPUPlayer.numberofProperties },
      { name: CPUPlayer2.name, cash: CPUPlayer2.cash, propertyOwned: CPUPlayer2.numberofProperties },
      { name: CPUPlayer3.name, cash: CPUPlayer3.cash, propertyOwned: CPUPlayer3.numberofProperties }
    ]);

    return {
      player1,
      CPUPlayer,
      CPUPlayer2,
      CPUPlayer3,
      rollDice,
      Player1diceRolled,
      players,
      highlightIndex,
      newIndex,
      switchActivePlayer,
      activePlayer, 
      testPlayer, 
      player1StatusMessage, 
      
    };
  },
};
</script>

<template>
  <GameBoard :diceRolled="Player1diceRolled" @updatedIndex="newIndex" @updateActive="switchActivePlayer"/>
  
  <PlayerHistory 
  :activePlayer="testPlayer"
  :Player1StatusMessage="player1StatusMessage" 
  
  class="mb-12"         />
  
  <div id="uicontainer" class="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
    <PlayerUI
      v-for="(player, index) in players"
      :key="index"
      :highlightName="highlightIndex === index"
      :playerName="player.name"
      :playerCash="player.cash"
      :propertyOwned="player.propertyOwned"
    />
  </div>
  
  <button @click="rollDice" id="rolldicebutton" class="w-24 h-24 bg-green-500 absolute left-[20%] bottom-[20%]">
    Roll Dice
  </button>
</template>