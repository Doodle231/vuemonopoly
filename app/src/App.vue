

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

  
 
    

 
    function rollDice(){
      
    
  
      diceRolled.value =  Math.floor(Math.random() * 12)


     currentPlayer.value = activePlayer.name


      
    }
    

    
 

     return {
  
      player1, 
      CPUPlayer, 
      CPUPlayer2, 
      CPUPlayer3,
      activePlayer, 
      rollDice, 
      diceRolled, 
      currentPlayer, 
     
    
    
     
    };
  },
};
</script>

<template>

<GameBoard :diceRolled="diceRolled" />
  <PlayerHistory :activePlayer = "currentPlayer " />
  <div id="uicontainer" class="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
   
    <PlayerUI :playerName = player1.name 
    :playerCash = player1.cash 
    :propertyOwned= player1.numberofProperties 
   
    />
    
    <PlayerUI :playerName = CPUPlayer.name :playerCash = CPUPlayer.cash />
    <PlayerUI :playerName = CPUPlayer2.name :playerCash = CPUPlayer2.cash />
    <PlayerUI :playerName = CPUPlayer3.name :playerCash = CPUPlayer3.cash />
  </div>
  <button @click="rollDice" id="rolldicebutton" class="w-24 h-24 bg-green-500 absolute top-12 left-12">RollDice</button>
  

 

</template>