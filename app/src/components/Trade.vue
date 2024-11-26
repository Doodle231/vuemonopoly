<template>
  <div class="w-[100vw] h-[100vh] bg-gray-300 absolute top-12 left-0 right-0  text-center">
    <div class="flex ml-72">
      <img src="../assets/avatar2.jpg" class="w-44 h-44 rounded-xl mr-44">
      <div>
        <div>Cash: {{ player1.cash }}</div> 
        <div>Railroads: {{ player1.railroads }}</div>
        <div>Utilities: {{ player1.utilities }}</div>
        <div>Number of Properties: {{ player1.numberofProperties }}</div>
      </div>
    </div>
  
    <div id="offerbox" class="absolute right-36 top-4 bg-yellow-300 w-72 h-24">
      Your offer
    </div>
  



    <!-- Container for trade cards -->
    <div id="tradecards" class="flex flex-wrap justify-center gap-6 mt-8">
      <!-- Loop through owned properties and create trade cards -->
      <div
        v-for="(property, index) in ownedProperties"
        :key="index"
        class="card-top h-[20%] border-black border-2 text-black mt-4 w-[calc(25%-1.5rem)]" 
        :style="{ flexBasis: 'calc(25% - 1.5rem)' }"
      >
        <div :class="getPropertyCardColor(property)" class="card-title text-center pt-4 h-24">
          <h2>{{ property.name }}</h2>
        </div>

        <div class="card-body p-[20px] w-full bg-white border-black border-r-2">
          <div v-if="property.rent" class="rent">Rent: {{ property.rent }}</div>
          <div class="rent-1house">Rent with 1 house: {{ property.house1rent }}</div>
          <div class="rent-2house">Rent with 2 houses: {{ property.house2rent }}</div>
          <div class="rent-3house">Rent with 3 houses: {{ property.house3rent }}</div>
          <div class="rent-4house">Rent with 4 houses: {{ property.house4rent }}</div>
          <div class="rent-hotel">Rent with hotel: {{ property.hotelrent }}</div>
          <div class="house-cost">Houses cost: {{ property.eachhousecost }}</div>
        </div>
        <button class ="bg-green-400 w-full">Trade</button>
      </div>
    </div>
  </div>
</template>

<script>
import { player1 } from "../composables/players";
import { spacesArray } from "../composables/spaces";

export default {
  name: "Trade",
  setup() {
    // Filter spaces where the owner is player1
    const ownedProperties = spacesArray.filter(space => space.owner === player1.name);

    function getPropertyCardColor(property) {
     console.log(ownedProperties)
     console.log(spacesArray)
      // Dynamically set card colors based on the property type
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
      getPropertyCardColor
    };
  }
};
</script>

