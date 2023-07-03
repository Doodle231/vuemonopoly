
<template>
   
    <div  class="card-top w-[50%] h-[15%]  border-black border-4 ">
      <div :class="getPropertyCardColor()" class="card-title text-center pt-4 h-24">
        <h2>{{propertyName}}</h2>
        <h1 class="text-6xl mt-5 font-bold"></h1>
      </div>
  
      <div class="card-body mt-16 ml-16">
        <div v-if="rent" class="rent">Rent {{ rent }}</div>
        <div class="rent-1house">Rent with 1 house {{ rentWithOneHouse }}</div>
        <div class="rent-2house">Rent with 2 houses {{ rentWithTwoHouse }}</div>
        <div class="rent-3house">Rent with 3 houses {{ rentWithThreeHouse }}</div>
        <div class="rent-4house">Rent with 4 houses {{ rentWithFourHouse }}</div>
        <div class="rent-hotel">Rent with hotel {{ rentWithHotel }}</div>
        <div class="house-cost">Houses Cost {{ houseCost }}</div>
      </div>
  
     
    </div>
  </template>
  
  <script>

  import { spacesArray } from "../composables/spaces";
  import { player1 } from "../composables/players";
  
  export default {
    props: ["cardIndex"],
  
    setup(props) {
        
      function getPropertyCardColor() {
        let cardIndex = player1.location
        if (cardIndex === 1 || cardIndex === 3) {
          return "bg-orange-900";
        } else if (cardIndex === 6 || cardIndex === 8 || cardIndex === 9) {
          return "bg-blue-200";
        } else if (cardIndex === 11 || cardIndex === 13 || cardIndex === 14) {
          return "bg-fuchsia-500";
        } else {
          return "";
        }
      }
  
      let currentLocation = player1.location
    
      let price = spacesArray[currentLocation].price 
      let propertyName = spacesArray[currentLocation].name 
      let rent = spacesArray[currentLocation].rent 
      let rentWithOneHouse = spacesArray[currentLocation].house1rent 
      let rentWithTwoHouse = spacesArray[currentLocation].house2rent 
      let rentWithThreeHouse = spacesArray[currentLocation].house3rent 
      let rentWithFourHouse = spacesArray[currentLocation].house4rent 
      let rentWithHotel = spacesArray[currentLocation].hotelrent 
      let houseCost = spacesArray[currentLocation].eachhousecost 
  
     
  
    
      function declinePurchase() {
        //
      }
  
      return {
        getPropertyCardColor,
        currentLocation,
        price,
        propertyName,
        rent,
        rentWithOneHouse,
        rentWithTwoHouse,
        rentWithThreeHouse,
        rentWithFourHouse,
        rentWithHotel,
        houseCost,
      
        declinePurchase,
      };
    },
  };
  </script>
  