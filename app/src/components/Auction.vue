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
  :winningPlayer="winningPlayer"
  :winningBid="winningBid"
  @auctionfinished="handleAuctionFinished" />
  </div>
</template>

<script>
import { ref } from "vue";
import { player1,CPUPlayer,CPUPlayer2,CPUPlayer3, switchPlayer } from "../composables/players";
import AuctionResult from "./AuctionResult.vue";
import PropertyCards from "./PropertyCards.vue";
import { spacesArray } from "../composables/spaces";


export default {
  components: {
    PropertyCards,
    AuctionResult,
  },
  name: 'Auction',
  emits: ['auctionfinished'], 
  setup(props, { emit }) {
    const bidAmount = ref(0); 
    const showAuctionResult = ref(false);
    const winningPlayer = ref(null);
const winningBid = ref(0);

    const player2Bid = ref(0);
    const player3Bid = ref(0);
    const player4Bid = ref(0);

    const placeBid = () => {
      const bidValue = parseFloat(bidAmount.value);
      generateCPUBids();
     console.log("placing bid")

      if (bidValue > 0 && bidValue < player1.cash) {
        showAuctionResult.value = true; 
        console.log("runnning", showAuctionResult.value)
      } if (bidValue > player1.cash ){
        alert ("you don't have enough cash to place this bid")
      }
      
    
    };

   

    const generateCPUBids = () => {
  const currentPropertyPrice = spacesArray[player1.location].price;


  const CPUPlayers = [
    { player: CPUPlayer, bid: player2Bid },
    { player: CPUPlayer2, bid: player3Bid },
    { player: CPUPlayer3, bid: player4Bid },
  ];

  
  CPUPlayers.forEach(({ player, bid }) => {
    if (player.cash < currentPropertyPrice) {
      bid.value = 0; // Player can't afford the bid
    } else {
      bid.value = currentPropertyPrice - Math.floor(Math.random() * 40) + 1; // Generate a random bid
    }
  });


  let highestBid = 0;
  CPUPlayers.forEach(({ player, bid }) => {
    if (bid.value > highestBid) {
      highestBid = bid.value;
      winningPlayer.value = player;
    }
  });

 
  if (winningPlayer.value) {
    winningPlayer.value.cash -= highestBid;

    winningPlayer.value.propertyowned.push(spacesArray[player1.location])
    console.log(winningPlayer.value)
    spacesArray[player1.location].owner = winningPlayer.value.name
    
  }

  winningBid.value = highestBid;
};


    const handleAuctionFinished = () => {
      showAuctionResult.value = false; 
      console.log("Auction finished");
      emit('auctionfinished'); 
      switchPlayer()
    };

    return {
      bidAmount,
      showAuctionResult,
      placeBid, 
      generateCPUBids, 
      player2Bid, 
      player3Bid, 
      player4Bid,
      handleAuctionFinished, 
      winningPlayer,  
      winningBid,     
    };
  }
};
</script>
