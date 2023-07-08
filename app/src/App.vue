<script>
import { computed, reactive, ref } from 'vue';
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3, activePlayer, switchPlayer } from "./composables/players";
import PlayerHistory from './components/PlayerHistory.vue';
import MainModal from './components/MainModal.vue';
export default {
  components: {
    GameBoard,
    PlayerUI,
    PlayerHistory,
    MainModal, 
  },

  setup() {
    
    const isModalActive = ref(false)
    
    
    const Player1diceRolled = ref();
   
    function newIndex() {
      highlightIndex.value++;

    }
   
    function rollDice() {
     // diceRolled.value = Math.floor(Math.random() * 12);
    
     player1.diceRolled =   Math.floor(Math.random() * 12) +  1 
     player1.location += player1.diceRolled
    
     
    }

     
    const highlightIndex = ref(0);

  

    function openModal() {
      isModalActive.value = true
     
     
    }

    function switchActivePlayer() {
      console.log("switch active player")
      switchPlayer();
      console.log(activePlayer.name)
     // isModalActive.value = false; 
   
     

     

      highlightIndex.value +=1 ; 
     

      if (highlightIndex.value === 4){
        highlightIndex.value = 0
      }
   
    }

    function CPULand() {
     isModalActive.value = false 
      CPUPlayer.location += 9
      CPUPlayer.diceRolled = 9
      console.log("CPU LAND")
      highlightIndex.value +=1 ; 
   
/*    
      CPUPlayer.diceRolled = 8
      cpuPlayer1Position.value = 8
      
      */ 
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
      isModalActive, 
      CPULand, 
      openModal, 
    
      
    };
  },
};
</script>

<template>
  <GameBoard :diceRolled="Player1diceRolled" 
  @updatedIndex="newIndex" 
  @updateActive="switchActivePlayer"
  @openmodal="openModal"
 />
  
  <PlayerHistory 
 

  class="mb-12" />
  
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



    
    <MainModal v-if="isModalActive"
    
    

    
    @player1turnfinished="CPULand" />
  


</template>