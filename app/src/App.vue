<script  >



import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import PropertyCards from "./components/PropertyCards.vue";
import RollButton from "./components/RollDice.vue"



  export default {
   
    components: {
  GameBoard,
  PlayerUI, 
  PropertyCards,
  RollButton, 
  }, 

  setup(){
   
      const Players = (name, cash, ) => {
   
   return {
     name:name, 
     cash:cash, 
     railroads:0,
     utilities:0, 
     location: [], 
     propertyowned: [],
     updatedlocation:0,
     icon:null, 
     dice:0,
     turnsTaken:0, 
     hotelsOwned:0, 
     housesOwned:0, 
     
     cardCounts:{
     brownCards:0, 
     lightBlueCards:0, 
     pinkCards:0, 
     orangeCards:0, 
     redCards:0, 
     yellowCards:0, 
     greenCards:0, 
     blueCards:0, 
     },

     cardSets: {
      brownSet:false, 
      lightBlueSet:false, 
      pinkSet:false, 
      orangeSet:false, 
      redSet:false, 
      yellowSet:false, 
      greenSet:false, 
      darkBlueSet:false, 
     },



       }

   
     }


      const player1 = Players ("DoodleBug", 1500, 0, 0, )  
     const CPUPlayer = Players ("John ", 1500, 0, 0, ) 
     const CPUPlayer2 =   Players ("Frank", 1500, 0, 0, )
     const CPUPlayer3 = Players ("Lynn ", 1500, 0, 0, )
   
     return { player1, CPUPlayer, CPUPlayer2, CPUPlayer3,}

    

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

