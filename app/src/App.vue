

<script>
import { ref, computed , reactive} from 'vue';
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3, activePlayer, switchPlayer} from "./composables/players";
import PlayerHistory from './components/PlayerHistory.vue';

export default {
  components: {
    GameBoard,
    PlayerUI,
    PlayerHistory, 
    
  },


  
  setup() {
  
   
    const currentPlayer = ref('')


    const diceRolled = ref('');

    function newIndex(){
  
     highlightIndex.value ++; 
    }
  
 
    

 
    function rollDice(){
      
    
  
      diceRolled.value =  Math.floor(Math.random() * 12)


     
      
    }
    
    const highlightIndex = ref(0)
    
    const players = computed(() => [
    { name: player1.name, cash: player1.cash, propertyOwned:player1.propertyowned },
    { name: CPUPlayer.name, cash: CPUPlayer.cash, propertyOwned:CPUPlayer.propertyowned},
    { name: CPUPlayer2.name, cash:CPUPlayer2.cash, propertyOwned:CPUPlayer2.propertyowned},
    { name: CPUPlayer3.name, cash:CPUPlayer3.cash, propertyOwned:CPUPlayer3.propertyowned}
  ]);


     highlightIndex.value = 0

     return {
  
      player1, 
      CPUPlayer, 
      CPUPlayer2, 
      CPUPlayer3,
      activePlayer, 
      rollDice, 
      diceRolled, 
      currentPlayer, 
      players, 
      highlightIndex, 
      newIndex, 
     
    
    
     
    };
  },
};
</script>

<template>

<GameBoard :diceRolled="diceRolled" @updatedIndex="newIndex"/>
  <PlayerHistory :activePlayer = "activePlayer.name " />
  <div id="uicontainer" class="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
  
    <PlayerUI v-for="(player, index) in players" :key="index" 
    :highlightName="highlightIndex === index"  
    :playerName="player.name"
    :playerCash="player.cash"
    :propertyOwned="player.propertyOwned" />
  </div>
  <button @click="rollDice" id="rolldicebutton" class="w-24 h-24 bg-green-500  ">RollDice</button>
  

 

</template>