<template>
  <div class="w-[100vw] h-[100vh] bg-blue-400 absolute top-12 left-0 right-0 text-[3vw] text-center">
    Players
    <div class="playersTradeWrapper text-lg flex w-[90vw] h-[80vh] justify-around mt-12 ml-16">
      <div id="player1" class="flex-1 text-center bg-blue-200 w-24 h-12 rounded-md border-green-200">
        <div id="playerName" class="h-12 text-center pt-4 text-[2vw]">{{ player1.name }}</div>
        <img src="../assets/avatar1.jpg" class="h-[12vh]" />
        <div id="player1money" class="text-green-400 text-xl bg-white h-12">$ {{ player1.cash }}</div>
        <button @click="selectPlayer('player1')" class="w-24 h-24 bg-green-400">Select Player</button>
      </div>

      <div id="player2" class="flex-1 text-center bg-blue-200 w-24 h-12 rounded-md border-green-200">
        <div id="playerName" class="h-12 text-center pt-4 text-[2vw]">{{ CPUPlayer.name }}</div>
        <img src="../assets/avatar1.jpg" class="h-[12vh]" />
        <div id="player2money" class="text-green-400 text-xl bg-white h-12">$ {{ CPUPlayer.cash }}</div>
        <button @click="selectPlayer('CPUPlayer')" class="w-24 h-24 bg-green-400">Select Player</button>
      </div>

      <div id="player3" class="flex-1 text-center bg-blue-200 w-24 h-12 rounded-md border-green-200">
        <div id="playerName" class="h-12 text-center pt-4 text-[2vw]">{{ CPUPlayer2.name }}</div>
        <img src="../assets/avatar1.jpg" class="h-[12vh]" />
        <div id="player3money" class="text-green-400 text-xl bg-white h-12">$ {{ CPUPlayer2.cash }}</div>
        <button @click="selectPlayer('CPUPlayer2')" class="w-24 h-24 bg-green-400">Select Player</button>
      </div>
      
      <div id="player4" class="flex-1 text-center bg-blue-200 w-24 h-12 rounded-md border-green-200">
        <div id="playerName" class="h-12 text-center pt-4 text-[2vw]">{{ CPUPlayer3.name }}</div>
        <img src="../assets/avatar1.jpg" class="h-[12vh]" />
        <div id="player4money" class="text-green-400 text-xl bg-white h-12">$ {{ CPUPlayer3.cash }}</div>
        <button @click="selectPlayer('CPUPlayer3')" class="w-24 h-24 bg-green-400">Select Player</button>
      </div>
    </div>

    <div id="tradeMenu" class="absolute bottom-44 text-lg bg-blue-300 flex gap-48 ml-44">
      <p class="text-[2vw]">What you are offering</p>
      <div id="giveTrade">
        <select v-model="offering" class="text-[2vw]">
          <option value="cash">Cash</option>
          <option value="property">Property</option>
        </select>

        <div v-if="offering === 'cash'" class="mt-4">
          <label for="cashAmount" class="text-[2vw]">How much cash?</label>
          <input v-model="cashAmount" type="number" id="cashAmount" class="text-[2vw] border mt-2" placeholder="Enter amount" />
        </div>

        <div v-if="offering === 'property'" class="mt-4">
          <label for="propertySelect" class="text-[2vw]">Select Property</label>
          <select v-model="selectedProperty" id="propertySelect" class="text-[2vw] mt-2">
            <option v-for="(property, index) in player1.propertyowned" :key="index" :value="property">{{ property.name }}</option>
          </select>
        </div>
      </div>

      <p class="text-[2vw]">What you want</p>
      <div id="getTrade">
        <select v-model="wanting" class="text-[2vw]">
          <option value="cash">Cash</option>
          <option value="property">Property</option>
        </select>

        <div v-if="wanting === 'cash'" class="mt-4">
          <label for="wantedCash" class="text-[2vw]">How much cash?</label>
          <input v-model="wantedCash" type="number" id="wantedCash" class="text-[2vw] border mt-2" placeholder="Enter amount" />
        </div>

        <div v-if="wanting === 'property'" class="mt-4">
          <label for="wantedProperty" class="text-[2vw]">Select Property</label>
          <select v-model="wantedProperty" id="wantedProperty" class="text-[2vw] mt-2">
            <option v-for="(property, index) in selectedPlayer?.properties" :key="index" :value="property">{{ property.name }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { player1, CPUPlayer, CPUPlayer2, CPUPlayer3 } from "../composables/players";
import { ref } from "vue";

export default {
  name: "Trade",
  props: [],
  setup(props) {
    const offering = ref("cash");
    const wanting = ref("cash");

    const cashAmount = ref(0);
    const selectedProperty = ref("");
    const wantedCash = ref(0);
    const wantedProperty = ref("");

    const selectedPlayer = ref(null);

    // Function to select the player and update the available properties and cash
    const selectPlayer = (player) => {
    
      switch (player) {
        case 'player1':
          selectedPlayer.value = player1;
          break;
        case 'CPUPlayer':
          selectedPlayer.value = CPUPlayer;
          break;
        case 'CPUPlayer2':
          selectedPlayer.value = CPUPlayer2;
          break;
        case 'CPUPlayer3':
          selectedPlayer.value = CPUPlayer3;
          break;
        default:
          selectedPlayer.value = null;
          
      }
      console.log(selectedPlayer.value.propertyowned)
    };

    return {
      player1,
      CPUPlayer,
      CPUPlayer2,
      CPUPlayer3,
      offering,
      wanting,
      cashAmount,
      selectedProperty,
      wantedCash,
      wantedProperty,
      selectedPlayer,
      selectPlayer, 
     
    };
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
