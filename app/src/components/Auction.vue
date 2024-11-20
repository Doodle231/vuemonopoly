<template>
  <div>
    <!-- Auction Header -->
    <h1 class="text-3xl absolute z-[999] bg-blue-200 w-full h-full top-0 text-center p-12">
      Welcome to the Auction. We have the following property for sale. Highest bidder takes it. Good luck!
    </h1>

    <!-- Property Cards Component -->
    <PropertyCards class="absolute z-[999] top-[15%] right-[10%] text-4xl scale-y-60 scale-x-60" />

    <!-- Bid Input Field -->
    <input v-model="bidAmount" type="number" placeholder="Enter your bid" 
      class="bg-white absolute z-[999] left-[20%] bottom-[10%] w-[200px]" />

    <!-- Confirm Bid Button -->
    <button id="confirmbidbtn" @click="placeBid" class="absolute z-[999] left-[30%] bottom-[10%] w-[200px] bg-green-500 ml-[5%]">
      Place Bid
    </button>

    <!-- Conditionally Render Auction Result -->
    <AuctionResult 
      v-if="showAuctionResult" 
      :bid="bidAmount" 
      :player2Bid="player2Bid"
      :player3Bid="player3Bid"
      :player4Bid="player4Bid" 
      @auctionfinished="handleAuctionFinished" />
  </div>
</template>

<script>
import { ref } from "vue";
import { player1 } from "../composables/players";
import AuctionResult from "./AuctionResult.vue";
import PropertyCards from "./PropertyCards.vue";
import { spacesArray } from "../composables/spaces";

export default {
  components: {
    PropertyCards,
    AuctionResult
  },
  name: 'Auction',
  emits: ['auctionfinished'], 
  setup(props, { emit }) {
    const bidAmount = ref(0); 
    const showAuctionResult = ref(false);

    const player2Bid = ref(0);
    const player3Bid = ref(0);
    const player4Bid = ref(0);

    const placeBid = () => {
      const bidValue = parseFloat(bidAmount.value);
      generateCPUBids();
      if (bidValue > 0) {
        showAuctionResult.value = true; // Show auction result after placing a bid
      } else {
        alert("Please enter a valid bid amount");
      }
    };

    const generateCPUBids = () => {
      const currentPropertyIndex = player1.location;
      player2Bid.value = spacesArray[currentPropertyIndex].price - Math.floor(Math.random() * 40) + 1;
      player3Bid.value = spacesArray[currentPropertyIndex].price - Math.floor(Math.random() * 40) + 1;
      player4Bid.value = spacesArray[currentPropertyIndex].price - Math.floor(Math.random() * 40) + 1;
    };

    const handleAuctionFinished = () => {
      showAuctionResult.value = false; 
      console.log("Auction finished");
      emit('auctionfinished'); 
    };

    return {
      bidAmount,
      showAuctionResult,
      placeBid, 
      generateCPUBids, 
      player2Bid, 
      player3Bid, 
      player4Bid,
      handleAuctionFinished
    };
  }
};
</script>
