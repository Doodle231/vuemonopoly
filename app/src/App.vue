<script  >



import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import PropertyCards from "./components/PropertyCards.vue";
import RollButton from "./components/RollDice.vue"
import { player1,CPUPlayer, CPUPlayer2,CPUPlayer3 } from "./composables/players";


  export default {
   
    components: {
  GameBoard,
  PlayerUI, 
  PropertyCards,
  RollButton, 
  }, 

  setup(){
   


    return {player1, CPUPlayer, CPUPlayer2,CPUPlayer3}

  }
 

}

</script>

<template>
 <h1>{{ player1.name }}</h1>
 <h1>{{ CPUPlayer.name }}</h1>
 <h1>{{ CPUPlayer2.name }}</h1>
 <h1>{{ CPUPlayer3.name }}</h1>
 <GameBoard/>

  <div id = "uicontainer" class ="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
 <PlayerUI 
 playerName ="fred" 
 playerCash = 1500 
 propertyOwned = 0 
 housesOwned = 5  
 hotelsOwned =4 
 activeplayer=""/>
 
 <PlayerUI :playerName ="player1.name" />
 <PlayerUI/>
 <PlayerUI/>
 <RollButton />
   
 </div>
</template>

