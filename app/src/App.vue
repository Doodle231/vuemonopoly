<script >
import GameBoard from "../src/components/GameBoard.vue"
import PlayerUI from "./components/PlayerUI.vue";
import PropertyCards from "./components/PropertyCards.vue";

  export default {
  components: {
    GameBoard,
    PlayerUI, 
    PropertyCards,
  }
}


</script>

<template>
  <GameBoard/>
  <PropertyCards rent = "1400" rent1house ="24"/>
  <div id = "uicontainer" class ="w-[30vw] bg-[#dae6ba] absolute right-20 h-[90vh] top-10 pt-10">
 <PlayerUI playerName ="fred" playerCash = 1500 propertyOwned = 0 housesOwned = 5  hotelsOwned =4 />
 <PlayerUI playerName ="John"/>
 <PlayerUI/>
 <PlayerUI/>
 </div>
</template>

