<template>
  <div id="gameboard" class="grid grid-cols-11 grid-rows-11 mt-4 relative w-[100vw] md:w-[60vw] md:ml-10 md:mt-10 h-[90vh] bg-[#D9D9D9]">
    <div id="bottom-row" class="grid grid-cols-11 col-start-1 row-start-[-1] col-end-12 relative h-[9vh]">
      <div v-for="(space, index) in bottomRow" :key="space.id" class="border-2 border-slate-600">
        <div :class="getItemClass(index)" class="pt-4 pb-4">
          <img v-if="space.id === position" src ="../assets/boot.png" alt="Image">
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
        <h1 class="mt-9">{{ space.id }}</h1>
      </div>
    </div>

    <div id="left-column" class="grid grid-rows-12 row-start-3 absolute w-[5.5vw]">
      <div v-for="(space, index) in leftColumn" :key="space.id" class="border-2 border-slate-600">
        <div :class="getLeftColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === position" src ="../assets/boot.png" alt="Image">
          
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
        <h1 class="mt-9">{{ space.id }}</h1>
      </div>
    </div>

    <div id="top-row" class="grid grid-cols-11 col-start-2 col-end-12 relative row-span-2">
      <div v-for="(space, index) in topRow" :key="space.id">
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
        <h1 class="mt-9">{{ space.id }}</h1>
      </div>
    </div>

    <div id="right-column" class="grid grid-rows-12 column-start-[-1] absolute right-[0] top-[5.5vw] w-[5.5vw] row-start-11">
      <div v-for="(space, index) in rightColumn" :key="space.id">
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
        <h1 class="mt-9">{{ space.id }}</h1>
      </div>
    </div>

    <button @click="resetPosition" id="rolldicebutton" class="w-24 h-24 bg-green-500">Reset Position</button>
  </div>

  <div id="logo" class="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly</div>
</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { spacesArray, bottomRow, leftColumn, rightColumn, topRow } from '../composables/spaces.js';


export default {
  name: 'GameBoard',
  setup() {
    const position = ref(0);

    const incrementPosition = () => {
      if (position.value < 12) {
        position.value++;
      }
    };

    const resetPosition = () => {
      position.value = 0;
    };

    let intervalId = null;
    const startAutoIncrement = () => {
      intervalId = setInterval(incrementPosition, 600);
    };
    const stopAutoIncrement = () => {
      clearInterval(intervalId);
    };

    watch(position, (newValue) => {
      if (newValue >= 12) {
        stopAutoIncrement();
      }
    });

    onMounted(startAutoIncrement);
    onUnmounted(stopAutoIncrement);

    const getItemClass = (index) => {
      if (index === 9 || index === 7) {
        return 'bg-red-950';
      } else if (index === 4 || index === 2 || index === 1) {
        return 'bg-blue-200';
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-fuchsia-500';
      } else {
        return '';
      }
    };

    const getLeftColumnClass = (index) => {
      if (index === 6 || index === 8 || index === 5) {
        return 'bg-pink-600';
      } else if (index === 3 || index === 1 || index === 0) {
        return 'bg-orange-500';
      } else if (index === 11 || index === 13 || index === 14) {
        return 'bg-pink-900';
      } else {
        return '';
      }
    };

    const shouldAppendImage = (spaceid) => {
      if (randomIndex === null) {
        randomIndex = Math.floor(Math.random() * spacesArray.length);
      }

      return spaceid === Math.floor(Math.random() * 6) + 1;
    };

    const getImageSrc = (position) => {
      // Return the image source based on the position
      // Replace this with your actual logic
      return `../assets/boot.png`
    };

    let randomIndex = null;
    let diceRolled = Math.floor(Math.random() * 12);

    return {
      getItemClass,
      getLeftColumnClass,
      spacesArray,
      topRow,
      bottomRow,
      leftColumn,
      rightColumn,
      shouldAppendImage,
      randomIndex,
      diceRolled,
      position,
      resetPosition,
      getImageSrc,
    };
  },
};
</script>

<style>
/* Your component's styles here */
</style>
