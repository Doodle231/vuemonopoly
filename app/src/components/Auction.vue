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
    <button id="confirmbidbtn" @click="placeBid"  class="absolute z-[999] left-[30%] bottom-[10%] w-[200px] bg-green-500 ml-[5%]">
      Place Bid
    </button>

    <!-- Conditionally Render Auction Result -->
    <AuctionResult v-if="showAuctionResult" :bid="bidAmount" />
  </div>
</template>

<script>
import { player1 } from "../composables/players";
import AuctionResult from "./AuctionResult.vue";
import PropertyCards from "./PropertyCards.vue";
import { spacesArray } from "../composables/spaces";
import { ref } from "vue";

export default {
  components: {
    PropertyCards,
    AuctionResult
  },
  name: 'Auction',
  props: ['auctionIsActive'],
  setup() {
    // Initialize bidAmount as a reactive reference with 0
    const bidAmount = ref(0); 
    const showAuctionResult = ref(false);




    // Method to place the bid and show auction result
    const placeBid = () => {
      // Convert bidAmount to a number and check if it's valid
      const bidValue = parseFloat(bidAmount.value);
      generateCPUBids()
      if (bidValue > 0) {
        showAuctionResult.value = true; // Show auction result after placing a bid
      } else {
        alert("Please enter a valid bid amount");
        console.log(bidAmount.value); // Debug: Print current bidAmount
      }
    };


    const player2Bid = ref(0);
    const player3Bid = ref(0);
    const player4Bid = ref(0);

    // Method that will be triggered when "Place Bid" is clicked
    const generateCPUBids = () => {
      
        const currentPropertyIndex = player1.location
    
      let cpu1Bid = spacesArray[currentPropertyIndex].price - Math.floor(Math.random() * 40) +  1 
      console.log(cpu1Bid)

      // Assuming player1 has a location property, you are fetching the index
    
      
      // Make sure the index is valid before accessing the array
      if (spacesArray[currentPropertyIndex]) {
        const propertyValue = spacesArray[currentPropertyIndex].price;
        console.log(propertyValue);
      } else {
        console.log('Invalid property index');
      }
    };
    

    return {
      bidAmount,
      showAuctionResult,
      placeBid, 
      generateCPUBids, 
    };
  }
};
</script>
