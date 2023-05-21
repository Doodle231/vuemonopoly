<script>
import { spacesArray } from "../composables/spaces";

export default {
  name: 'PropertyCards',
  props: [
    'rent',
    'rent1house',
    'rent2house',
    'rent3house',
    'rent4house',
    'renthotel',
    'housecost',
    'hotelscost',
  ],

  setup() {
    let currentLocation = 11;

    function getPropertyCardColor() {
      if (currentLocation === 9 || currentLocation === 7) {
        return 'bg-red-950';
      } else if (currentLocation === 4 || currentLocation === 2 || currentLocation === 1) {
        return 'bg-blue-200';
      } else if (currentLocation === 11 || currentLocation === 13 || currentLocation === 14) {
        return 'bg-fuchsia-500';
      } else {
        return '';
      }
    }

    return { spacesArray, currentLocation, getPropertyCardColor };
  },
};
</script>

<template>
  <div class="propertycard-modal w-[30vw] h-[70vh] top-[20vh] left-[25%] bg-slate-100 absolute z-[999] text-4xl">
    <div :class="getPropertyCardColor()" class="card-top w-[80%] h-[15%] ml-[10%] mt-12 border-black border-4">
      <div class="card-title text-center pt-4">
        <h2>Property Deed</h2>
        <h1 class="text-6xl mt-5 font-bold">{{spacesArray[currentLocation].name}}</h1>
      </div>
    </div>

    <div class="card-body mt-16 ml-16">
      <div class="rent">Rent {{ spacesArray[currentLocation].rent }}</div>
      <div class="rent-1house">Rent with 1 house {{ spacesArray[currentLocation].house1rent }}</div>
      <div class="rent-2house">Rent with 2 houses {{ spacesArray[currentLocation].house2rent }}</div>
      <div class="rent-3house">Rent with 3 houses {{ spacesArray[currentLocation].house3rent }}</div>
      <div class="rent-4house">Rent with 4 houses {{ spacesArray[currentLocation].house4rent }}</div>
      <div class="rent-hotel">Rent with hotel {{ spacesArray[currentLocation].hotelrent }}</div>
      <div class="house-cost">Houses Cost {{ spacesArray[currentLocation].eachhousecost }}</div>
    </div>

    <button id ="buyproperty" class ="w-24 h-12 absolute bottom-[-2.5%] left-[-5%] text-6xl" ><img src="../assets/checkmark.png" >Buy</button>
    <button id ="decline">Decline</button>
  </div>
</template>