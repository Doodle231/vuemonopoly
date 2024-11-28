<template>
  <div class="w-[100vw] h-[100vh] bg-[rgba(76,94,104,255)] absolute top-0 left-0 right-0  text-center text-white">
    <div class="flex ml-72 mt-36">
      <img src="../assets/avatar2.jpg" class="w-44 h-44 rounded-xl mr-44 ">
      <div>
        <div>Available Cash:  {{ player1.cash }}</div> 
         <form class ="mt-4 mb-4 text-black">
          <label for="bidcash" class ="ml-4">Cash</label>
          <input type="number" id="bidcash" v-model="bidCash"  >
        </form>
        <div>Railroads: {{ player1.railroads }}</div>
        <div>Utilities: {{ player1.utilities }}</div>
        <div>Number of Properties: {{ player1.numberofProperties }}</div>
        <button id ="addCashToTrade" 
        @click ="addCashToTrade"
        class ="w-24 h-12 bg-green-700 mt-4">Add Cash to Offer</button>
      </div>
    </div>
  
    <div id="offerbox" class="absolute right-[24vw] top-4 bg-[rgba(191,100,99,255)] w-72 h-24">
      <div v-if="offers.length > 0">
        <div>Your offer</div>
        <!-- Dynamically display each offer in the offers array -->
        <div v-for="(offer, index) in offers" :key="index" class="offer w-full bg-green-200 hover:bg-green-700">
          {{ offer }}
        </div>
      </div>
      <div v-else>
        <div>Your offer box is empty</div>
      </div>
    </div>

     
    <div id="demandbox" class="absolute right-32 top-4 bg-[rgba(191,100,99,255)] w-72 h-24">
      <div v-if="offers.length > 0">
        <div>Your Demands</div>
        <!-- Dynamically display each offer in the offers array -->
        <div v-for="(offer, index) in offers" :key="index" class="offer w-full bg-green-200 hover:bg-green-700">
          {{ offer }}
        </div>
      </div>
      <div v-else>
        <div>Your Demand box is empty</div>
      </div>
    </div>

    <button id ="makeOfferBtn"
    @click ="handleTradeOffers()"
    class ="w-72 h-12 bg-green-400 text-lg absolute right-72 top-36">Offer Trade</button>
  
  


    <div id="tradecards" class="flex flex-wrap justify-center gap-6 mt-8">
    
      <div
  v-for="(property, index) in ownedProperties"
  :key="index"
  class="card-top h-[20%] border-black border-2 text-black mt-4 w-[calc(25%-1.5rem)]"
  :style="{ flexBasis: 'calc(25% - 1.5rem)' }"
  @click="toggleActiveCard(property)" 
>
  <div :class="getPropertyCardColor(property)" class="card-title text-center pt-4 h-24">
    <h2>{{ property.name }}</h2>
  </div>

  <!-- Dynamically change background color based on the isActive property -->
  <div
    :class="{
      'card-body p-[20px] w-full border-black border-r-2': true,
      'bg-green-200': property.isActive,  // Apply light yellow background when active
      'bg-white': !property.isActive,      // Keep white when not active
    }"
  >
    <div v-if="property.rent" class="rent">Rent: {{ property.rent }}</div>
    <div class="rent-1house">Rent with 1 house: {{ property.house1rent }}</div>
    <div class="rent-2house">Rent with 2 houses: {{ property.house2rent }}</div>
    <div class="rent-3house">Rent with 3 houses: {{ property.house3rent }}</div>
    <div class="rent-4house">Rent with 4 houses: {{ property.house4rent }}</div>
    <div class="rent-hotel">Rent with hotel: {{ property.hotelrent }}</div>
    <div class="house-cost">Houses cost: {{ property.eachhousecost }}</div>
  </div>

  <button class="bg-green-400 w-full">Trade</button>
</div>
    </div>

<div id ="CPUplayersContainer" class=" w-[80vw] h-[20vh] ml-24 mt-12 bg-red-300  z-[999]">
  <div class="absolute" >
  <img src="../assets/avatar3.jpg" class="w-24 h-24 rounded-xl  ">
   
        <div>Cash:  {{ CPUPlayer.cash }}</div> 
        <div>Railroads: {{ CPUPlayer.railroads }}</div>
        <div>Utilities: {{ CPUPlayer.utilities }}</div>
        <div>Number of Properties: {{ CPUPlayer.numberofProperties }}</div>
      
    </div>
</div>




  </div>
</template>

<script>
import { CPUPlayer, player1 } from "../composables/players";
import { spacesArray } from "../composables/spaces";
import { ref } from "vue";
export default {
  name: "Trade",
  setup() {
    
    let bidCash = ref(0)
    let offers = ref([])
    let isCardActive = ref(false)

   

   function toggleActiveCard(property) {
  
  property.isActive = !property.isActive;

  if (property.isActive && !offers.value.includes(property.name)) {
    offers.value.push(property.name);  
  } else {
    
    offers.value = offers.value.filter(offer => offer !== property.name);
  }
 
   
}

function handleTradeOffers(){
   console.log(typeof(bidCash.value))
}


function addCashToTrade() {
  
       if(bidCash.value > player1.cash){
        alert("you don't have enough cash to trade this much")
        return 
       }
     
      if (bidCash.value > 0) {
        // Example logic: Add the bid cash to the offers array
        offers.value.push(bidCash.value);
      } else {
        console.log("Please enter a valid cash amount.");
      }
    }

    // Filter spaces where the owner is player1
    const ownedProperties = spacesArray.filter(space => space.owner === player1.name);

    function getPropertyCardColor(property) {
     
    
      if (property.name === "Mediterranean Avenue" || property.name === "Baltic Avenue") {
        return "bg-orange-900";
      } else if (property.name === "Oriental Avenue" || property.name === "Vermont Avenue") {
        return "bg-blue-200";
      } else if (property.name === "St. Charles Place") {
        return "bg-fuchsia-500";
      } else if (property.name === "Reading Railroad") {
        return "bg-red-600";
      } else if (property.name === "Pennsylvania Railroad") {
        return "bg-yellow-600";
      } else {
        return "bg-green-600";
      }
    }

    return {
      player1,
      ownedProperties,  // Array of properties player1 owns
      getPropertyCardColor, 
      offers, 
      isCardActive, 
      toggleActiveCard, 
      addCashToTrade,
      bidCash, 
      handleTradeOffers, 
      CPUPlayer, 
    };
  }
};
</script>

