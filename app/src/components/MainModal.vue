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
    PropertyCards
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
      console.log(isSpecialSpace.value)
      
    } else {
      isSpecialSpace.value = false 
    }

    function declinePurchase() {
      isModalVisible.value = false
      auctionIsActive.value = true
    }

    function uniquePropertyText() {
      let landedOn = spacesArray[player1.location]
     console.log(landedOn.name)
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
        
        player1.numberofProperties += 1
        activePlayer.propertyowned.push(spacesArray[player1.location])
        context.emit('player1turnfinished', )
        player1.statusMessage = player1.name + " has purchased " + spacesArray[player1.location].name
        console.log(player1.location)
  
      
        
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
  <div v-if="!isSpecialSpace &&isCardActive" id="buymodal" class="propertycard-modal w-[60vw] h-[70vh] top-[20vh] left-[25%] 
      bg-slate-100 absolute z-[999] text-4xl p-14">
    <div>
      <h1>
        You have landed on {{ currentSpace }} . .It is currently up for Sale. If you decline, it
        will be sent up for auction.
      </h1>
      <PropertyCards :cardIndex="cardIndex" />

      <button @click="addPropertyToInventory" id="buyproperty"
        class="w-24 h-12 absolute bottom-[-2.5%] left-[-5%] text-6xl">
        <img src="../assets/checkmark.png" />
        Buy
      </button>
      <button @click="declinePurchase" id="decline" 
      class="w-24 h-12">
      X
      Decline
    </button>
    </div>

  </div>

  <div v-if="isSpecialSpace" id="uniqueModal"
    class="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-slate-100 absolute z-[999] text-4xl">
    <h3>{{ uniquePropertyText() }}</h3>
    <button id="okaybutton" @click="closeModal">Ok</button>
  </div>
  <Auction v-if="auctionIsActive" :auctionIsActive="auctionIsActive" />
</template>
