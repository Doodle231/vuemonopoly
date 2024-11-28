<script>
import { computed, reactive, ref } from 'vue';
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3, activePlayer, switchPlayer } from "./composables/players";
import PlayerHistory from './components/PlayerHistory.vue';
import MainModal from './components/MainModal.vue'
import { cpuLandingSpaceLogic } from './composables/cpuplayerslogic';

import Trade from './components/Trade.vue';
export default {
  components: {
    GameBoard,
    PlayerUI,
    PlayerHistory,
    MainModal, 
    Trade, 
    
  },

  setup() {
    const isTradeVisible = ref(false);

function toggleTrade() {
  isTradeVisible.value = !isTradeVisible.value;
  console.log("trading tottlge")
}

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
     
      switchPlayer();
      cpuLandingSpaceLogic()
      
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
    
      highlightIndex.value +=1 ; 
   
   

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
      toggleTrade,
      isTradeVisible, 
     
      
      
    };
  },
};
</script>

<template>
  <div class="bg-[url('/assets/city.jpg')]">
  <GameBoard :diceRolled="Player1diceRolled" 
  @updatedIndex="newIndex" 
  @updateActive="switchActivePlayer"
  @openmodal="openModal"
 />
  
  <PlayerHistory 
 

  class="mb-12" />
  
  <div id="uicontainer" class="md:w-[30vw] bg-blue-400 absolute md:right-10 right-0 h-[90vh]  w-28 
  top-0 pt-10 text-white  rounded-lg border-yellow-100 border-[10px]">
   // <PlayerUI
      v-for="(player, index) in players"
      :key="index"
      :highlightName="highlightIndex === index"
      :playerName="player.name"
      :playerCash="player.cash"
      :index="index"
      :smallCardVisible="5"
      
      
    />
  </div>
  <div id ="bottomBtnWrapper" class="bg-blue-200 w-[50vw] h-16 ml-32 absolute bottom-[1%] flex justify-around rounded-lg border-blue-100 border-[10px]">
    <img src="./assets/rollanimation.gif" @click="rollDice" id="rolldicebutton" class="w-24 h-12 cursor-pointer" alt="Roll Dice" />

    <img src="./assets/dollar.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
    <img src="./assets/property.jpg" @click="toggleTrade" id="tradebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="trade " />
    <img src="./assets/stats.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
</div>
<Trade v-if="isTradeVisible" @closeTrade="toggleTrade" />
    <div id ="topButtonsWrapper" class="w-[40vw] h-20  absolute z-[999] top-0 left-[15%]  
    flex  border-4 border-slate-200 bg-red-700   ">
    <div id ="gameText" class= "text-[3vw] text-white ml-72 mt-0 	font-extrabold">Monopoly</div>
    <img src="./assets/property.jpg" @click="toggleTrade" id="tradebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="trade " />
</div>
  

<MainModal v-if="isModalActive" 
@player1turnfinished="CPULand"
@auctionfinished="CPULand">
</MainModal>

      
      
     <Trade v-if="isTradeVisible" @closeTrade="toggleTrade"  />
    

  

</div>
</template>