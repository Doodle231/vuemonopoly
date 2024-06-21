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
      console.log(activePlayer)
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
   
   console.log(player1.cardCounts)
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
  <div class="bg-[url('/assets/city.jpg')]">
  <GameBoard :diceRolled="Player1diceRolled" 
  @updatedIndex="newIndex" 
  @updateActive="switchActivePlayer"
  @openmodal="openModal"
 />
  
  <PlayerHistory 
 

  class="mb-12" />
  
  <div id="uicontainer" class="w-[30vw] bg-blue-400 absolute right-10 h-[90vh] 
  top-10 pt-10 text-white  rounded-lg border-yellow-100 border-[10px]">
    <PlayerUI
      v-for="(player, index) in players"
      :key="index"
      :highlightName="highlightIndex === index"
      :playerName="player.name"
      :playerCash="player.cash"
      :index="index"
      :smallCardVisible="39"
      
      
    />
  </div>
  <div id ="bottomBtnWrapper" class="bg-blue-200 w-[50vw] h-16 ml-32 absolute bottom-[1%] flex justify-around rounded-lg border-blue-100 border-[10px]">
    <img src="./assets/rollanimation.gif" @click="rollDice" id="rolldicebutton" class="w-24 h-12 cursor-pointer" alt="Roll Dice" />

    <img src="./assets/dollar.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
    <img src="./assets/property.jpg" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
    <img src="./assets/stats.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
</div>
  
    <div id ="topButtonsWrapper" class="w-[30vw] h-20  absolute top-[-1%] left-[15%]  flex justify-around items-center rounded-lg border-2 border-slate-200 bg-blue-200   ">
  <img src="./assets/house.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
  <img src="./assets/hotel.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
  <img src="./assets/bank.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
  <img src="./assets/dollar.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
  <img src="./assets/property.jpg" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
  <img src="./assets/stats.png" @click="rollDice" id="rolldicebutton" class="w-8 h-8 cursor-pointer  top-[5%] " alt="Roll Dice " />
</div>
  

    <MainModal v-if="isModalActive"
    
    

    
    @player1turnfinished="CPULand" />
  

</div>
</template>