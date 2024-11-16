<script>
import { onUpdated, ref } from 'vue'
import { CPUPlayer, activePlayer, player1, switchPlayer } from '../composables/players'
import { spacesArray } from '../composables/spaces'
import Auction from './Auction.vue'
import PropertyCards from './PropertyCards.vue'


export default {
  name: 'MainModal',
  props: ['isMobalActive', 'cardIndex', 'cpuPlayer1Position'],
  emits: ['player1turnfinished'],
  components: {
    Auction,
    PropertyCards, 
    
  },

  setup(props, context) {

    const cardIndex = props.cardIndex
    const currentSpace = spacesArray[player1.location].name
    const isModalVisible = props.isModalActive
    const isSpecialSpace = ref(false)
    const price = spacesArray[player1.location].price
    const auctionIsActive = ref(false)
    const isCardActive = ref(true)

    if (spacesArray[player1.location].spaceType === 'unique') {
      isSpecialSpace.value = true
     
    } else {
      isSpecialSpace.value = false 
    }

    function declinePurchase() {
   
      auctionIsActive.value = true
    }

    function uniquePropertyText() {
      let landedOn = spacesArray[player1.location]
     
      if (landedOn.name === 'go') {
        return 'You landed on go. Here is 200 bucks!'
      }

      if (landedOn.name === 'Community Chest') {
        return 'You have laned on Community Chest! Here is your card...'
      }

      if (landedOn.name === 'Just Visiting') {
        return 'You have landed on Just Visiting. Relax, you are not in jail... Yet'
      }
      
    }

    function closeModal() {
     isSpecialSpace.value = false; 
     isCardActive.value = false; 
     
     context.emit('player1turnfinished', )
    }

    


    function addPropertyToInventory() {
      if (player1.cash < price) {
        alert("Sorry, but you don't have enough cash to buy this property")
        
      } else {
        player1.cash -= price
        spacesArray[player1.location].owner = activePlayer.name
        console.log("added to inventory")
        player1.numberofProperties += 1
        activePlayer.propertyowned.push(spacesArray[player1.location])
        context.emit('player1turnfinished', )
        player1.statusMessage = player1.name + " has purchased " + spacesArray[player1.location].name
        
  
      
        
      }
    }

    return {
      isModalVisible,
      addPropertyToInventory,
      isSpecialSpace,
      uniquePropertyText,
      declinePurchase,
      auctionIsActive,
      closeModal,
      cardIndex,
      currentSpace,
      price, 
      isCardActive, 
      
    }
  }
}
</script>

<template>
  <div v-if="!isSpecialSpace &&isCardActive" id="buymodal" class="propertycard-modal w-[100vw] h-[100vh]  
  bg-gray-400 absolute z-[998] text-2xl  top-0 text-center  p-[90px]  ">
    <div id ="cardModalWrapper" class ="bg-blue-100 pb-20 rounded-lg border-blue-200 border-[12px] absolute top-[10%] left-[15%] w-[70vw] h-[70vh] ">
      <img src="../assets/monman.png" class="w-96 h-96 absolute left-16 bottom-24">
      
      <div>
      <h1 class="p-8 text-lg text-center">
        You have landed on {{ currentSpace }}. It is currently up for Sale. If you decline, it
        will be sent up for auction.
      </h1>
      <PropertyCards :cardIndex="cardIndex" />

      <button @click="addPropertyToInventory" id="buyproperty"
        class="w-24 h-16  text-2xl absolute left-[45%] bottom-[5%] bg-green-500 
        rounded-lg border-2 hover:bg-green-300">
      
        Buy
      </button>
      <button @click="declinePurchase" id="decline" 
      class="w-24 h-16 text-2xl absolute right-[5%] bottom-[5%] bg-red-500 
      rounded-lg border-2 hover:bg-red-300">
      
      Decline
    </button>
    </div>

  </div>

  </div>
  <div v-if="isSpecialSpace" id="uniqueModal"
    class="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-red-400 absolute z-[999] text-4xl">
    <h3>{{ uniquePropertyText() }}</h3>
    <button id="okaybutton" @click="closeModal">Ok</button>
  </div>
  <Auction v-if="auctionIsActive" :auctionIsActive="auctionIsActive" />
  
</template>
