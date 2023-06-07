

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
    const players = computed(() => [player1, CPUPlayer, CPUPlayer2, CPUPlayer3]);
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
  <PlayerHistory :activePlayer = "currentPlayer " />
  <div id="uicontainer" class="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
  
    <PlayerUI v-for="(player, index) in players" :key="index" :highlightName="highlightIndex === index" />
  </div>
  <button @click="rollDice" id="rolldicebutton" class="w-24 h-24 bg-green-500 absolute top-12 left-12">RollDice</button>
  

 

</template>