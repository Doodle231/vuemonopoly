<script>
import { onUpdated, ref } from "vue";
import { CPUPlayer, activePlayer, player1, switchPlayer } from "../composables/players";
import { spacesArray } from "../composables/spaces";
import Auction from "./Auction.vue";
import PropertyCards from "./PropertyCards.vue";



export default {
  name: "MainModal",
  props: ["isCardActive", "cardIndex" ,"cpuPlayer1Position",],
  emits: ['test'],
  components: {
    Auction,
    PropertyCards,
   
},


  setup(props,context) {
  
    const currentLocation = props.cardIndex;
    const cardIndex = props.cardIndex
    const currentSpace = spacesArray[currentLocation].name
    const isModalVisible = ref(true);
    const isNonUniqueProperty = ref(true);
    const price = spacesArray [currentLocation].price
    const auctionIsActive = ref(false);
    
    
    if (spacesArray[currentLocation].spaceType === "unique") {
      isNonUniqueProperty.value = false;
    } else {
      isNonUniqueProperty.value = true;
    }

    function declinePurchase() {
      isModalVisible.value = false;
      auctionIsActive.value = true;
    }

    function uniquePropertyText() {
      let landedOn = spacesArray[currentLocation];

      if (landedOn.name === "go") {
        return "You landed on go. Here is 200 bucks!";
      }

      if (landedOn.name === "Community Chest") {
        return "You have laned on Community Chest! Here is your card...";
      }

      if (landedOn.name === "Just Visiting") {
        return "You have landed on Just Visiting. Relax, you are not in jail... Yet";
      }
    }

    function closeModal() {
      isModalVisible.value = false;
      switchPlayer();
    }

   
    
    

    function addPropertyToInventory() {
      if (activePlayer.cash < price) {
        alert("Sorry, but you don't have enough cash to buy this property");
      } else {
        activePlayer.cash -= price;
        spacesArray[currentLocation].owner = activePlayer.name;
        isModalVisible.value = false;

        activePlayer.numberofProperties += 1;
        activePlayer.propertyowned.push(spacesArray[currentLocation]);
        context.emit('test', "hello there")
      }

     
    }

    
  
    return {
     
      isModalVisible,
      addPropertyToInventory,
      isNonUniqueProperty,
      uniquePropertyText,
      declinePurchase,
      auctionIsActive,
      closeModal,
      cardIndex, 
      currentSpace, 
      price, 
   
     
    };
  },


};
</script>

<template>
  <div v-if="isCardActive && isModalVisible && isNonUniqueProperty" id="buymodal" class="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-slate-100 absolute z-[999] text-4xl">
    <div>
      <h1>You have landed on {{ currentSpace }} . .It is currently up for Sale. If you decline, it will
        be sent up for auction. 
      </h1>
      <PropertyCards :cardIndex = "cardIndex"/>

      <button @click="addPropertyToInventory" id="buyproperty" class="w-24 h-12 absolute bottom-[-2.5%] left-[-5%] text-6xl">
        <img src="../assets/checkmark.png" />
        Buy
      </button>
      <button @click="declinePurchase" id="decline" class="w-24 h-12">Decline</button>
    </div>
  </div>

  <div v-if="isCardActive && isModalVisible && !isNonUniqueProperty" id="uniqueModal" class="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-slate-100 absolute z-[999] text-4xl">
    <h3>{{ uniquePropertyText() }}</h3>
    <button id="okaybutton" @click="closeModal">Ok</button>
  </div>
  <Auction v-if="auctionIsActive" :auctionIsActive="auctionIsActive" />


</template>
