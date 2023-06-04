<template>
 
  <div id="gameboard"  class="grid grid-cols-11 grid-rows-11 mt-4 relative w-[100vw] md:w-[60vw] md:ml-10 md:mt-10 h-[90vh] bg-[#D9D9D9]">
    <div id="bottom-row" class="grid grid-cols-11 col-start-1 row-start-[-1] col-end-12 relative h-[9vh]">
      <div v-for="(space, index) in bottomRow" :key="space.id" class="border-2 border-slate-600">
        <div :class="getItemClass(index)" class="pt-4 pb-4">
          <img v-if="space.id === player1Position" src ="../assets/boot.png" alt="Image">
          <img v-if="space.id === cpuPlayer1Position" src ="../assets/car.png" alt="Image">
        </div>
        <div class="space-name text-xs mt-4">{{ space.name }}</div>
        <h1 class="mt-9">{{ space.id }}</h1>
      </div>
    </div>

    <div id="left-column" class="grid grid-rows-12 row-start-3 absolute w-[5.5vw]">
      <div v-for="(space, index) in leftColumn" :key="space.id" class="border-2 border-slate-600">
        <div :class="getLeftColumnClass(index)" class="pt-2 pb-2">
          <img v-if="space.id === player1Position" src ="../assets/boot.png" alt="Image">
          
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

    <template v-if="isCardActive"> <MainModal :isCardActive="isCardActive" 
      :cardIndex="activeCardIndex" 
      :cpuPlayer1Position = "cpuPlayer1Position"
    
      @test ="myAction" />
       </template>

 
  </div>
 

  <div id="logo" class="absolute z-99 text-[10vw] top-[15%] left-[10%] text-rose-800">Monopoly</div>

</template>

<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { spacesArray, bottomRow, leftColumn, rightColumn, topRow } from '../composables/spaces.js';
import MainModal from "./MainModal.vue";


import { activePlayer, player1 , CPUPlayer, switchPlayer} from '../composables/players';


export default {
  components: {
    MainModal,
    
},
  name: 'GameBoard',
  props: [
    'diceRolled',
     'cpuPlayer1DiceRolled',
     'cpuPlayer2DiceRolled',
     'cpuPlayer3DiceRolled',
     'informationModalIsActive'
   
    
  ],
  

  setup(props) {


    function myAction (){
      startAutoIncrement()
      switchPlayer()
      activePlayer.diceRolled = 3
      activePlayer.location += activePlayer.diceRolled
     console.log(activePlayer)
     CPULand()
     return 
    }
  
    const isCardActive = ref(false)
    
    const activeCardIndex = ref(null)
    

    const player1Position = ref(0)
    const cpuPlayer1Position =ref(0)
    const cpuPlayer2Position = ref(0)
    const cpuPlayer3Position = ref(0)
   
    function CPULand (){
      console.log(spacesArray[activePlayer.location].name)
    }
   
    const incrementPosition = () => {
      
      if (player1Position.value < props.diceRolled) {
        player1Position.value++;
      }
     
      if (cpuPlayer1Position.value < CPUPlayer.diceRolled) {
        cpuPlayer1Position.value ++;
      }


    };

    let intervalId = null;
    const startAutoIncrement = () => {
      intervalId = setInterval(incrementPosition, 200);
    };
    const stopAutoIncrement = () => {
      clearInterval(intervalId);
    };


   
    watch(player1Position, (newValue) => {
      if (newValue >= props.diceRolled) {
        activePlayer.location += props.diceRolled
       activeCardIndex.value += activePlayer.location
     
       isCardActive.value = true; 
        stopAutoIncrement();
       
      }
    });


    watch(cpuPlayer1Position, (newValue) => {
      console.log("firing")
      if (newValue >= CPUPlayer.diceRolled) {
        activePlayer.location += CPUPlayer.diceRolled
       activeCardIndex.value += activePlayer.location
     
      
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

 

    const getImageSrc = () => {
      return `../assets/boot.png`
      
    };



    return {
      getItemClass,
      getLeftColumnClass,
      spacesArray,
      topRow,
      bottomRow,
      leftColumn,
      rightColumn,
      player1Position,
      getImageSrc,
      activeCardIndex, 
      isCardActive, 
      cpuPlayer1Position, 
      cpuPlayer2Position, 
      cpuPlayer3Position,
      myAction, 
      CPULand, 
     
      
 
      
    };
  },
};
</script>

