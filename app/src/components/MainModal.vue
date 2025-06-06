<script>
import { onUpdated, ref, watch } from 'vue';
import { CPUPlayer, activePlayer, player1, switchPlayer } from '../composables/players';
import { spacesArray } from '../composables/spaces';
import Auction from './Auction.vue';
import PropertyCards from './PropertyCards.vue';

export default {
  name: 'MainModal',
  props: ['isModalActive', 'cardIndex', 'cpuPlayer1Position'],
  emits: ['player1turnfinished', 'auctionfinished'],
  components: {
    Auction,
    PropertyCards,
  },

  setup(props, context) {
   
    const isModalVisible = ref(props.isModalActive); 
    const isSpecialSpace = ref(false);
    const auctionIsActive = ref(false);
    const isCardActive = ref(true);

   
    const cardIndex = props.cardIndex;
    const currentSpace = spacesArray[player1.location]?.name;
    const price = spacesArray[player1.location]?.price;

 
    if (spacesArray[player1.location]?.spaceType === 'unique') {
      isSpecialSpace.value = true;
    } else {
      isSpecialSpace.value = false;
    }


    watch(() => props.isModalActive, (newValue) => {
      isModalVisible.value = newValue;
    });

   
    function declinePurchase() {
      auctionIsActive.value = true;
      console.log("auction launching")
    }

    function uniquePropertyText() {
      const landedOn = spacesArray[player1.location];
      if (landedOn.name === 'go') return 'You landed on go. Here is 200 bucks!';
      if (landedOn.name === 'Community Chest') return 'You have landed on Community Chest! Here is your card...';
      if (landedOn.name === 'Just Visiting') return 'You have landed on Just Visiting. Relax, you are not in jail... Yet';
      return '';
    }

    function closeModal() {
      isSpecialSpace.value = false;
      isCardActive.value = false;
      context.emit('player1turnfinished');
    }

    function handleAuctionFinished() {
      auctionIsActive.value = false;
      isModalVisible.value = false;
      isCardActive.value = false;
      console.log('Auction Finished', { auctionIsActive, isModalVisible, isCardActive })
      context.emit('auctionfinished');
      

    }

    function addPropertyToInventory() {
      if (player1.cash < price) {
        alert("Sorry, but you don't have enough cash to buy this property");
      } else {
        player1.cash -= price;
        spacesArray[player1.location].owner = player1.name
        player1.numberofProperties += 1;
        player1.propertyowned.push(spacesArray[player1.location]);
        player1.statusMessage = `${player1.name} has purchased ${spacesArray[player1.location].name}`;
        context.emit('player1turnfinished');
        console.log(player1.propertyowned)
      }
    }

    return {
    
      isModalVisible,
      auctionIsActive,
      isCardActive,
      isSpecialSpace,
      cardIndex,
      currentSpace,
      price,

      addPropertyToInventory,
      uniquePropertyText,
      declinePurchase,
      closeModal,
      handleAuctionFinished,
    };
  },
};
</script>
<template>
 
    <!-- Modal for Property Purchase -->
    <div
      v-if="!isSpecialSpace && isCardActive && !auctionIsActive"
      id="buymodal"
      class="propertycard-modal w-[100vw] h-[100vh] bg-gray-400/70 absolute z-[998] text-2xl top-0 text-center p-[90px]"
    >
      <div
        id="cardModalWrapper"
        class="pb-8 rounded-lg border-[12px] absolute top-[10%] left-[15%] 
        w-[70vw] h-[70vh] opacity-100 bg-blue-400"
      >
        <img src="../assets/monman.png" class="w-124 h-124 absolute left-16 bottom-4" />

        <div>
          <h1 class="p-12 text-[2rem] text-center">
            You have landed on {{ currentSpace }}. It is currently up for Sale. If you decline, it
            will be sent up for auction.
          </h1>
          <h1 class="properyPrice text-[2rem] text-center ml-72">
            Price:
            <h1 class="text-green-400 text-2xl text-[4rem] mt-4">$ {{ price }}</h1>
          </h1>
          <PropertyCards :cardIndex="cardIndex" />

          <!-- Buy Button -->
          <button
            @click="addPropertyToInventory"
            id="buyproperty"
            class="w-24 h-16 text-2xl absolute left-[45%] bottom-[5%] bg-green-500 rounded-lg border-2 hover:bg-green-300"
          >
            Buy
          </button>

          <!-- Decline Button -->
          <button
            @click="declinePurchase"
            id="decline"
            class="w-24 h-16 text-2xl absolute right-[5%] bottom-[5%] bg-red-500 rounded-lg border-2 hover:bg-red-300"
          >
            Decline
          </button>
        </div>
      </div>
    </div>

    <!-- Auction Component -->
    <Auction
      v-if="auctionIsActive"
      @auctionfinished="handleAuctionFinished"
    />

</template>
